import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaCodeCompare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaMobileRetro } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { FaDraftingCompass } from "react-icons/fa";



const Company = () => {
  const [tab, setTab] = useState(false)
  return (
    <>
      <div className="bg-gray-100 p-1 w-full">
        <div className='my-3 grid md:grid-cols-2 bg-gray-100 p-1'>
          <div><h1 className='font-bold text-2xl'>Companies</h1>
            <div className='flex gap-2 items-center'> <span><FaCodeCompare /></span> <span>/ Application / Companies List
            </span></div>
          </div>
          <div className='z-40'>
            <div className="w-full p-3 flex sm:justify-end items-center gap-3">
              <select className='bg-white p-1 rounded cursor-pointer'>
                <option className='flex justify-center gap-1 items-center p-1 '><span><span><FaFilePdf /></span><span>Export</span></span></option>
                <option className='flex justify-center gap-1 items-center p-1'><span>Export As PDF</span></option>
                <option className='flex justify-center gap-1 items-center p-1'><span>Export As Excel</span></option>
              </select>
              <button onClick={() => setTab(true)} className='p-1 text-[14px] cursor-pointer rounded font-bold bg-[#0a1f44] text-[#F5E7C6] duration-200 hover:text-[#0a1f44] hover:bg-[#F5E7C6]'>
                + Add Company
              </button>
              <div><button className='border border-gray-300 p-3 rounded'><FaAngleDoubleDown /></button></div>
            </div>
          </div>
          <div className={`${tab == true ? "block" : "hidden"}`}><AddCompany settab={setTab} /></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-3  lg:grid-cols-4'>
          <div className='flex items-center gap-4 rounded shadow bg-white p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-[#0a1f44] text-[#F5E7C6] p-3 rounded-xl text-xl'>
              <FaMobileRetro />
            </div>
            <div className='flex-1'>
              <div className='text-gray-600 text-sm uppercase font-semibold'>Total...</div>
              <strong className='text-lg text-gray-900'>950</strong>
            </div>
            <div className='text-gray-500 text-2xl'>
              <GoGraph />
            </div>
          </div>

          <div className='flex items-center gap-4 rounded shadow-lg bg-white p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-[#0a1f44] text-[#F5E7C6] p-3 rounded-xl text-xl'>
              <FaMobileRetro />
            </div>
            <div className='flex-1'>
              <div className=' text-sm uppercase font-semibold'>Active...</div>
              <strong className='text-lg text-gray-900'>920</strong>
            </div>
            <div className='text-gray-500 text-2xl'>
              <GoGraph />
            </div>
          </div>
          <div className='flex items-center gap-4 rounded shadow-lg bg-white p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-[#0a1f44] text-[#F5E7C6] p-3 rounded-xl text-xl'>
              <FaMobileRetro />
            </div>
            <div className='flex-1'>
              <div className='text-gray-600 text-sm uppercase font-semibold'>Inactive...</div>
              <strong className='text-lg text-gray-900'>30</strong>
            </div>
            <div className='text-gray-500 text-2xl'>
              <GoGraph />
            </div>
          </div>
          <div className='flex items-center gap-4 rounded shadow-lg bg-white p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-[#0a1f44] text-[#F5E7C6] p-3 rounded-xl text-xl'>
              <FaDraftingCompass />
            </div>
            <div className='flex-1'>
              <div className='text-gray-600 text-sm uppercase font-semibold'>Company...</div>
              <strong className='text-lg text-gray-900'>180</strong>
            </div>
            <div className='text-gray-500 text-2xl'>
              <GoGraph />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 p-5 bg-white shadow rounded lg:grid-cols-5 gap-4'>
          <div className='font-bold'>Companies List</div>
          <div>03/07/2025 - 03/13/2025</div>
          <div><select className='p-2 border rounded cursor-pointer'>
            <option>Select plan</option>
            <option>Advance</option>
            <option>Basic</option>
            <option>Enterprise</option>
          </select></div>
          <div><select className='p-2 border rounded cursor-pointer'>
            <option>Select Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select></div>
          <div><select className='p-2 border rounded cursor-pointer'>
            <option>Sort By : Last 7 Days</option>
            <option>Recently Added</option>
            <option>Aceding</option>
            <option>Desecinding</option>
            <option>Last Month</option>
            <option>Last 7 Days</option>
          </select></div>
        </div>
        <div className='bg-white flex justify-between p-5'>
          <div>
            <span>Row Per Page </span>
            <span><select className='p-1 border'><option>10</option><option>25</option><option>50</option><option>100</option></select> </span>
            <span>Entries</span>
          </div>
          <div><input type="text" name="" id="" className='border-none inset-1 shadow p-1 rounded' placeholder='Search' /></div>
        </div>
        <div className=' bg-white'><CompanyTable /></div>
      </div>
      <div>
      </div>
    </>
  );
};

