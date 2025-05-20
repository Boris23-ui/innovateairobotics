import React from 'react';

interface Assignment {
  title: string;
  course: string;
  dueDate: string;
}

interface UpcomingAssignmentsProps {
  assignments: Assignment[];
}

export default function UpcomingAssignments({ assignments }: UpcomingAssignmentsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Upcoming Assignments</h3>
      <ul className="space-y-4">
        {assignments.map((assign, idx) => (
          <li key={idx} className="p-4 border-l-4 border-[rgb(60,152,251)] bg-[rgb(60,152,251)]/[0.05] rounded-r-lg">
            <h4 className="font-medium">{assign.title}</h4>
            <p className="text-sm text-gray-600 mt-1">Course: {assign.course}</p>
            <p className="text-sm text-gray-600 mt-1">Due: {assign.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 