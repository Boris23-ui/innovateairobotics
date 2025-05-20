import React from 'react';

interface Assignment {
  title: string;
  course: string;
  dueDate: string;
}

interface UpcomingAssignmentsProps {
  assignments: Assignment[];
}

const UpcomingAssignments: React.FC<UpcomingAssignmentsProps> = ({ assignments }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Assignments</h3>
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <h4 className="font-medium text-gray-800">{assignment.title}</h4>
              <p className="text-sm text-gray-600">{assignment.course}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-blue-600">Due</p>
              <p className="text-sm text-gray-600">{assignment.dueDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAssignments; 