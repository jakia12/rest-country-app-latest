import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900  shadow dark:bg-gray-900 ">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center justify-center mb-4 sm:mb-0"
          >
            <span className="self-center text-2xl flex items-center justify-center font-semibold whitespace-nowrap text-gray-200 dark:text-white">
              Rest Countries
            </span>
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 3{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            rest country
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
