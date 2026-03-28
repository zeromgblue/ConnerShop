const renderHero = () => {
    return `
      <div class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center min-h-[90vh] text-center px-4 w-full">
        
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-blue-300 font-medium text-sm mb-8 animate-slide-up" style="animation-delay: 100ms;">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Connershop V2.0 อัปเดตใหม่ เปิดให้บริการแล้ว
        </div>
        
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 animate-slide-up leading-tight" style="animation-delay: 200ms;">
          สร้างเว็บไซต์ร้านค้า<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">แบบพรีเมียมใน 3 นาที</span>
        </h1>
        
        <p class="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 mb-10 animate-slide-up font-light" style="animation-delay: 300ms;">
          ธุรกิจปล่อยเช่าเว็บไซต์ที่สมบูรณ์แบบที่สุด ไม่ต้องเขียนโค้ด ไม่ต้องจ้างคนทำเว็บ มีระบบหลังบ้านล้ำสมัย พร้อมรับออเดอร์จากลูกค้าทันที
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up w-full sm:w-auto" style="animation-delay: 400ms;">
          <button class="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_0px_rgba(59,130,246,0.8)] transform hover:-translate-y-1">
            เริ่มต้นใช้งานฟรี 14 วัน
            <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
          </button>
          
          <button class="group flex items-center justify-center gap-2 glass-card hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all">
            <i data-lucide="play-circle" class="w-5 h-5 text-blue-400"></i>
            ดูตัวอย่างหน้าร้านแม่แบบ
          </button>
        </div>
        
        <!-- รูปภาพแสดง Dashboard จำลอง -->
        <div class="mt-24 w-full max-w-5xl relative animate-slide-up" style="animation-delay: 500ms;">
           <div class="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
           <div class="relative glass-card rounded-2xl p-2 md:p-3 shadow-2xl overflow-hidden border border-white/20">
              <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                 <div class="w-3 h-3 rounded-full bg-red-400"></div>
                 <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div class="w-3 h-3 rounded-full bg-green-400"></div>
                 <div class="w-full flex justify-center opacity-50 text-xs text-white">Connershop Admin Dashboard</div>
              </div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="Dashboard" class="w-full rounded-b-xl opacity-90 mix-blend-screen" />
           </div>
        </div>
      </div>
    `;
};
