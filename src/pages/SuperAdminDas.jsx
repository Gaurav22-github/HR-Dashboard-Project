import React, { useEffect, useRef, useState } from 'react'
import { FaMobileRetro } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { MdTvOff } from "react-icons/md";
import { SiPython } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { MdDeleteForever } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosHome } from "react-icons/io";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaAngleDoubleDown } from "react-icons/fa";
import { RiArrowDropDownLine } from 'react-icons/ri';










export default function SuperAdminDas() {
    const [active, setActive] = useState(false)
    const [tab, setTab] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // Controls menu visibility
    const menuRef = useRef(null);
    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.innerText = "Weekly"; // Set default selection
            //   fetchData("weekly"); // Fetch weekly data on mount
        }
    }, []);

    const handleSelect = (event) => {
        const selectedOption = event.target.innerText.toLowerCase();
        if (menuRef.current) {
            menuRef.current.innerText = event.target.innerText; // Update button text
            setIsOpen(false); // Close menu after selection
        }
        // fetchData(selectedOption); // Fetch filtered data
    };
    const handleSelect1 = (event) => {
        const selectedOption = event.target.innerText.toLowerCase();
        if (menuRef.current) {
            menuRef.current.innerText = event.target.innerText; // Update button text
            setIsOpen(false); // Close menu after selection
        }
        // fetchData(selectedOption); // Fetch filtered data
    };


    return (
        <>
            <div className="bg-gray-100 p-2">
                <div className='my-3 grid md:grid-cols-2'>
                    <div><h1 className='font-bold text-2xl'>Dashboard</h1>
                        <div className='flex gap-2 items-center'><span><IoIosHome /></span> <span>/ Superadmin / Dashboard</span></div>
                    </div>
                    <div className='z-40'>
                        <div className="w-full p-3 flex sm:justify-end items-center gap-3">
                            <div className="relative">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    placeholderText="Start Date (dd/mm/yyyy)"
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control date-range bookingrange p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div><button className='border border-gray-300 p-3 rounded'><FaAngleDoubleDown /></button></div>
                        </div>
                    </div>
                </div>
                {/* // banner section */}
                <section className='my-6 bg-gray-100 z-0'>
                    <div className="welcome-wrap mb-4  relative">
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="mb-3">

                                <h2 className="mb-1 text-white text-2xl font-semibold">Welcome Back, Gaurav </h2>
                                <p className="text-gray-300">14 New Companies Subscribed Today !!!</p>
                            </div>
                            <div className="flex flex-wrap items-center mb-1">
                                <a
                                    href=""
                                    className="bg-[#0a1f44] text-[#F5E7C6] duration-200 hover:text-[#0a1f44] hover:bg-[#F5E7C6] px-4 py-2 rounded-md mr-2 mb-2 "
                                >
                                    Companies
                                </a>
                                <a
                                    href=""
                                    className="hover:bg-[#0a1f44] hover:text-[#F5E7C6] duration-200 text-[#0a1f44] bg-[#F5E7C6] px-4 py-2 rounded-md mb-2"
                                >
                                    All Packages
                                </a>
                            </div>
                        </div>
                        <div className='banner-bg'>
                            <img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/bg/welcome-bg-02.svg" alt="" className='banner-bg-01' />
                            <img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/bg/welcome-bg-03.svg" alt="" className='banner-bg-02' />
                            <img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/bg/welcome-bg-01.svg" alt="" className='banner-bg-03' />
                        </div>
                    </div>
                </section>
                <div className="bg-gray-100 p-2">
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 bg-gray-100 my-4'>
                        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between border-[0.5px] border-gray-400">
                            <div className="flex items-center gap-4 mb-4">
                                <button className="bg-[#0a1f44] text-[#F5E7C6] p-3 rounded-full">
                                    <FaMobileRetro size={24} />
                                </button>
                                <div>
                                    <h1 className="text-3xl font-semibold">5468</h1>
                                    <p className="text-sm text-gray-600">Total Companies</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-green-600 p-2 rounded text-white mb-4">+19.01%</div>
                                <div className="w-full flex gap-2 justify-center items-end mb-3">
                                    <div className="h-[30px] w-[8%] bg-orange-400 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-orange-400 rounded"></div>
                                    <div className="h-[40px] w-[8%] bg-orange-400 rounded"></div>
                                    <div className="h-[30px] w-[8%] bg-orange-400 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-orange-400 rounded"></div>
                                    <div className="h-[40px] w-[8%] bg-orange-400 rounded"></div>
                                    <div className="h-[30px] w-[8%] bg-orange-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between border-[0.5px] border-gray-400">
                            <div className="flex items-center gap-4 mb-4">
                                <button className="bg-[#0a1f44] text-[#F5E7C6] p-3 rounded-full">
                                    <IoLogoAndroid size={24} />
                                </button>
                                <div>
                                    <h1 className="text-3xl font-semibold">4598</h1>
                                    <p className="text-sm text-gray-600">Active Companies</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-red-600 p-2 rounded text-white mb-4">-12%</div>
                                <div className="w-full flex gap-2 justify-center items-end mb-3">
                                    <div className="h-[30px] w-[8%] bg-blue-700 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-blue-700 rounded"></div>
                                    <div className="h-[40px] w-[8%] bg-blue-700 rounded"></div>
                                    <div className="h-[30px] w-[8%] bg-blue-700 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-blue-700 rounded"></div>
                                    <div className="h-[40px] w-[8%] bg-blue-700 rounded"></div>
                                    <div className="h-[30px] w-[8%] bg-blue-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between border-[0.5px] border-gray-400">
                            <div className="flex items-center gap-4 mb-4">
                                <button className="bg-[#0a1f44] text-[#F5E7C6] p-3 rounded-full">
                                    <MdTvOff size={24} />
                                </button>
                                <div>
                                    <h1 className="text-3xl font-semibold">3698</h1>
                                    <p className="text-sm text-gray-600">Total Subscribers</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-green-600 p-2 rounded text-white mb-4">+6%</div>
                                <div className="w-full flex gap-2 justify-center items-end mb-3">
                                    <div className="h-[40px] w-[8%] bg-blue-950 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-blue-950 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-blue-950 rounded"></div>
                                    <div className="h-[40px] w-[8%] bg-blue-950 rounded"></div>
                                    <div className="h-[40px] w-[8%] bg-blue-950 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-blue-950 rounded"></div>
                                    <div className="h-[30px] w-[8%] bg-blue-950 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between border-[0.5px] border-gray-400">
                            <div className="flex items-center gap-4 mb-4">
                                <button className="bg-[#0a1f44] text-[#F5E7C6] p-3 rounded-full">
                                    <SiPython size={24} />
                                </button>
                                <div>
                                    <h1 className="text-3xl font-semibold">$89,878,58</h1>
                                    <p className="text-sm text-gray-600">Total Earnings</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-red-600 p-2 rounded text-white mb-4">-16%</div>
                                <div className="w-full flex gap-2 justify-center items-end mb-3">
                                    <div className="h-[40px] w-[8%] bg-green-600 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-green-600 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-green-600 rounded"></div>
                                    <div className="h-[40px] w-[8%] bg-green-600 rounded"></div>
                                    <div className="h-[40px] w-[8%] bg-green-600 rounded"></div>
                                    <div className="h-[60px] w-[8%] bg-green-600 rounded"></div>
                                    <div className="h-[30px] w-[8%] bg-green-600 rounded"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                        <div className='p-3 bg-white rounded shadow'>
                            <div className='flex justify-between items-center border-b-1 pb-4'>
                                <h1>Companies</h1>
                                <div className="relative inline-block text-left">
                                    {/* Main Menu Button */}
                                    <button
                                        ref={menuRef}
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="px-4 py-2 bg-[#0a1f44] text-[#F5E7C6] duration-200 hover:text-[#0a1f44] hover:bg-[#F5E7C6] rounded-md  transition"
                                    >
                                        This Week
                                    </button>

                                    {/* Submenu (Only visible when isOpen is true) */}
                                    {isOpen && (
                                        <div className="absolute left-[-55px] mt-2 w-40 bg-white border rounded-md shadow-lg">
                                            <ul className="py-2">
                                                {["Daily", "Weekly", "Monthly"].map((option) => (
                                                    <li
                                                        key={option}
                                                        onClick={handleSelect}
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full flex gap-2 justify-center items-end mb-3 my-6">
                                <div className="h-[90px] w-[8%]  bg-[#0a1f44] duration-200 hover:bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[8%] bg-[#0a1f44] duration-200 hover:bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[50px] w-[8%]  bg-[#0a1f44] duration-200 hover:bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[150px] w-[8%] bg-[#0a1f44] duration-200 hover:bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[8%] bg-[#0a1f44] duration-200 hover:bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[8%] bg-[#0a1f44] duration-200 hover:bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[8%] bg-[#0a1f44] duration-200 hover:bg-[#F5E7C6] rounded-xl"></div>
                            </div>
                            <div className="w-full flex gap-5 justify-center items-end mb-3 my-6">
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                                <div>Sun</div>
                            </div>
                            <div><button className='bg-green-500 p-1 rounded text-white'>+6%</button>       <span>5 Companies from last month
                            </span></div>
                        </div>
                        <div className='p-3 bg-white rounded shadow'>
                            <div className='flex justify-between items-center border-b-1 pb-4'>
                                <h1>Revenue</h1>
                                <div className="relative inline-block text-left">
                                    {/* Main Menu Button */}
                                    <button
                                        ref={menuRef}
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="px-4  py-2 bg-[#0a1f44] text-[#F5E7C6] duration-200 hover:text-[#0a1f44] hover:bg-[#F5E7C6] rounded-md"
                                    >
                                        year
                                    </button>

                                    {/* Submenu (Only visible when isOpen is true) */}
                                    {isOpen && (
                                        <div className="absolute left-[-55px]  mt-2 w-40 bg-white border rounded-md shadow-lg">
                                            <ul className="py-2">
                                                {["2025", "2024", "2023"].map((option) => (
                                                    <li
                                                        key={option}
                                                        onClick={handleSelect1}
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <h1>$45787</h1>
                            <div className='my-5 flex justify-between'><span>+40% increased from last year</span><span>Revenue</span></div>
                            <div className="w-full flex gap-3 justify-center items-end mb-3 my-6">
                                <div className="h-[90px]  w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[50px]  w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[150px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                                <div className="h-[130px] w-[5%]  bg-[#F5E7C6] rounded-xl"></div>
                            </div>
                            <div className="w-full flex gap-1 sm:gap-3 justify-center items-end mb-3 my-6">
                                <div>Jan</div>
                                <div>Feb</div>
                                <div>Mar</div>
                                <div>Apr</div>
                                <div>May</div>
                                <div>Jun</div>
                                <div>Jul</div>
                                <div>Aug</div>
                                <div>Sep</div>
                                <div>Oct</div>
                                <div>Nov</div>
                                <div>Dec</div>
                            </div>

                        </div>
                    </div>



                    {/* // section no 3  pie chart */}

                    <section className='bg-white rounded mb-2 shadow'>

                        <div className='p-3  border-gray-300 '>
                            {/* section 3 first part  */}
                            <div className='flex items-center justify-between p-2 border-b-1 border-gray-200'>
                                <h4 className='font-bold '> Top Plans</h4>
                                <button className='flex items-center gap-2 rounded border p-2 hover:text-orange-400'>
                                    <CiCalendarDate size={12} />
                                    <p className='text-[10px]'>This Month</p>
                                </button>
                            </div>

                            {/* pie chart */}
                            <div className='p-2 flex items-center justify-center'>
                                <svg width="200" height="200" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

                                    <circle cx="16" cy="16" r="16" fill="blue" />

                                    <path d="M16 16 L16 0 A16 16 0 0 1 32 16 Z" fill="blue" />
                                    <path d="M16 16 L32 16 A16 16 0 0 1 16 32 Z" fill="orange" />
                                    <path d="M16 16 L16 32 A16 16 0 0 1 0 16 Z" fill="yellow" />
                                </svg>

                            </div>

                            {/* section 3 last part  */}

                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm mb-0 flex items-center">
                                    <span className="w-2.5 h-2.5 bg-orange-500 rounded-full inline-block mr-2"></span>
                                    Basic
                                </p>
                                <p className="text-sm font-medium text-gray-600">60%</p>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm mb-0 flex items-center">
                                    <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full inline-block mr-2"></span>
                                    Premium
                                </p>
                                <p className="text-sm font-medium text-gray-600">60%</p>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm mb-0 flex items-center">
                                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block mr-2"></span>
                                    Enterprise
                                </p>
                                <p className="text-sm font-medium text-gray-600">20%</p>
                            </div>
                        </div>
                    </section>


                    {/* section 4 */}


                    <section>
                        <div className='p-3 bg-white rounded shadow'>
                            {/* section 4 first part  */}
                            <div className='flex items-center justify-between p-2 border-b-1 border-gray-200'>
                                <h4 className='font-bold '> Recent Transactions</h4>
                                <button className='flex items-center gap-2 rounded border p-2 bg-gray-200 cursor-pointer'>
                                    <p className='text-[10px]'>View All</p>
                                </button>
                            </div>
                            {/* section 3 last part  */}
                            <div className='p-4 '>
                                <div className="flex lg:block justify-between flex-wrap mb-3 items-center">
                                    <div className="flex items-center mb-2">
                                        <a
                                            href=""
                                            className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center"
                                        >
                                            <img
                                                src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-02.svg"
                                                className="w-auto h-auto"
                                                alt="img"
                                            />
                                        </a>
                                        <div className="ml-2 flex-1">
                                            <h6 className="text-sm font-medium truncate mb-1">
                                                <a href="javascript:void(0);">Stellar Dynamics</a>
                                            </h6>
                                            <p className="text-xs flex items-center">
                                                <span className="text-info text-blue-500">#12457</span>
                                                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block mx-1"></span>
                                                14 Jan 2025
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm mb-2">
                                        <h6 className="mb-1 font-semibold">+$245</h6>
                                        <p className="text-xs text-gray-600">Basic (Monthly)</p>
                                    </div>
                                </div>
                                <div className="flex lg:block justify-between flex-wrap mb-3 items-center">
                                    <div className="flex items-center mb-2">
                                        <a
                                            href=""
                                            className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center"
                                        >
                                            <img
                                                src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-03.svg"
                                                className="w-auto h-auto"
                                                alt="img"
                                            />
                                        </a>
                                        <div className="ml-2 flex-1">
                                            <h6 className="text-sm font-medium truncate mb-1">
                                                <a href="javascript:void(0);">Quantum Nexus</a>
                                            </h6>
                                            <p className="text-xs flex items-center">
                                                <span className="text-info text-blue-500">#12457</span>
                                                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block mx-1"></span>
                                                14 Jan 2025
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm mb-2">
                                        <h6 className="mb-1 font-semibold">+$395</h6>
                                        <p className="text-xs text-gray-600">Enterprise (yearly)</p>
                                    </div>
                                </div>
                                <div className="flex lg:block justify-between flex-wrap mb-3 items-center">
                                    <div className="flex items-center mb-2">
                                        <a
                                            href=""
                                            className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center"
                                        >
                                            <img
                                                src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-05.svg"
                                                className="w-auto h-auto"
                                                alt="img"
                                            />
                                        </a>
                                        <div className="ml-2 flex-1">
                                            <h6 className="text-sm font-medium truncate mb-1">
                                                <a href="javascript:void(0);">Aurora Technologies</a>
                                            </h6>
                                            <p className="text-xs flex items-center">
                                                <span className="text-info text-blue-500">#12457</span>
                                                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block mx-1"></span>
                                                14 Jan 2025
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm mb-2">
                                        <h6 className="mb-1 font-semibold">+$395</h6>
                                        <p className="text-xs text-gray-600">Advanced (Monthly)</p>
                                    </div>
                                </div>
                                <div className="flex lg:block justify-between flex-wrap mb-3 items-center">
                                    <div className="flex items-center mb-2">
                                        <a
                                            href=""
                                            className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center"
                                        >
                                            <img
                                                src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-07.svg"
                                                className="w-auto h-auto"
                                                alt="img"
                                            />
                                        </a>
                                        <div className="ml-2 flex-1">
                                            <h6 className="text-sm font-medium truncate mb-1">
                                                <a href="javascript:void(0);">TerraFusion Energy</a>
                                            </h6>
                                            <p className="text-xs flex items-center">
                                                <span className="text-info text-blue-500">#12457</span>
                                                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block mx-1"></span>
                                                14 Jan 2025
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm mb-2">
                                        <h6 className="mb-1 font-semibold">+$395</h6>
                                        <p className="text-xs text-gray-600">Enterprise (Monthly)</p>
                                    </div>
                                </div>

                                <div className="flex lg:block justify-between flex-wrap mb-3 items-center">

                                    <div className="flex items-center mb-2">
                                        <a
                                            href=""
                                            className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center"
                                        >
                                            <img
                                                src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-08.svg"
                                                className="w-auto h-auto"
                                                alt="img"
                                            />
                                        </a>
                                        <div className="ml-2 flex-1">
                                            <h6 className="text-sm font-medium truncate mb-1">
                                                <a href="javascript:void(0);">TerraFusion Energy</a>
                                            </h6>
                                            <p className="text-xs flex items-center">
                                                <span className="text-info text-blue-500">#12457</span>
                                                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block mx-1"></span>
                                                14 Jan 2025
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm mb-2">
                                        <h6 className="mb-1 font-semibold">+$395</h6>
                                        <p className="text-xs text-gray-600">Premium (Monthly)</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>
                    {/* container start */}
                    <div className='  w-full mt-4 gap-3 grid grid-cols-1 lg:grid-cols-2'>
                        <div className='bg-white rounded'>
                            <div className='flex justify-between p-7  border-b'>
                                <div className='font-bold'>Recently Registered</div>
                                <div className='bg-gray-100 px-3 py-1 rounded'>ViewAll</div>
                            </div>
                            {/* image 1start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className=' h-8 bg-gray-300 rounded-full p-1 ' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/company-icon-11.svg" /></div>
                                    <div className=''>
                                        <div className='font-bold'>Pitch</div>
                                        <div>Basic (Monthly)</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-[14px]'>150 Users</div>
                                    <div className='font-sans text-[14px]'>pitch.example.com</div>
                                </div>
                            </div>
                            {/* image 1end */}
                            {/* image 2start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/company-icon-12.svg" /></div>
                                    <div className=''>
                                        <div className='font-bold'>Initech</div>
                                        <div>Enterprise (Yearly)</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-[14px]'>200 Users</div>
                                    <div className='font-sans text-[14px]'>initech.example.com</div>
                                </div>
                            </div>
                            {/* image 2end */}
                            {/* image 3start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1  ' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/company-icon-13.svg" /></div>
                                    <div className=''>
                                        <div className='font-bold'>Umbrella Corp</div>
                                        <div>Advanced (Monthly)</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-[14px]'>129 Users</div>
                                    <div className='font-sans text-[14px]'>umbcorp.example.com</div>
                                </div>
                            </div>
                            {/* image 3end */}
                            {/* image 4start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1  ' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/company-icon-14.svg" /></div>
                                    <div className=''>
                                        <div className='font-bold'>Capital Partners</div>
                                        <div>Enterprise (Monthly)</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-[14px]'>103 Users</div>
                                    <div className='font-sans text-[14px]'>capitalpart.example.com</div>
                                </div>
                            </div>
                            {/* image 4end */}
                            {/* image 5start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1  ' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/company-icon-15.svg" /></div>
                                    <div className=''>
                                        <div className='font-bold'>Massive Dynamic</div>
                                        <div>Premium (Yearly)</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-[14px]'>108 Users</div>
                                    <div className='font-sans text-[14px]'>msdynamic.example.com</div>
                                </div>
                            </div>
                            {/* image 5end */}

                        </div>




                        {/* second container start */}

                        <div className='bg-white rounded'>
                            <div className='flex justify-between p-7 border-b'>
                                <div className='font-bold'>Recent Plan Expired</div>
                                <div className='flex gap-2'>
                                    <div className='font-bold px-3 py-1 rounded'>Expired</div>
                                    <div className=' '> <RiArrowDropDownLine className='w-9 h-8' /></div>
                                </div>

                            </div>
                            {/* image 1start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1 ' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/company-icon-16.svg" /></div>
                                    <div className=''>
                                        <div className='font-bold'>Silicon Corp</div>
                                        <div>Expired : 10 Apr 2025</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-blue-700 underline text-[14px]'>Send Reminder</div>
                                    <div className='font-sans text-[14px]'>Basic (Monthly)</div>
                                </div>
                            </div>
                            {/* image 1end */}
                            {/* image 2start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1  ' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/company-icon-17.svg" /></div>
                                    <div className=''>
                                        <div className='font-bold'>Hubspot</div>
                                        <div>Expired : 12 Jun 2025</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-blue-700 underline text-[14px]'>Send Reminder</div>
                                    <div className='font-sans text-[14px]'>Enterprise (Yearly)</div>
                                </div>
                            </div>
                            {/* image 2end */}
                            {/* image 3start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1  ' src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/company-icon-18.svg' /></div>
                                    <div className=''>
                                        <div className='font-bold'>Licon Industries</div>
                                        <div>Expired : 16 Jun 2025</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-blue-700 underline text-[14px]'>Send Reminder</div>
                                    <div className='font-sans text-[14px]'>Advanced (Monthly)</div>
                                </div>
                            </div>
                            {/* image 3end */}
                            {/* image 4start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1  ' src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-07.svg' /></div>
                                    <div className=''>
                                        <div className='font-bold'>TerraFusion Energy</div>
                                        <div>Expired : 12 May 2025</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-blue-700 underline text-[14px]'>Send Reminder</div>
                                    <div className='font-sans text-[14px]'>Enterprise (Monthly)</div>
                                </div>
                            </div>
                            {/* image 4end */}
                            {/* image 5start */}
                            <div className='flex justify-between gap-2.5'>
                                <div className=' flex gap-3 p-4'>
                                    <div className=''><img className='w-8 h-8 bg-gray-300 rounded-full p-1  ' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-08.svg" /></div>
                                    <div className=''>
                                        <div className='font-bold'>Epicurean Delights</div>
                                        <div>Expired : 15 May 2025</div>
                                    </div>
                                </div>

                                <div className='p-4 '>
                                    <div className='justify-end flex text-blue-700 underline text-[14px]'>Send Reminder</div>
                                    <div className='font-sans text-[14px]'>Premium (Yearly)</div>
                                </div>
                            </div>
                            {/* image 5end */}
                        </div>
                        {/* second container end */}
                    </div>

                    {/* container end */}

                </div>
            </div>
        </>
    )
}
