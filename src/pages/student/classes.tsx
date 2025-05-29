import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ProtectedRoute from '../../components/auth/ProtectedRoute';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { mockClasses } from '../../services/mockData';
import { motion } from 'framer-motion';

const StudentClassesPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const filteredClasses = mockClasses.filter(classItem =>
    classItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute requiredRole="student">
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">My Classes</h1>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="p-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="divide-y divide-gray-200">
              {filteredClasses.map((classItem) => (
                <motion.div
                  key={classItem.id}
                  whileHover={{ scale: 1.01 }}
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedClass(classItem.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{classItem.name}</h3>
                      <p className="text-sm text-gray-500">Teacher: {classItem.teacher}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Next Session</p>
                      <p className="text-sm font-medium text-gray-900">
                        {classItem.nextSession.toDate().toLocaleString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {selectedClass && (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Class Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Schedule</h3>
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-sm font-medium">Monday & Wednesday</p>
                      <p className="text-sm text-gray-500">10:00 AM - 11:30 AM</p>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-sm font-medium">Room {mockClasses.find(c => c.id === selectedClass)?.room}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Upcoming Assignments</h3>
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-sm font-medium">Project Presentation</p>
                      <p className="text-sm text-gray-500">Due: March 25, 2024</p>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-sm font-medium">Weekly Quiz</p>
                      <p className="text-sm text-gray-500">Due: March 28, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default StudentClassesPage; 