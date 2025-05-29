import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TeacherProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/profile');
  }, [router]);

  return null;
};

export default TeacherProfilePage; 