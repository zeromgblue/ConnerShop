import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';

const ProductCard = ({ product, onView, onOrder }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-100 cursor-pointer" onClick={onView}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay indicator */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <div className="bg-white/90 backdrop-blur text-dark px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
             <ExternalLink className="w-4 h-4" /> ดูรายละเอียด
           </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 cursor-pointer hover:text-primary transition-colors" onClick={onView}>
          {product.name}
        </h3>
        
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-primary">
            ฿{product.price.toLocaleString()}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOrder();
            }}
            className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-colors"
            title="สั่งซื้อเลย"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
