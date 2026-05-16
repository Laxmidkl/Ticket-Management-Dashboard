import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";



const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex ">
      <div
        className={`
          fixed lg:top-0 left-0 md:top-20
          h-screen
          bg-white
          shadow-md
          transition-all duration-300
          overflow-hidden
         
          ${isOpen ? "w-64" : "lg:w-0 w-0"}
        `}
      >
        <Sidebar/>
      </div>
      <div
        className={`
          flex-1 transition-all duration-300 w-full
          ${isOpen ? "md:ml-64" : "md:ml-0"}
        `}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        
        <div className="px-5 bg-[#F6F8FB]">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
