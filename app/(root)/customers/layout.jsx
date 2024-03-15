import React from 'react';
export const metadata = {
  title: 'Customers || LugBand',
  description: 'Generated by create next app',
};
const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto pt-10">{children}</div>
    </div>
  );
};

export default Layout;
