"use client";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"; // Import icons
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`font-sans relative h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Full Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/ledgerbg1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full opacity-80 dark:bg-black dark:opacity-90"></div>
      </div>

      {/* Navigation Bar */}
      <header className="relative z-10 flex justify-between items-center p-6 shadow-md">
        <div className="text-3xl font-bold text-rose-500">
          <span className="tracking-tighter">ledgerline Technology</span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-red-900 font-bold dark:text-gray-300">
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        
        <button
          onClick={toggleDarkMode}
          className="border border-red-600 text-red-800 px-3 py-1 rounded flex items-center justify-center hover:bg-red-600 hover:text-white transition"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" /> 
          )}
        </button>
      </header>

    
      <section className="relative z-10 flex items-center h-[80vh] px-8 md:px-16">
  
  <div className="flex-1">
    <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4 leading-tight dark:text-rose-400">
      Your Partner in Web3 and <br />
      Advanced AI for Enterprise Development
    </h1>
    <p className="text-slate-200 text-lg mb-6 leading-relaxed dark:text-gray-300">
      From Web3 and blockchain to GenAI and beyond, we offer the
      enterprise-grade solutions you need to innovate and succeed in the
      evolving crypto landscape.
    </p>
    <button className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-red-700 transition w-fit">
      CONSULT OUR EXPERTS
    </button>
  </div>

  
  <div className="flex-1 flex justify-end items-center h-full">
    <Image
      src="/ledger7.gif"
      alt="Ledger Gif"
      width={400} 
      height={400}
      unoptimized
      className="object-contain bg-transparent"
    />
  </div>
</section>

    </div>
  );
}
