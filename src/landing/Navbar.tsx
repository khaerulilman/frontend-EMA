import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { motion } from "framer-motion";
import { LogIn, Menu, X } from "lucide-react";
import Link from "next/link"; // Tambahkan import Link

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", section: "home" },
    { name: "Tutors", section: "tutorprofile" },
    { name: "Pricing", section: "pricecourse" },
    { name: "Product", section: "Product" },
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
      const sections = navItems.map((item) =>
        document.getElementById(item.section)
      );
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 bg-blueCustom z-40" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-blueCustom shadow-lg z-50"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center w-64"
            >
              <img
                src="assets/images/ema-logo.png"
                className="w-12 mr-4"
                alt="EMA Logo"
              />
              <span className="text-white text-lg font-bold whitespace-nowrap hidden md:block">
                English <span className="text-yellowCustom">My Adventure</span>
              </span>
            </motion.div>

            {/* Navigation Items */}
            <div
              className={`md:flex flex-grow justify-center items-center ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:justify-center space-y-4 md:space-y-0 md:space-x-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => scrollToSection(item.section)}
                    className={`text-white transition-colors text-sm font-medium ${
                      activeSection === item.section
                        ? "text-yellowCustom"
                        : "hover:text-yellowCustom"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Login Button */}
            <div className="w-64 flex justify-end">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold transition-colors hover:bg-opacity-90"
                  >
                    <span>Dashboard</span>
                  </motion.button>
                </Link>
              ) : (
                <Link href="/auth/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-yellowCustom text-blueCustom rounded-lg font-semibold transition-colors hover:bg-opacity-90"
                  >
                    <LogIn size={18} />
                    <span>Login</span>
                  </motion.button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <div className="h-16" />
    </>
  );
};

export default Navbar;
