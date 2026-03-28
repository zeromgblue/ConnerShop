import React from 'react';

const Footer = ({ shopName, contact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-white/10 text-slate-400 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-4">{shopName}</h2>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <a href="#" className="hover:text-blue-400 transition-colors">หน้าแรก</a>
          <a href="#products" className="hover:text-blue-400 transition-colors">สินค้า</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">ติดต่อเรา</a>
        </div>
        
        <p className="text-sm opacity-60">
          © {currentYear} {shopName}. สิทธิบัตรทั้งหมดสงวนไว้. <br />
          สร้างด้วย <a href="#" className="text-blue-400 hover:text-blue-300">Connershop Platform</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
