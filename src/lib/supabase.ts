import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a mock client for build time or when env vars are missing
const createMockClient = () => {
  return createClient('https://mock.supabase.co', 'mock-key');
};

// Only log warning in development, never throw during build
if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV === 'development') {
    console.warn('Supabase environment variables not found. Using mock client.');
  }
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient();

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'student' | 'teacher' | 'admin';
          avatar?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          role: 'student' | 'teacher' | 'admin';
          avatar?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          role?: 'student' | 'teacher' | 'admin';
          avatar?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      courses: {
        Row: {
          id: string;
          title: string;
          description: string;
          instructor_id: string;
          category: string;
          level: 'beginner' | 'intermediate' | 'advanced';
          duration: number;
          start_date: string;
          end_date: string;
          enrollment_status: 'open' | 'closed' | 'upcoming';
          max_students: number;
          current_enrollment: number;
          thumbnail_url?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          instructor_id: string;
          category: string;
          level: 'beginner' | 'intermediate' | 'advanced';
          duration: number;
          start_date: string;
          end_date: string;
          enrollment_status?: 'open' | 'closed' | 'upcoming';
          max_students: number;
          current_enrollment?: number;
          thumbnail_url?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          instructor_id?: string;
          category?: string;
          level?: 'beginner' | 'intermediate' | 'advanced';
          duration?: number;
          start_date?: string;
          end_date?: string;
          enrollment_status?: 'open' | 'closed' | 'upcoming';
          max_students?: number;
          current_enrollment?: number;
          thumbnail_url?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      assignments: {
        Row: {
          id: string;
          title: string;
          description: string;
          course_id: string;
          due_date: string;
          status: 'draft' | 'published' | 'grading' | 'completed';
          total_points: number;
          instructions: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          course_id: string;
          due_date: string;
          status?: 'draft' | 'published' | 'grading' | 'completed';
          total_points: number;
          instructions: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          course_id?: string;
          due_date?: string;
          status?: 'draft' | 'published' | 'grading' | 'completed';
          total_points?: number;
          instructions?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      submissions: {
        Row: {
          id: string;
          assignment_id: string;
          student_id: string;
          submitted_at: string;
          grade?: number;
          feedback?: string;
          content: string;
          attachments?: string[];
        };
        Insert: {
          id?: string;
          assignment_id: string;
          student_id: string;
          submitted_at?: string;
          grade?: number;
          feedback?: string;
          content: string;
          attachments?: string[];
        };
        Update: {
          id?: string;
          assignment_id?: string;
          student_id?: string;
          submitted_at?: string;
          grade?: number;
          feedback?: string;
          content?: string;
          attachments?: string[];
        };
      };
      enrollments: {
        Row: {
          id: string;
          student_id: string;
          course_id: string;
          enrolled_at: string;
          status: 'active' | 'completed' | 'dropped';
        };
        Insert: {
          id?: string;
          student_id: string;
          course_id: string;
          enrolled_at?: string;
          status?: 'active' | 'completed' | 'dropped';
        };
        Update: {
          id?: string;
          student_id?: string;
          course_id?: string;
          enrolled_at?: string;
          status?: 'active' | 'completed' | 'dropped';
        };
      };
    };
  };
} 