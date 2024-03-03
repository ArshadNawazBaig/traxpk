import Sidebar from '@/components/customer/sidebar';
import Navbar from '@/components/navbar';
import { sidebarLinks } from '@/constants';
import React from 'react';

const CustomerLayout = ({ children }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto">
        <div className="pt-10">
          {/* <Navbar /> */}
          <h3 className="text-lg font-semibold mb-10">Account Management</h3>

          <div className="flex gap-4 items-start">
            <Sidebar sidebarLinks={sidebarLinks} />
            <div className="rounded-lg bg-white px-4 py-6 w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
