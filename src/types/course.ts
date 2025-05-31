export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    id: string;
    name: string;
    email: string;
  };
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in weeks
  startDate: Date;
  endDate: Date;
  enrollmentStatus: 'open' | 'closed' | 'upcoming';
  maxStudents: number;
  currentEnrollment: number;
  modules: Module[];
  prerequisites: string[];
  learningObjectives: string[];
  thumbnailUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  duration: number; // in minutes
  isPublished: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'video' | 'reading' | 'quiz' | 'assignment';
  duration: number; // in minutes
  order: number;
  isPublished: boolean;
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'link' | 'document';
  url: string;
  size?: number;
  createdAt: Date;
}

export interface Enrollment {
  id: string;
  courseId: string;
  studentId: string;
  status: 'active' | 'completed' | 'dropped';
  progress: number;
  startDate: Date;
  completionDate?: Date;
  lastAccessed: Date;
  grades: Grade[];
}

export interface Grade {
  id: string;
  lessonId: string;
  score: number;
  maxScore: number;
  feedback?: string;
  submittedAt: Date;
  gradedAt: Date;
} 