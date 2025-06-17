import React, { useState } from "react";
import { ChevronDown, ChevronUp, Home, Settings, User } from "lucide-react";
import { Link } from "react-router";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="bg-[#152354] lg:sticky top-0 z-60">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 lg:w-64 w-full h-full text-[#F5E7C6] bg-[#0a1f44]  p-4 z-[9999] transition-transform duration-300 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative lg:h-screen`}
      >
        {/* Logo & Close Button (Mobile Only) */}
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex items-center gap-3">
            <div><img
              src="https://masu-consultancy.vercel.app/images/payroll-logo.jpeg"
              alt="Logo"
              className="h-10"
            /></div>
            <div className="flex items-center gap-2"><span className="font-bold">MASU</span><span>Consultancy</span></div>
          </div>
          <button className="lg:hidden p-2 cursor-pointer" onClick={closeSidebar}>
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 overflow-y-auto h-[85vh]">
          <button className="flex items-center cursor-pointer w-full p-3 h rounded-lg" onClick={closeSidebar}>
            <Home size={20} className="mr-2" />
            Dashboard
          </button>

          <div className="rounded-lg">
            <button
              className="flex justify-between cursor-pointer items-center w-full p-3 rounded-lg transition-all duration-300 ease-in-out"
              onClick={() => toggleMenu("profile")}
            >
              <div className="flex items-center cursor-pointer">
                <User size={20} className="mr-2" />
                Super Admin
              </div>
              {openMenu === "profile" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <div
              className={`pl-10 overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "profile" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <button className="block w-full p-2 text-left" onClick={closeSidebar}>
                <Link to={"/"}>Dashboard</Link>
              </button>
              <button className="block w-full p-2 text-left" onClick={closeSidebar}>
                <Link to={"/company"}> Companies</Link>
              </button>
            </div>
          </div>


          <div className="rounded-lg">
            <button
              className="flex justify-between items-center w-full p-3 rounded-lg transition-all duration-300 ease-in-out"
              onClick={() => toggleMenu("settings")}
            >
              <div className="flex items-center">
                <Settings size={20} className="mr-2" />
                Settings
              </div>
              {openMenu === "settings" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <div
              className={`pl-10 overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "settings" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <button className="block w-full p-2 text-left hover:bg-gray-600" onClick={closeSidebar}>
                Account
              </button>
              <button className="block w-full p-2 text-left hover:bg-gray-600" onClick={closeSidebar}>
                Privacy
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;