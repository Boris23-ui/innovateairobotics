// API hooks
import { useEffect, useState } from 'react';
import { getUsers, getCourses } from '../lib/database';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    return { users, loading };
};

export const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses();
            setCourses(data);
            setLoading(false);
        };
        fetchCourses();
    }, []);

    return { courses, loading };
};
