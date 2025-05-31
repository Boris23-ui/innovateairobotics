export const mockUsers = {
  teacher: {
    id: "user_teacher",
    firstName: "John",
    lastName: "Doe",
    email: "teacher@example.com",
    role: "teacher",
    publicMetadata: {
      role: "teacher"
    }
  },
  student: {
    id: "user_student",
    firstName: "Jane",
    lastName: "Smith",
    email: "student@example.com",
    role: "student",
    publicMetadata: {
      role: "student"
    }
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