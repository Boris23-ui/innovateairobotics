import React from 'react';

interface Course {
  title: string;
  progress: string;
  lastActivity: string;
}

interface CourseProgressListProps {
  courses: Course[];
}

const CourseProgressList: React.FC<CourseProgressListProps> = ({ courses }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Courses</h3>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-800">{course.title}</h4>
              <span className="text-sm text-blue-600">{course.progress}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: course.progress }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">Last activity: {course.lastActivity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgressList; 