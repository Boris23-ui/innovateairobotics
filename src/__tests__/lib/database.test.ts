import { courseService, userService } from '../../lib/database';
import { supabase } from '../../lib/supabase';

// Mock Supabase client
jest.mock('../../lib/supabase', () => ({
    supabase: {
        from: jest.fn(() => ({
            select: jest.fn().mockReturnThis(),
            insert: jest.fn().mockReturnThis(),
            update: jest.fn().mockReturnThis(),
            delete: jest.fn().mockReturnThis(),
            eq: jest.fn().mockReturnThis(),
            single: jest.fn(),
        })),
    },
}));

describe('Database Services', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Mock environment variables check
        process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://mock.supabase.co';
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'mock-key';
    });

    describe('userService', () => {
        it('should get user by id', async () => {
            const mockUser = { id: '123', email: 'test@example.com', name: 'Test User' };
            (supabase.from as jest.Mock).mockImplementation(() => ({
                select: jest.fn().mockReturnThis(),
                eq: jest.fn().mockReturnThis(),
                single: jest.fn().mockResolvedValue({ data: mockUser, error: null }),
            }));

            const result = await userService.getById('123');
            expect(result).toEqual(mockUser);
            expect(supabase.from).toHaveBeenCalledWith('users');
        });

        it('should throw error if supabase returns error', async () => {
            const mockError = { message: 'User not found' };
            (supabase.from as jest.Mock).mockImplementation(() => ({
                select: jest.fn().mockReturnThis(),
                eq: jest.fn().mockReturnThis(),
                single: jest.fn().mockResolvedValue({ data: null, error: mockError }),
            }));

            await expect(userService.getById('123')).rejects.toEqual(mockError);
        });
    });

    describe('courseService', () => {
        it('should get courses by instructor', async () => {
            const mockCourses = [{ id: 'c1', title: 'Course 1' }];
            (supabase.from as jest.Mock).mockImplementation(() => ({
                select: jest.fn().mockReturnThis(),
                eq: jest.fn().mockResolvedValue({ data: mockCourses, error: null }),
            }));

            const result = await courseService.getByInstructor('inst1');
            expect(result).toEqual(mockCourses);
            expect(supabase.from).toHaveBeenCalledWith('courses');
        });
    });
});
