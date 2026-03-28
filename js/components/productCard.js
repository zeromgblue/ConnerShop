const renderProductCard = (product, index) => {
    return `
      <div class="animate-slide-up" style="animation-delay: ${index * 100}ms">
        <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full transform hover:-translate-y-1">
            
            <div class="relative aspect-square overflow-hidden bg-slate-100 cursor-pointer" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div class="bg-white/90 backdrop-blur text-dark px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                        <i data-lucide="external-link" class="w-4 h-4"></i> ดูรายละเอียด
                    </div>
                </div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-slate-800 mb-2 line-clamp-2 cursor-pointer hover:text-primary transition-colors" onclick="openProductModal(${product.id})">
                    ${product.name}
                </h3>
                
                <p class="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
                    ${product.description}
                </p>
                
                <div class="flex items-center justify-between mt-auto">
                    <span class="text-2xl font-bold text-primary">
                        ฿${product.price.toLocaleString()}
                    </span>
                    <button onclick="handleOrder(${product.id})" class="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-colors" title="สั่งซื้อเลย">
                        <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
      </div>
    `;
};
