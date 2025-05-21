import React from 'react';
import { OpenAuth } from '@openauthjs/openauth';

interface Course {
  title: string;
  progress: string;
  lastActivity: string;
}

interface CourseProgressListProps {
  courses: Course[];
}

export default function CourseProgressList({ courses }: CourseProgressListProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-bold mb-4">Your Courses</h3>
      <ul className="space-y-4">
        {courses.map((course, idx) => (
          <li key={idx} className="border-b pb-4 last:border-0 last:pb-0 border-gray-100">
            <h4 className="font-medium">{course.title}</h4>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-[rgb(60,152,251)] h-2"
                style={{ width: course.progress }}
              ></div>
            </div>
            <p className="mt-1 text-xs text-gray-500">Progress: {course.progress}</p>
            <p className="text-xs text-gray-500">Last activity: {course.lastActivity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 