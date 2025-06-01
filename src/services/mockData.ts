// Mock User Data
export const mockTeacher = {
  displayName: 'John Smith',
  email: 'teacher@example.com',
  role: 'teacher',
  bio: 'Experienced robotics teacher with 10 years of teaching experience.',
  phoneNumber: '+1 (555) 123-4567',
  classes: ['Robotics 101', 'Advanced Programming'],
  notifications: {
    email: true,
    push: true,
    assignments: true
  }
};

export const mockStudent = {
  displayName: 'Jane Doe',
  email: 'student@example.com',
  role: 'student',
  bio: 'Passionate about robotics and programming.',
  phoneNumber: '+1 (555) 987-6543',
  enrolledClasses: ['Robotics 101'],
  notifications: {
    email: true,
    push: true,
    assignments: true
  }
};

// For backward compatibility
export const mockUser = mockTeacher;

// Mock Stats Data
export const mockTeacherStats = {
  totalClasses: 4,
  activeStudents: 120,
  pendingAssignments: 8,
  averageScore: 85,
};

export const mockStudentStats = {
  enrolledClasses: 3,
  pendingAssignments: 5,
  averageGrade: 88,
  attendance: 95,
};

// Mock Activities
export const mockActivities = [
  {
    id: '1',
    type: 'assignment' as const,
    title: 'New Assignment Submitted',
    description: 'John Doe submitted the Robotics Basics Quiz',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: '2',
    type: 'class' as const,
    title: 'Class Schedule Updated',
    description: 'Advanced Robotics class moved to Room 302',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
  },
  {
    id: '3',
    type: 'student' as const,
    title: 'New Student Enrolled',
    description: 'Sarah Smith joined the Robotics Club',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
];

export interface MockAssignment {
  id: string;
  title: string;
  class: string;
  dueDate: Date;
  status: 'completed' | 'in-progress' | 'not-started';
}

export const mockAssignments = [
  {
    id: 'assignment-1',
    title: 'Basic Robot Movement',
    class: 'Robotics 101',
    dueDate: new Date('2024-03-15'),
    status: 'not-started',
    submittedBy: null
  }
];

// Mock Classes
export const mockClasses = [
  {
    id: 'robotics-101',
    name: 'Robotics 101',
    teacher: mockTeacher.displayName,
    students: [mockStudent],
    schedule: 'Mon, Wed 10:00 AM - 11:30 AM',
    description: 'Introduction to robotics and basic programming concepts.',
    room: '101',
    nextSession: new Date(Date.now() + 24 * 60 * 60 * 1000) // Next session in 24 hours
  }
];

// Mock Service Functions
export const getMockTeacherStats = () => Promise.resolve(mockTeacherStats);
export const getMockStudentStats = () => Promise.resolve(mockStudentStats);
export const getMockTeacherActivities = (callback: (activities: typeof mockActivities) => void) => {
  callback(mockActivities);
  return () => {}; // Return empty unsubscribe function
};
export const getMockStudentAssignments = (callback: (assignments: typeof mockAssignments) => void) => {
  callback(mockAssignments);
  return () => {}; // Return empty unsubscribe function
};
export const getMockStudentClasses = (callback: (classes: typeof mockClasses) => void) => {
  callback(mockClasses);
  return () => {}; // Return empty unsubscribe function
}; 