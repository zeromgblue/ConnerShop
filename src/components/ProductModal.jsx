import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const ProductModal = ({ product, onClose, onOrder }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-slide-up text-left z-10">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur text-slate-500 hover:text-dark rounded-full flex items-center justify-center transition-colors shadow-sm"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 bg-slate-100 flex-shrink-0 relative h-64 md:h-auto">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>

        {/* Detail Section */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">{product.name}</h2>
          
          <div className="text-3xl font-extrabold text-primary mb-6 pb-6 border-b border-slate-100">
            ฿{product.price.toLocaleString()}
          </div>
          
          <div className="mb-8 flex-grow">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">รายละเอียดสินค้า</h4>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
          
          <div className="mt-auto">
            <button 
              onClick={onOrder}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-primary/30"
            >
              <MessageCircle className="w-6 h-6" />
              สั่งซื้อผ่านแชท
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              * ปุ่มนี้จะเปิดแอปพลิเคชันเพื่อส่งข้อความสั่งซื้อไปยังร้านค้า
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
