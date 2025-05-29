import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ProtectedRoute from '../../components/auth/ProtectedRoute';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { mockAssignments } from '../../services/mockData';
import { motion } from 'framer-motion';

const StudentAssignmentsPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);
  const [submissionText, setSubmissionText] = useState('');

  const filteredAssignments = mockAssignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Assignment submitted successfully!');
    setSubmissionText('');
    setSelectedAssignment(null);
  };

  return (
    <ProtectedRoute requiredRole="student">
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">My Assignments</h1>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="p-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search assignments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="divide-y divide-gray-200">
              {filteredAssignments.map((assignment) => (
                <motion.div
                  key={assignment.id}
                  whileHover={{ scale: 1.01 }}
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedAssignment(assignment.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">{assignment.class}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Due Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {assignment.dueDate.toDate().toLocaleDateString()}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                        assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {selectedAssignment && (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Assignment Details</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Instructions</h3>
                  <p className="text-gray-600">
                    Complete the following tasks and submit your work before the due date.
                    Make sure to follow all guidelines and include any required documentation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="submission" className="block text-sm font-medium text-gray-700">
                      Your Submission
                    </label>
                    <textarea
                      id="submission"
                      rows={6}
                      value={submissionText}
                      onChange={(e) => setSubmissionText(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your submission here..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Submit Assignment
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default StudentAssignmentsPage; 