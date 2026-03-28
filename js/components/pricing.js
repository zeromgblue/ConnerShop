const renderPricing = () => {
    return `
      <section id="pricing" class="py-24 relative z-10 w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20 max-w-3xl mx-auto animate-slide-up">
                <h2 class="text-sm font-bold text-purple-400 uppercase tracking-widest mb-3">ค่าบริการเช่าแพลตฟอร์ม</h2>
                <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">ลงทุนหลักร้อยสร้างรายได้หลักล้าน</h3>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                
                <!-- Basic Plan -->
                <div class="glass-card p-10 or p-12 rounded-[2rem] relative animate-slide-up">
                    <h4 class="text-2xl font-bold text-white mb-2">Starter Web</h4>
                    <p class="text-slate-400 mb-6 font-light">เหมาะสำหรับร้านค้าปลีกที่เพิ่งเริ่มต้นแบรนด์</p>
                    <div class="mb-8 flex items-end gap-2">
                        <span class="text-5xl font-extrabold text-white">฿590</span>
                        <span class="text-slate-400 pb-1">/ เดือน</span>
                    </div>
                    <ul class="space-y-4 mb-10 text-slate-300">
                        <li class="flex items-center gap-3"><i data-lucide="check" class="text-blue-400 w-5 h-5 bg-blue-400/10 p-1 rounded-full"></i> จัดการสินค้าได้ 100 รายการ</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="text-blue-400 w-5 h-5 bg-blue-400/10 p-1 rounded-full"></i> ธีมเทมเพลตมาตรฐาน 5 แบบ</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="text-blue-400 w-5 h-5 bg-blue-400/10 p-1 rounded-full"></i> ซับโดเมนร้านค้าฟรี (shop.connershop.com)</li>
                        <li class="flex items-center gap-3 text-slate-500 opacity-50"><i data-lucide="x" class="w-5 h-5 bg-slate-500/10 p-1 rounded-full"></i> ระบบตะกร้าบัตรเครดิต</li>
                    </ul>
                    <button class="w-full glass-card hover:bg-white/10 text-white py-4 rounded-xl font-bold transition-colors">เช่าแพ็กเกจนี้</button>
                </div>

                <!-- Premium Plan -->
                <div class="bg-gradient-to-b from-blue-500 to-[#1e1b4b] p-[1px] rounded-[2rem] relative transform md:-translate-y-6 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] animate-slide-up" style="animation-delay: 200ms;">
                    <div class="absolute top-0 right-10 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg">ขายดีที่สุด 🔥</div>
                    
                    <div class="bg-[#0B1120] h-full w-full rounded-[2rem] p-10 cursor-default">
                        <div class="absolute inset-0 bg-blue-500/5 rounded-[2rem]"></div> <!-- Soft Overlay -->
                        
                        <h4 class="text-2xl font-bold text-white mb-2 relative z-10">Pro Storefront</h4>
                        <p class="text-blue-200 mb-6 font-light relative z-10">ปลดล็อคการทำยอดขายอย่างไม่มีลิมิต</p>
                        
                        <div class="mb-8 flex items-end gap-2 relative z-10">
                            <span class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">฿1,490</span>
                            <span class="text-slate-400 pb-1">/ เดือน</span>
                        </div>
                        
                        <ul class="space-y-4 mb-10 text-blue-100 relative z-10">
                            <li class="flex items-center gap-3"><i data-lucide="check" class="text-white w-5 h-5 bg-blue-500 p-1 rounded-full shadow-lg shadow-blue-500/50"></i> จัดการสินค้าได้ <b>ไม่จำกัด</b></li>
                            <li class="flex items-center gap-3"><i data-lucide="check" class="text-white w-5 h-5 bg-blue-500 p-1 rounded-full shadow-lg shadow-blue-500/50"></i> ธีม <b>Premium Full-stack</b> ทั้งหมด</li>
                            <li class="flex items-center gap-3"><i data-lucide="check" class="text-white w-5 h-5 bg-blue-500 p-1 rounded-full shadow-lg shadow-blue-500/50"></i> แถมฟรีโดเมน <b>.com</b> ส่วนตัว</li>
                            <li class="flex items-center gap-3"><i data-lucide="check" class="text-white w-5 h-5 bg-blue-500 p-1 rounded-full shadow-lg shadow-blue-500/50"></i> รองรับบัตรเครดิต & ผ่อนชำระ 0%</li>
                        </ul>
                        
                        <button class="w-full relative z-10 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] transform hover:-translate-y-1">
                            ทดลองเปิดร้านฟรี 30 วัน
                        </button>
                    </div>
                </div>

            </div>
        </div>
      </section>
    `;
};
