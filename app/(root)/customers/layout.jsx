import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto pt-10">{children}</div>
    </div>
  );
};

export default Layout;
