import { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Sun, Moon } from 'lucide-react';

type NavbarProps = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

   const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <>
      <div className={theme}>
        <div className="flex items-center justify-between p-2 bg-amber-300">
          <div className="mx-4 ">
            Logo
          </div>

          <div className="relative">
            {/* Desktop Navigation - hidden on small screens */}
            <div className="hidden md:flex flex-row gap-4 text-blue-600 bg-pink-500 rounded-xl px-4 py-3">
              <Link to="/" className="px-1 text-center hover:text-black">
                Home
              </Link>
              <Link to="/order" className="px-1 text-center hover:text-black">
                Purchase
              </Link>
              <Link to="/about" className="px-1 text-center hover:text-black">
                About
              </Link>
              <Link to="/contact" className="px-1 text-center hover:text-black">
                Contact
              </Link>

              <button
                onClick={toggleTheme}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors 
                  ${theme === 'dark' ? "bg-yellow-400" : "bg-stone-800"}`}
              >
                <span
                  className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transform transition-transform
                    ${theme === 'dark' ? "translate-x-7" : "translate-x-1"}`}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-500" />
                  )}
                </span>
              </button>
            </div>

            {/* Mobile Navigation - visible only on small screens */}
            <div className="md:hidden">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="flex items-center justify-between w-full px-4 py-2 text-blue-600 bg-pink-500 rounded-xl hover:text-black focus:outline-none"
              >
                <span>Menu</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Dropdown Menu */}
              {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-pink-500 rounded-xl shadow-lg z-50">
                  <div className="flex flex-col">
                    <Link
                      to="/"
                      className="px-4 py-3 text-blue-600 text-center hover:text-black border-b border-pink-400 last:border-b-0"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                    <Link
                      to="/order"
                      className="px-4 py-3 text-blue-600 text-center hover:text-black border-b border-pink-400 last:border-b-0"
                      onClick={closeMenu}
                    >
                      Purchase
                    </Link>
                    <Link
                      to="/about"
                      className="px-4 py-3 text-blue-600 text-center hover:text-black border-b border-pink-400 last:border-b-0"
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-3 text-blue-600 text-center hover:text-black"
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
