/**
 * Minimal tests for the Clerk webhook route.
 * Mocks svix verification and the userService to test create/update flows.
 */
import { jest } from '@jest/globals';

// Ensure webhook secret is set for the route (tests run in-process)
process.env.CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET || 'test-secret';

let mockHeaders: Record<string, string | null> = {};

// mock svix Webhook (use jest.mock to ensure it applies in CommonJS Jest runs)
const mockVerify = jest.fn();
jest.mock('svix', () => ({
  Webhook: jest.fn().mockImplementation(() => ({
    verify: (body: any, headers: any) => mockVerify(body, headers),
  })),
}));

// mock userService (mapped by jest.config moduleNameMapper to src/lib)
const createMock = jest.fn();
const getByEmailMock = jest.fn();
const updateMock = jest.fn();
jest.mock('@/lib/database', () => ({
  userService: {
    create: createMock,
    getByEmail: getByEmailMock,
    update: updateMock,
  },
}));

describe('Clerk webhook route', () => {
  let routeModule: typeof import('../../apps/shell/app/api/webhooks/clerk/route');

  beforeAll(async () => {
    // import route after mocks are registered
  routeModule = await import('../../apps/shell/app/api/webhooks/clerk/route');
  });

  beforeEach(() => {
    mockVerify.mockReset();
    createMock.mockReset();
    getByEmailMock.mockReset();
    updateMock.mockReset();
    mockHeaders = {};
  });

  test('returns 400 when verification fails', async () => {
    mockVerify.mockImplementation(() => { throw new Error('bad sig'); });
    mockHeaders = {
      'svix-id': '1',
      'svix-timestamp': '123',
      'svix-signature': 'sig',
    };

  const req = new Request('https://example.com', { method: 'POST', body: JSON.stringify({}), headers: { 'svix-id': '1', 'svix-timestamp': '123', 'svix-signature': 'sig' } });
    const res = await routeModule.POST(req);
    expect(res.status).toBe(400);
  });

  test('updates existing user when email found', async () => {
    const evt = {
      type: 'user.created',
      data: {
        id: 'clerk-1',
        email_addresses: [{ email_address: 'a@b.com' }],
        first_name: 'A',
        last_name: 'B',
        image_url: 'https://img',
        public_metadata: { role: 'student' },
      },
    };

    mockVerify.mockImplementation(() => evt);
    mockHeaders = {
      'svix-id': '1',
      'svix-timestamp': '123',
      'svix-signature': 'sig',
    };

  (getByEmailMock as any).mockResolvedValue({ id: 'existing-1' });

  const req = new Request('https://example.com', { method: 'POST', body: JSON.stringify(evt), headers: { 'svix-id': '1', 'svix-timestamp': '123', 'svix-signature': 'sig' } });
    const res = await routeModule.POST(req);
    expect(res.status).toBe(200);
    expect(updateMock).toHaveBeenCalledWith('existing-1', expect.objectContaining({ name: 'A B', role: 'student', avatar: 'https://img' }));
  });

  test('creates new user when email not found', async () => {
    const evt = {
      type: 'user.created',
      data: {
        id: 'clerk-2',
        email_addresses: [{ email_address: 'c@d.com' }],
        first_name: 'C',
        last_name: 'D',
        image_url: 'https://img2',
        public_metadata: { role: 'teacher' },
      },
    };

    mockVerify.mockImplementation(() => evt);
    mockHeaders = {
      'svix-id': '2',
      'svix-timestamp': '456',
      'svix-signature': 'sig2',
    };

  (getByEmailMock as any).mockResolvedValue(null);

  const req = new Request('https://example.com', { method: 'POST', body: JSON.stringify(evt), headers: { 'svix-id': '2', 'svix-timestamp': '456', 'svix-signature': 'sig2' } });
    const res = await routeModule.POST(req);
    expect(res.status).toBe(200);
    expect(createMock).toHaveBeenCalledWith(expect.objectContaining({ id: 'clerk-2', email: 'c@d.com', name: 'C D', role: 'teacher', avatar: 'https://img2' }));
  });
});
