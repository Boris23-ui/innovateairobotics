import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">InnovateAI Robotics</div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800">Dashboard</button>
              <button className="text-gray-600 hover:text-gray-800">Courses</button>
              <button className="text-gray-600 hover:text-gray-800">Projects</button>
              <button className="text-gray-600 hover:text-gray-800">Profile</button>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout; 