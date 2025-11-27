import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Our Team", href: "#team" },
    { label: "Contact", href: "#contact" },
    { label: "Get Involved", href: "#get-involved" },
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const target = document.getElementById(id);

    if (!target) {
      window.location.hash = href;
      setIsOpen(false);
      return;
    }

    const navEl = navRef.current;
    const navHeight = navEl ? navEl.getBoundingClientRect().height : 80;

    const targetY =
      target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;

    window.scrollTo({ top: targetY, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm shadow-md z-50"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* CLICKABLE LOGO + TEXT USING <a href="#home"> */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="/images/vidhata_logo.png"
              alt="Vidhata Logo"
              className="h-14 w-14"
            />
            <span className="text-3xl font-bold text-[#5B8A8D]">Vidhata</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 pl-10">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 hover:text-[#5B8A8D] transition-colors cursor-pointer text-lg"
              >
                {item.label}
              </a>
            ))}

            {/* Join Us Button */}
            <a
              href={navItems[navItems.length - 1].href}
              onClick={(e) =>
                handleNavClick(e, navItems[navItems.length - 1].href)
              }
              className="bg-[#EB8F78] hover:bg-[#d87f69] text-white px-6 py-2 transition-colors cursor-pointer text-lg rounded-lg"
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
          <div className="md:hidden pb-4 space-y-3 pl-4">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-gray-700 hover:text-[#5B8A8D] transition-colors py-2 cursor-pointer text-base"
              >
                {item.label}
              </a>
            ))}

            {/* Join Us Button (Mobile) */}
            <a
              href={navItems[navItems.length - 1].href}
              onClick={(e) =>
                handleNavClick(e, navItems[navItems.length - 1].href)
              }
              className="block bg-[#EB8F78] hover:bg-[#d87f69] text-white px-6 py-2 text-center transition-colors cursor-pointer text-base rounded-lg"
            >
              {navItems[navItems.length - 1].label}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
