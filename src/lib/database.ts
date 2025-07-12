import { supabase } from './supabase';
import type { Database } from './supabase';

type Tables = Database['public']['Tables'];

// User operations
export const userService = {
  async create(user: Tables['users']['Insert']) {
    const { data, error } = await supabase
      .from('users')
      .insert(user)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByEmail(email: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Tables['users']['Update']) {
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
    const { data, error } = await supabase
      .from('courses')
      .insert(course)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getAll() {
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
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('instructor_id', instructorId);
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Tables['courses']['Update']) {
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
    const { data, error } = await supabase
      .from('assignments')
      .insert(assignment)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getAll() {
    const { data, error } = await supabase
      .from('assignments')
      .select('*');
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('assignments')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByCourse(courseId: string) {
    const { data, error } = await supabase
      .from('assignments')
      .select('*')
      .eq('course_id', courseId);
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Tables['assignments']['Update']) {
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
    const { data, error } = await supabase
      .from('submissions')
      .insert(submission)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByAssignment(assignmentId: string) {
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
    const { data, error } = await supabase
      .from('enrollments')
      .insert(enrollment)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByStudent(studentId: string) {
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