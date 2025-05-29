import { 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  getDoc,
  onSnapshot,
  Timestamp,
  orderBy,
  limit,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Types
export interface Class {
  id: string;
  name: string;
  teacher: string;
  room: string;
  nextSession: Timestamp;
}

export interface Assignment {
  id: string;
  title: string;
  className: string;
  dueDate: Timestamp;
  status: 'completed' | 'in-progress' | 'not-started';
}

export interface Activity {
  id: string;
  type: 'assignment' | 'class' | 'student';
  title: string;
  description: string;
  timestamp: Timestamp;
}

export interface Stats {
  totalClasses?: number;
  activeStudents?: number;
  pendingAssignments?: number;
  averageScore?: number;
  enrolledClasses?: number;
  averageGrade?: number;
  attendance?: number;
}

// Teacher Functions
export const getTeacherStats = async (teacherId: string): Promise<Stats> => {
  const classesQuery = query(
    collection(db, 'classes'),
    where('teacherId', '==', teacherId)
  );
  const classesSnapshot = await getDocs(classesQuery);
  
  const totalClasses = classesSnapshot.size;
  let activeStudents = 0;
  let pendingAssignments = 0;
  let totalScore = 0;
  let scoreCount = 0;

  classesSnapshot.forEach((doc) => {
    const classData = doc.data();
    activeStudents += classData.students?.length || 0;
    pendingAssignments += classData.pendingAssignments || 0;
    if (classData.averageScore) {
      totalScore += classData.averageScore;
      scoreCount++;
    }
  });

  return {
    totalClasses,
    activeStudents,
    pendingAssignments,
    averageScore: scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0,
  };
};

export const getTeacherActivities = (
  teacherId: string,
  callback: (activities: Activity[]) => void
) => {
  const activitiesQuery = query(
    collection(db, 'activities'),
    where('teacherId', '==', teacherId)
  );

  return onSnapshot(activitiesQuery, (snapshot) => {
    const activities: Activity[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      activities.push({
        id: doc.id,
        type: data.type,
        title: data.title,
        description: data.description,
        timestamp: data.timestamp,
      });
    });
    callback(activities);
  });
};

// Student Functions
export const getStudentStats = async (studentId: string): Promise<Stats> => {
  const enrollmentsQuery = query(
    collection(db, 'enrollments'),
    where('studentId', '==', studentId)
  );
  const enrollmentsSnapshot = await getDocs(enrollmentsQuery);
  
  const enrolledClasses = enrollmentsSnapshot.size;
  let pendingAssignments = 0;
  let totalGrade = 0;
  let gradeCount = 0;
  let totalAttendance = 0;
  let attendanceCount = 0;

  enrollmentsSnapshot.forEach((doc) => {
    const enrollmentData = doc.data();
    pendingAssignments += enrollmentData.pendingAssignments || 0;
    if (enrollmentData.grade) {
      totalGrade += enrollmentData.grade;
      gradeCount++;
    }
    if (enrollmentData.attendance) {
      totalAttendance += enrollmentData.attendance;
      attendanceCount++;
    }
  });

  return {
    enrolledClasses,
    pendingAssignments,
    averageGrade: gradeCount > 0 ? Math.round(totalGrade / gradeCount) : 0,
    attendance: attendanceCount > 0 ? Math.round(totalAttendance / attendanceCount) : 0,
  };
};

export const getStudentAssignments = (
  studentId: string,
  callback: (assignments: Assignment[]) => void
) => {
  const assignmentsQuery = query(
    collection(db, 'assignments'),
    where('studentId', '==', studentId)
  );

  return onSnapshot(assignmentsQuery, (snapshot) => {
    const assignments: Assignment[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      assignments.push({
        id: doc.id,
        title: data.title,
        className: data.className,
        dueDate: data.dueDate,
        status: data.status,
      });
    });
    callback(assignments);
  });
};

export const getStudentClasses = (
  studentId: string,
  callback: (classes: Class[]) => void
) => {
  const enrollmentsQuery = query(
    collection(db, 'enrollments'),
    where('studentId', '==', studentId)
  );

  return onSnapshot(enrollmentsQuery, (snapshot) => {
    const classPromises = snapshot.docs.map(async (doc) => {
      const enrollmentData = doc.data();
      const classDoc = await getDocs(
        query(collection(db, 'classes'), where('id', '==', enrollmentData.classId))
      );
      const classData = classDoc.docs[0].data();
      return {
        id: classDoc.docs[0].id,
        name: classData.name,
        teacher: classData.teacher,
        room: classData.room,
        nextSession: classData.nextSession,
      };
    });

    Promise.all(classPromises).then((classes) => {
      callback(classes);
    });
  });
}; 