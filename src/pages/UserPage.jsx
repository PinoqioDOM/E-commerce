import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from '../components/UserSidebar';

const UserPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold mb-4 ml-5">გამარჯობა, TORNIKЕ</h2>
      <div className="border-t border-gray-200 mb-6"></div>
      <div className="flex gap-8">
        <UserSidebar />
        
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
