import React, { useEffect, useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", section: "home" },
    { name: "Tutors", section: "tutorprofile" },
    { name: "Pricing", section: "pricecourse" },
    { name: "Certificate", section: "certificate" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      navItems.forEach((item) => {
        const section = document.getElementById(item.section);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(item.section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blueCustom shadow-lg z-50 transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center w-64">
            <img
              src="assets/images/ema-logo.png"
              className="w-12 mr-4 animate-pulse"
              alt="EMA Logo"
            />
            <span className="text-white font-bold tracking-wide hidden md:block">
              English <span className="text-yellowCustom">My Adventure</span>
            </span>
          </div>

          {/* Navigation Items */}
          <div
            className={`md:flex flex-grow justify-center items-center transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center md:justify-center space-y-4 md:space-y-0 md:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`text-white text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-110 ${
                    activeSection === item.section
                      ? "text-yellowCustom underline"
                      : "hover:text-yellowCustom"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Login Button */}
          <div className="w-64 flex justify-end">
            <Link href="/auth/login">
              <button className="flex items-center space-x-2 px-5 py-2 bg-yellowCustom text-blueCustom rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 shadow-md">
                <LogIn size={18} />
                <span>Start Learning</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      <div className="h-16" />
    </>
  );
};

export default Navbar;