export default Company;







const AddCompany = ({ onClose, settab }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    accountUrl: "",
    phone: "",
    website: "",
    password: "",
    confirmPassword: "",
    address: "",
    planName: "",
    planType: "",
    currency: "",
    language: "",
    status: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex w-full h-full  justify-center items-center lg:p-4  ">
      <div className="bg-white p-6 w-full lg:max-w-3xl shadow-lg h-screen">
        <h2 className="text-xl font-semibold mb-4 flex justify-between"><span>Add New Company</span> <span onClick={() => settab(false)}><MdDeleteForever className='cursor-pointer' /></span></h2>
        <div className='my-3'>
          <div className='flex gap-2'><img className='rounded-full inline' width={80} src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-12.jpg" alt="" /><span className='flex flex-col'><span className='font-bold'>Name: Anuj Saini</span><span>Web Developer</span><span><button className='bg-[#0a1f44] text-[#F5E7C6] px-2 rounded cursor-pointer'>Add</button></span></span></div>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="name">Name</label><br />
            <input name="name" placeholder="Name *" className="border w-full p-2 rounded" onChange={handleChange} required />
          </div>
          <div className="">
            <label htmlFor="email">Email</label><br />
            <input name="email" placeholder="Email Address" className="border w-full p-2 rounded" onChange={handleChange} />
          </div>
          <div className="">
            <label htmlFor="accountUrl">Account</label>
            <input name="accountUrl" placeholder="Account URL" className="border w-full p-2 rounded" onChange={handleChange} />
          </div>
          <div className="">
            <label htmlFor="phone">Phone</label>
            <input name="phone" placeholder="Phone Number *" className="border w-full p-2 rounded" onChange={handleChange} required />
          </div>
          <div className="">
            <label htmlFor="website">Website</label>
            <input name="website" placeholder="Website" className="border w-full p-2 rounded" onChange={handleChange} />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Password *" className="border w-full p-2 rounded" onChange={handleChange} required />
          </div>
          <div className="">
            <label htmlFor="confirmPassword">ConfirmPassword</label>
            <input name="confirmPassword" type="password" placeholder="Confirm Password *" className="border w-full p-2 rounded" onChange={handleChange} required />
          </div>
          <div className="">
            <label htmlFor="address">Address</label>
            <input name="address" placeholder="Address" className="border w-full p-2 rounded col-span-2" onChange={handleChange} />
          </div>
          <select name="planName" className="border p-2 rounded" onChange={handleChange}>
            <option>Select Plan</option>
          </select>
          <select name="planType" className="border p-2 rounded" onChange={handleChange}>
            <option>Select Plan Type</option>
          </select>
          <select name="currency" className="border p-2 rounded" onChange={handleChange}>
            <option>Select Currency</option>
          </select>
          <select name="language" className="border p-2 rounded" onChange={handleChange}>
            <option>Select Language</option>
          </select>
          <select name="status" className="border p-2 rounded" onChange={handleChange}>
            <option>Select Status</option>
          </select>
          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <button type="button" className="bg-[#F5E7C6] text-[#0a1f44] px-4 py-2 rounded" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-[#0a1f44] text-[#F5E7C6] px-4 py-2 rounded">Add Company</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const companies = [
  { name: "BrightWave Innovations", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-01.svg", email: "michael@example.com", url: "bwi.example.com", plan: "Advanced (Monthly)", created: "12 Sep 2024", status: "Active", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
  { name: "Stellar Dynamics", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-02.svg", email: "sophie@example.com", url: "sd.example.com", plan: "Basic (Yearly)", created: "24 Oct 2024", status: "Active", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
  { name: "Quantum Nexus", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-03.svg", email: "cameron@example.com", url: "qn.example.com", plan: "Advanced (Monthly)", created: "18 Feb 2024", status: "Active", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
  { name: "EcoVision Enterprises", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-04.svg", email: "doris@example.com", url: "eve.example.com", plan: "Advanced (Monthly)", created: "17 Oct 2024", status: "Active", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
  { name: "Aurora Technologies", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-05.svg", email: "thomas@example.com", url: "at.example.com", plan: "Enterprise (Monthly)", created: "20 Jul 2024", status: "Active", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
  { name: "BlueSky Ventures", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-06.svg", email: "kathleen@example.com", url: "bsv.example.com", plan: "Advanced (Monthly)", created: "10 Mar 2024", status: "Active", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
  { name: "TerraFusion Energy", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-07.svg", email: "bruce@example.com", url: "tfe.example.com", plan: "Enterprise (Yearly)", created: "29 Aug 2024", status: "Active", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
  { name: "UrbanPulse Design", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-08.svg", email: "estelle@example.com", url: "upd.example.com", plan: "Basic (Monthly)", created: "22 Feb 2024", status: "Inactive", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
  { name: "Nimbus Networks", img: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-10.svg", email: "stephen@example.com", url: "nn.example.com", plan: "Basic (Yearly)", created: "03 Nov 2024", status: "Active", icon: <MdDeleteForever />, edit: <MdEdit />, eye: <IoEyeOutline /> },
];

const CompanyTable = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-[13px]">
          <tr>
            <th className="py-2 px-4 text-center"></th>
            <th className="py-2 px-4 text-center">Company Name</th>
            <th className="py-2 px-4 text-center">Email</th>
            <th className="py-2 px-4 text-center">Account URL</th>
            <th className="py-2 px-4 text-center">Plan</th>
            <th className="py-2 px-4 text-center"></th>
            <th className="py-2 px-4 text-center">Created Date</th>
            <th className="py-2 px-4 text-center">Status</th>
            <th className="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index} className="border-b text-[13px]">
              <td className="py-2 px-4 text-center"><input type="checkbox" /></td>
              <td className="py-2 px-4 flex gap-2 justify-center items-center">
                <span className='border border-gray-200 rounded-full p-1'>
                  <img src={company.img} alt={company.name} className="w-8 h-8" />
                </span>
                <span>{company.name}</span>
              </td>
              <td className="py-2 px-4 text-center">{company.email}</td>
              <td className="py-2 px-4 text-center">{company.url}</td>
              <td className="py-2 px-4 text-center">{company.plan}</td>
              <td className="py-2 px-4 text-center"><button className="p-1 rounded bg-[#0a1f44] text-[#F5E7C6]">Upgrade</button></td>
              <td className="py-2 px-4 text-center">{company.created}</td>
              <td className="py-2 px-4 text-center">
                <span className={`px-2 py-1 rounded ${company.status === "Active" ? "bg-[#0a1f44] text-[#F5E7C6]" : "bg-[#F5E7C6] text-[#0a1f44]"}`}>{company.status}</span>
              </td>
              <td className="py-2 px-4 flex justify-center space-x-2">
                <button className="p-1 rounded bg-gray-100"><IoEyeOutline /></button>
                <button className="p-1 rounded bg-gray-100"><MdEdit /></button>
                <button className="p-1 rounded bg-gray-100"><MdDeleteForever /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='my-2 flex flex-col sm:flex-row justify-between p-2 items-center'>
        <div>Showing 1 - {companies.length} of {companies.length} entries</div>
        <div className='flex gap-3 cursor-pointer items-center'>
          <FaAngleLeft />
          <span className=' p-1 text-[12px] bg-[#0a1f44] text-[#F5E7C6] rounded-full'>1</span>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

