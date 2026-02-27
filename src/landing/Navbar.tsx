import React, { useEffect, useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      setIsScrolled(window.scrollY > 20);
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
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-blueCustom py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src="assets/images/ema-logo.png"
              className="w-10 h-10 object-contain"
              alt="EMA Logo"
            />
            <span
              className={`font-bold text-lg tracking-wide hidden md:block transition-colors duration-300 ${
                isScrolled ? "text-blueCustom" : "text-white"
              }`}
            >
              English <span className="text-yellowCustom">My Adventure</span>
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`relative px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full ${
                  activeSection === item.section
                    ? "bg-yellowCustom text-blueCustom"
                    : isScrolled
                    ? "text-gray-700 hover:text-blueCustom"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link href="/auth/login">
              <button
                className={`flex items-center gap-2 px-6 py-2.5 font-semibold text-sm rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-blueCustom text-white hover:bg-blue-700"
                    : "bg-white text-blueCustom hover:bg-yellowCustom hover:text-blueCustom"
                }`}
              >
                <LogIn size={16} />
                <span>Start Learning</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-blueCustom" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-t shadow-lg ${
              isScrolled
                ? "bg-white border-gray-100"
                : "bg-blueCustom border-white/10"
            }`}
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`block w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                    activeSection === item.section
                      ? "bg-yellowCustom text-blueCustom"
                      : isScrolled
                      ? "text-gray-700 hover:bg-gray-50"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Link href="/auth/login" className="block pt-2">
                <button
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm rounded-lg ${
                    isScrolled
                      ? "bg-blueCustom text-white"
                      : "bg-white text-blueCustom"
                  }`}
                >
                  <LogIn size={16} />
                  <span>Start Learning</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer — matches navbar background so no color clash */}
      <div className="h-14 bg-blueCustom" />
    </>
  );
};

export default Navbar;
