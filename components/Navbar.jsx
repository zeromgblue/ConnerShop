import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';

const Navbar = ({ shopName, lineId }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    window.open(`https://line.me/R/ti/p/~${lineId}`, '_blank');
  };

  const navLinks = [
    { name: 'หน้าแรก', href: '#' },
    { name: 'สินค้า', href: '#products' },
    { name: 'ติดต่อเรา', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo / Shop Name */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <ShoppingBag className={`h-6 w-6 text-primary`} />
              </div>
              <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-dark' : 'text-slate-800'}`}>
                {shopName}
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleContactClick}
              className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md shadow-primary/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ติดต่อร้าน</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-600' : 'text-slate-800'} hover:text-primary p-2 focus:outline-none`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-fade-in">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-primary hover:bg-slate-50 px-4 py-3 rounded-xl font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleContactClick}
              className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl font-medium w-full mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>ติดต่อร้านเพื่อสั่งซื้อ</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
