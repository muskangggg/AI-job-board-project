import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#f9f5ff] to-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#6A38C2]">JobHunt</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xs">
              Connecting talent with opportunity — find your dream job and grow your career with us.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#6A38C2]">About Us</a></li>
                <li><a href="#" className="hover:text-[#6A38C2]">Careers</a></li>
                <li><a href="#" className="hover:text-[#6A38C2]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#6A38C2]">Blog</a></li>
                <li><a href="#" className="hover:text-[#6A38C2]">Help Center</a></li>
                <li><a href="#" className="hover:text-[#6A38C2]">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">For Job Seekers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#6A38C2]">Find Jobs</a></li>
                <li><a href="#" className="hover:text-[#6A38C2]">Post Resume</a></li>
                <li><a href="#" className="hover:text-[#6A38C2]">Career Tips</a></li>
              </ul>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex space-x-5 mt-2">
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-[#6A38C2] hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-[#6A38C2] hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-[#6A38C2] hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-[#6A38C2] hover:text-white transition">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-[#6A38C2] font-semibold">JobHunt</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
