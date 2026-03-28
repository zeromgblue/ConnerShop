import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { shopData } from '../data/mockData';

const Storefront = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrder = (product) => {
    // กำหนดข้อความสั่งซื้อที่ส่งไป LINE หรือ Messenger
    const message = encodeURIComponent(`สวัสดีครับ/ค่ะ สนใจสั่งซื้อสินค้า:\n${product.name}\nราคา: ${product.price} บาท`);
    
    // จำลองให้เปิด Link LINE Web หรือ App (ใช้ line.me สำหรับเปิดแอป)
    const lineUrl = `https://line.me/R/ti/p/~${shopData.contact.line}?text=${message}`;
    window.open(lineUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar shopName={shopData.name} lineId={shopData.contact.line} />
      
      <main className="flex-grow">
        <Hero 
          name={shopData.name} 
          tagline={shopData.tagline} 
        />
        
        {/* Products Section */}
        <section id="products" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">สินค้าของเรา</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopData.products.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-slide-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard 
                  product={product} 
                  onView={() => setSelectedProduct(product)}
                  onOrder={() => handleOrder(product)}
                />
              </div>
            ))}
          </div>
        </section>

        <ContactSection contact={shopData.contact} shopName={shopData.name} />
      </main>

      <Footer shopName={shopData.name} contact={shopData.contact} />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onOrder={() => {
            handleOrder(selectedProduct);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default Storefront;
