import { supabase } from './supabase';
import type { Database } from './supabase';

type Tables = Database['public']['Tables'];

// Helper function to check if Supabase is properly configured
const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
};

// User operations
export const userService = {
  async create(user: Tables['users']['Insert']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('users')
      .insert(user)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByEmail(email: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Tables['users']['Update']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Course operations
export const courseService = {
  async create(course: Tables['courses']['Insert']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('courses')
      .insert(course)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getAll() {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        instructor:users!instructor_id(id, name, email)
      `);
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        instructor:users!instructor_id(id, name, email)
      `)
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByInstructor(instructorId: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('instructor_id', instructorId);
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Tables['courses']['Update']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('courses')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Assignment operations
export const assignmentService = {
  async create(assignment: Tables['assignments']['Insert']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('assignments')
      .insert(assignment)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getAll() {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('assignments')
      .select('*');
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('assignments')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByCourse(courseId: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('assignments')
      .select('*')
      .eq('course_id', courseId);
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Tables['assignments']['Update']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('assignments')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { error } = await supabase
      .from('assignments')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Submission operations
export const submissionService = {
  async create(submission: Tables['submissions']['Insert']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('submissions')
      .insert(submission)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByAssignment(assignmentId: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('submissions')
      .select(`
        *,
        student:users!student_id(id, name, email)
      `)
      .eq('assignment_id', assignmentId);
    
    if (error) throw error;
    return data;
  },

  async getByStudent(studentId: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('submissions')
      .select(`
        *,
        assignment:assignments!assignment_id(*)
      `)
      .eq('student_id', studentId);
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Tables['submissions']['Update']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('submissions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Enrollment operations
export const enrollmentService = {
  async create(enrollment: Tables['enrollments']['Insert']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('enrollments')
      .insert(enrollment)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByStudent(studentId: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        course:courses!course_id(*)
      `)
      .eq('student_id', studentId);
    
    if (error) throw error;
    return data;
  },

  async getByCourse(courseId: string) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        student:users!student_id(id, name, email)
      `)
      .eq('course_id', courseId);
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Tables['enrollments']['Update']) {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }
    const { data, error } = await supabase
      .from('enrollments')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
}; 