import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { TbBell, TbUserCircle, TbLogin, TbSettings } from "react-icons/tb";
import { Link } from "react-router";

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#152354] text-[#F5E7C6] shadow-md">
      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between px-4 h-14">
        <button className="p-2" onClick={toggleSidebar}>
          <IoMenu size={28} />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://masu-consultancy.vercel.app/images/payroll-logo.jpeg"
            alt="Logo"
            className="h-10 rounded"
          />
        
        </div>
        <div className="relative">
          <button className="p-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <TbUserCircle size={28} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-[#0a1f44] text-[#F5E7C6] shadow-lg rounded-md border border-[#F5E7C6]">
              <Link to="/" className="block px-4 py-2 hover:bg-[#F5E7C6] hover:text-[#0a1f44]">Dashboard</Link>
              <Link to="/company" className="block px-4 py-2 hover:bg-[#F5E7C6] hover:text-[#0a1f44]">Company</Link>
              <div className="border-t border-[#F5E7C6] my-1"></div>
              <button className="w-full text-left px-4 py-2 hover:bg-[#F5E7C6] hover:text-[#0a1f44] flex items-center gap-2">
                <TbLogin size={18} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between px-8 h-20">
        <div className="flex items-center gap-3">
          <span className="font-bold text-2xl tracking-wide">SmartHR</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-[#F5E7C6] text-lg font-medium transition-colors duration-200">Dashboard</Link>
          <Link to="/company" className="hover:text-[#F5E7C6] text-lg font-medium transition-colors duration-200">Company</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-[#0a1f44] rounded-full transition-colors duration-200 cursor-pointer">
            <TbBell size={24} />
            <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
          </button>
          <div className="relative">
            <button className="flex items-center gap-2 p-2 hover:bg-[#0a1f44] rounded-full transition-colors duration-200 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-12.jpg" alt="Avatar" className="w-9 h-9 rounded-full border-2 border-[#F5E7C6]" />
              <span className="font-medium">Admin</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[#0a1f44] text-[#F5E7C6] shadow-lg rounded-md border border-[#F5E7C6]">
                <Link to="/" className=" px-4 py-2 hover:bg-[#F5E7C6] hover:text-[#0a1f44] flex items-center gap-2"><TbUserCircle size={18} /> My Profile</Link>
                <Link to="#" className=" px-4 py-2 hover:bg-[#F5E7C6] hover:text-[#0a1f44] flex items-center gap-2"><TbSettings size={18} /> Settings</Link>
                <div className="border-t border-[#F5E7C6] my-1"></div>
                <button className="w-full text-left px-4 py-2 hover:bg-[#F5E7C6] hover:text-[#0a1f44] flex items-center gap-2">
                  <TbLogin size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;