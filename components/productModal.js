const renderProductModal = (product) => {
    if (!product) return '';
    
    return `
      <div id="product-modal-backdrop" class="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 opacity-0 pointer-events-none transition-opacity duration-300">
        
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeProductModal()"></div>
        
        <div id="product-modal-content" class="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] transform scale-95 opacity-0 transition-all duration-300 text-left z-10">
          
          <button onclick="closeProductModal()" class="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur text-slate-500 hover:text-dark rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer">
            <i data-lucide="x" class="w-6 h-6"></i>
          </button>
  
          <div class="md:w-1/2 bg-slate-100 flex-shrink-0 relative h-64 md:h-auto">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-center absolute inset-0" />
          </div>
  
          <div class="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
            <h2 class="text-2xl md:text-3xl font-bold text-dark mb-4">${product.name}</h2>
            
            <div class="text-3xl font-extrabold text-primary mb-6 pb-6 border-b border-slate-100">
              ฿${product.price.toLocaleString()}
            </div>
            
            <div class="mb-8 flex-grow">
              <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">รายละเอียดสินค้า</h4>
              <p class="text-slate-600 leading-relaxed whitespace-pre-line">${product.description}</p>
            </div>
            
            <div class="mt-auto">
              <button onclick="handleOrder(${product.id})" class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-primary/30">
                <i data-lucide="message-circle" class="w-6 h-6"></i>
                สั่งซื้อผ่านแชท
              </button>
              <p class="text-center text-xs text-slate-400 mt-4">
                * ปุ่มนี้จะเปิดแอปพลิเคชันเพื่อส่งข้อความสั่งซื้อไปยังร้านค้า
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
};
