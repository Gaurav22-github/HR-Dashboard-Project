import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router'
import Sidebar from '../component/Sidebar'
import Footer from './Footer'


export default function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    // Disable body scroll when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add("no-scroll"); // Add class to disable scrolling
        } else {
            document.body.classList.remove("no-scroll"); // Remove class to enable scrolling
        }
        return () => {
            document.body.classList.remove("no-scroll"); // Cleanup when unmounted
        };
    }, [isSidebarOpen]);
    return (
        <>
            <div className="relative grid grid-cols-1">
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}
                <div className='grid grid-cols-1 lg:grid-cols-5'>
                    <div className='bg-[#0a1f44]'><Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} /></div>
                    <div className="lg:col-span-4">
                        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
