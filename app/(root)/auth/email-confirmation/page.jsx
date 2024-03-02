import Image from 'next/image';
import React from 'react';

const EmailConfirmation = () => {
  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 text-center flex items-center flex-col">
          <Image src="/logo.png" alt="logo" width={250} height={60} />
          <div className="bg-gray-100/50 px-20 py-8 rounded-md mt-10 max-w-[550px]">
            <h2 className="text-green-900 text-2xl font-semibold mb-3">
              Confirmation Email sent!
            </h2>
            <p className="text-md text-gray-700">
              Please check your email:{' '}
              <span className="font-semibold">example@example.com</span>, to
              confirm your email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
