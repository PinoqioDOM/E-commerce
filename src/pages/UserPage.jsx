import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from '../components/UserSideBar'

const UserPage = () => {
  return (
    <div className="flex max-w-7xl mx-auto p-4 gap-8 mt-10">
      <UserSidebar />
      
      <Outlet />
    </div>
  );
};

export default UserPage;