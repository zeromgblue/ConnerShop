import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ name, tagline }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm animate-fade-in backdrop-blur-sm">
          ยินดีต้อนรับสู่เดโม่ร้านค้า
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-dark tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          {name}
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
          {tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '300ms' }}>
          <a 
            href="#products" 
            className="group flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1"
          >
            เลือกดูสินค้า
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
