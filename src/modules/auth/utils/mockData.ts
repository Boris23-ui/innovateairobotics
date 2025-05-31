import { User, UserRole } from "@/modules/common/types/auth";

export const mockUsers: Record<UserRole, User> = {
  teacher: {
    id: "user_teacher",
    email: "teacher@example.com",
    name: "John Doe",
    role: "teacher",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  },
  student: {
    id: "user_student",
    email: "student@example.com",
    name: "Jane Smith",
    role: "student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  },
  admin: {
    id: "user_admin",
    email: "admin@example.com",
    name: "Admin User",
    role: "admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  }
};

export const mockCourses = [
  {
    id: "course_1",
    title: "Introduction to Robotics",
    description: "Learn the basics of robotics and programming",
    instructor: mockUsers.teacher,
    students: [mockUsers.student]
  },
  {
    id: "course_2",
    title: "Advanced AI Programming",
    description: "Deep dive into AI and machine learning",
    instructor: mockUsers.teacher,
    students: [mockUsers.student]
  }
];

export const mockProgress = {
  [mockUsers.student.id]: {
    "course_1": {
      completed: 60,
      lastAccessed: "2024-03-15",
      assignments: [
        { id: "assign_1", title: "Basic Robot Movement", status: "completed" },
        { id: "assign_2", title: "Sensor Integration", status: "in_progress" }
      ]
    },
    "course_2": {
      completed: 30,
      lastAccessed: "2024-03-14",
      assignments: [
        { id: "assign_3", title: "Neural Networks", status: "not_started" }
      ]
    }
  }
}; 