// Educational Platform Types

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  age?: number;
  grade?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'student' | 'teacher' | 'admin' | 'parent';

export interface Course {
  id: string;
  title: string;
  description: string;
  ageGroup: AgeGroup;
  difficulty: Difficulty;
  duration: string;
  lessons: number;
  rating: number;
  enrolledStudents: number;
  image?: string;
  tags: string[];
  prerequisites?: string[];
  learningObjectives: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type AgeGroup = 'Tiny Tinkerers' | 'Robot Explorers' | 'Tech Titans' | 'AI Avengers';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
  duration: number; // in minutes
  order: number;
  isInteractive: boolean;
  hasQuiz: boolean;
  hasProject: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Assignment {
  id: string;
  courseId: string;
  lessonId?: string;
  title: string;
  description: string;
  type: AssignmentType;
  dueDate?: Date;
  points: number;
  rubric?: RubricCriteria[];
  attachments?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type AssignmentType = 'quiz' | 'project' | 'coding' | 'presentation' | 'research';

export interface RubricCriteria {
  id: string;
  title: string;
  description: string;
  maxPoints: number;
  weight: number;
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  content: string;
  attachments?: string[];
  code?: string;
  submittedAt: Date;
  gradedAt?: Date;
  score?: number;
  feedback?: string;
  status: SubmissionStatus;
}

export type SubmissionStatus = 'draft' | 'submitted' | 'graded' | 'late';

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  enrolledAt: Date;
  completedAt?: Date;
  progress: number; // 0-100
  lastAccessedAt: Date;
}

export interface Progress {
  id: string;
  studentId: string;
  courseId: string;
  lessonId?: string;
  completed: boolean;
  score?: number;
  timeSpent: number; // in minutes
  completedAt?: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  category: BadgeCategory;
  criteria: BadgeCriteria;
  points: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
}

export type BadgeCategory = 'achievement' | 'participation' | 'skill' | 'special';

export interface BadgeCriteria {
  type: 'completion' | 'score' | 'time' | 'streak' | 'custom';
  value: number;
  description: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: Date;
  readAt?: Date;
  actionUrl?: string;
}

export type NotificationType = 'assignment' | 'grade' | 'badge' | 'reminder' | 'announcement';

export interface Analytics {
  id: string;
  userId: string;
  event: AnalyticsEvent;
  data: Record<string, any>;
  timestamp: Date;
}

export type AnalyticsEvent = 
  | 'lesson_started'
  | 'lesson_completed'
  | 'assignment_submitted'
  | 'badge_earned'
  | 'course_enrolled'
  | 'course_completed'
  | 'login'
  | 'logout';

// Robotics-specific types
export interface RobotProject {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  ageGroup: AgeGroup;
  materials: string[];
  instructions: string;
  codeTemplate?: string;
  expectedOutcome: string;
  image?: string;
  videoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CodeBlock {
  id: string;
  name: string;
  code: string;
  language: 'javascript' | 'python' | 'blockly' | 'scratch';
  description: string;
  category: string;
  isPublic: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Simulation {
  id: string;
  name: string;
  description: string;
  robotType: 'mobile' | 'arm' | 'humanoid' | 'drone';
  environment: string;
  initialCode?: string;
  objectives: string[];
  maxTime: number; // in minutes
  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  age?: number;
  grade?: string;
}

export interface CourseEnrollmentForm {
  courseId: string;
  studentId: string;
}

export interface AssignmentSubmissionForm {
  assignmentId: string;
  content: string;
  attachments?: File[];
  code?: string;
}

// Filter and search types
export interface CourseFilters {
  ageGroup?: AgeGroup;
  difficulty?: Difficulty;
  duration?: string;
  tags?: string[];
  rating?: number;
}

export interface SearchParams {
  query: string;
  filters?: CourseFilters;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
} 