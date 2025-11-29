/**
 * @jest-environment node
 */
import { GET, POST } from '../../app/api/courses/route';
import { auth } from '@clerk/nextjs';
import { courseService } from '@/lib/database';

// Mock Clerk auth
jest.mock('@clerk/nextjs', () => ({
    auth: jest.fn(),
}));

// Mock courseService
jest.mock('@/lib/database', () => ({
    courseService: {
        create: jest.fn(),
        getByInstructor: jest.fn(),
    },
}));

// Mock environment variable
process.env.NEXT_PUBLIC_DEMO_MODE = 'false';

describe('Courses API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (auth as jest.Mock).mockReturnValue({ userId: 'user_123' });
    });

    describe('GET', () => {
        it('should return 401 if not authenticated', async () => {
            (auth as jest.Mock).mockReturnValue({ userId: null });
            const req = new Request('http://localhost:3000/api/courses');
            const res = await GET(req);
            expect(res.status).toBe(401);
        });

        it('should return courses for authenticated user', async () => {
            const mockCourses = [{ id: '1', title: 'Test Course' }];
            (courseService.getByInstructor as jest.Mock).mockResolvedValue(mockCourses);

            const req = new Request('http://localhost:3000/api/courses');
            const res = await GET(req);
            const data = await res.json();

            expect(res.status).toBe(200);
            expect(data).toEqual(mockCourses);
            expect(courseService.getByInstructor).toHaveBeenCalledWith('user_123');
        });

        it('should handle database errors', async () => {
            (courseService.getByInstructor as jest.Mock).mockRejectedValue(new Error('DB Error'));

            const req = new Request('http://localhost:3000/api/courses');
            const res = await GET(req);

            expect(res.status).toBe(500);
        });
    });

    describe('POST', () => {
        const validCourseData = {
            name: 'New Course',
            description: 'Desc',
            category: 'Tech',
            level: 'Beginner',
            duration: 10,
            startDate: '2024-01-01',
            endDate: '2024-02-01',
            maxStudents: 20,
        };

        it('should create a course successfully', async () => {
            const mockCreatedCourse = { id: 'new_1', ...validCourseData };
            (courseService.create as jest.Mock).mockResolvedValue(mockCreatedCourse);

            const req = new Request('http://localhost:3000/api/courses', {
                method: 'POST',
                body: JSON.stringify(validCourseData),
            });
            const res = await POST(req);
            const data = await res.json();

            expect(res.status).toBe(200);
            expect(data).toEqual(mockCreatedCourse);
        });
    });
});
