import React from 'react';

const StaticPage = ({ title }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">This is {title} page</h1>
      <p className="text-gray-600 text-lg">
        We are currently working on this page. Check back soon for updates!
      </p>
    </div>
  );
};

export default StaticPage;
