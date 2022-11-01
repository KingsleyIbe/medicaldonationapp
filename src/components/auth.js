/* eslint-disable react/prop-types */
import React from 'react';

const AuthMain = ({ children }) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-0  min-h-screen">
      <div className="bg-cover bg-center bg-hero relative min-h-screen flex hidden col-span-2 lg:block" />
      <div className="max-h-full items-center justify-center flex  bg-white  px-4 sm:px-6 lg:px-8 bg-[length:300px_600px] p-5 bg-none">
        <div className="md:w-auto space-y-8 bg-white border border-1 lg:border-1 border-gray-400 border-opacity-25 lg:w-[500px] rounded-[20px] p-5">
          {children}
        </div>
      </div>
    </div>
  </>
);

export default AuthMain;
