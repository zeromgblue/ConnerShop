const renderNavbar = () => {
    return `
      <nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-4 border-b border-transparent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center glass-card px-6 py-3 rounded-2xl">
            
            <a href="#" class="flex items-center gap-2 group">
              <div class="bg-blue-500 p-2 rounded-xl group-hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/30">
                <i data-lucide="layout-template" class="h-6 w-6 text-white"></i>
              </div>
              <span class="text-2xl font-bold tracking-tight text-white hover:text-blue-300 transition-colors">
                Connershop
              </span>
            </a>
  
            <div class="hidden md:flex items-center space-x-8">
              <a href="#features" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">ระบบทั้งหมด</a>
              <a href="#pricing" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">แพ็กเกจ</a>
              <a href="#" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">รีวิว</a>
              <a href="#" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">ติดต่อเรา</a>
            </div>

            <div class="hidden md:flex items-center gap-4">
              <button class="text-slate-300 hover:text-white font-medium text-sm transition-colors cursor-pointer">เข้าสู่ระบบ</button>
              <button class="bg-white text-dark hover:bg-blue-50 px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg">
                สร้างเว็บร้านค้า
              </button>
            </div>
  
            <div class="md:hidden flex items-center">
              <button class="text-white p-2">
                <i data-lucide="menu" class="h-6 w-6"></i>
              </button>
            </div>
  
          </div>
        </div>
      </nav>
    `;
};
