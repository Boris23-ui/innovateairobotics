// Database service functions
import { supabase } from './supabase';
import { User, Course } from '../types/database';

export const getUsers = async (): Promise<User[]> => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;
    return data;
};

export const getCourses = async (): Promise<Course[]> => {
    const { data, error } = await supabase.from('courses').select('*');
    if (error) throw error;
    return data;
};
