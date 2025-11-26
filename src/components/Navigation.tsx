import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "figma:asset/f2dddff10fce8c5cc0468d3c13d16d6eeadcbdb7.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Our Team", href: "#team" },
    { label: "Contact", href: "#contact" },
    { label: "Join Us", href: "#get-involved" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/img/"
              alt="Vidhata Logo"
              className="h-14 w-14"
            />
            <span className="text-2xl text-[#5B8A8D]">
              Vidhata
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#5B8A8D] transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Updated Join Us Button */}
            <a
              href={navItems[navItems.length - 1].href}
              className="bg-[#EB8F78] hover:bg-[#d87f69] text-white px-6 py-2 transition-colors"
              style={{ borderRadius: "9px" }}
            >
              {navItems[navItems.length - 1].label}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-[#5B8A8D] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Join Us Button (also updated) */}
            <a
              href={navItems[navItems.length - 1].href}
              className="block bg-[#EB8F78] hover:bg-[#d87f69] text-white px-6 py-2 text-center transition-colors"
              style={{ borderRadius: "9px" }}
              onClick={() => setIsOpen(false)}
            >
              {navItems[navItems.length - 1].label}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}