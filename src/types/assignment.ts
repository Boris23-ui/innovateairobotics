export interface Assignment {
  id: string;
  title: string;
  description: string;
  courseId: string;
  dueDate: string;
  status: 'draft' | 'published' | 'grading' | 'completed';
  submissions?: {
    id: string;
    studentId: string;
    submittedAt: string;
    grade?: number;
    feedback?: string;
  }[];
  createdAt: string;
  updatedAt: string;
  totalPoints: number;
  instructions: string;
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
} 