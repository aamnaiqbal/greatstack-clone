import React from "react";

const Footer = () => {
  return (
    <footer className=" py-4 bg-[#f8f8f8]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <hr className="w-full border-t border-gray-600 my-4 mx-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 w-full">
          <div>© 2024 Edusity. All rights reserved.</div>
          <div className="space-x-4">
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
            <span>|</span>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
