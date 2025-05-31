import { Timestamp } from 'firebase/firestore';

export interface Assignment {
  id: string;
  title: string;
  description: string;
  courseId: string;
  dueDate: Timestamp;
  status: 'draft' | 'published' | 'grading' | 'completed';
  submissions?: {
    id: string;
    studentId: string;
    submittedAt: Timestamp;
    grade?: number;
    feedback?: string;
  }[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  totalPoints: number;
  instructions: string;
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
} 