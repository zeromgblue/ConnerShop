const renderFooter = () => {
    return `
      <footer class="border-t border-white/10 mt-20 relative z-10 glass-card">
        <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="flex items-center gap-2">
              <div class="bg-blue-500/10 p-2 rounded-lg">
                <i data-lucide="layout-template" class="h-6 w-6 text-blue-400"></i>
              </div>
              <span class="text-2xl font-bold text-white">Connershop</span>
            </div>
            
            <div class="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a href="#" class="hover:text-blue-400 transition-colors">ทำไมต้องเช่าเว็บกับเรา?</a>
              <a href="#" class="hover:text-blue-400 transition-colors">แพ็กเกจ</a>
              <a href="#" class="hover:text-blue-400 transition-colors">เงื่อนไขการให้บริการ</a>
              <a href="#" class="hover:text-blue-400 transition-colors">ติดต่อแอดมิน (Line OA)</a>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
            &copy; 2026 Connershop Website Renter Platform. All rights reserved.
          </div>
        </div>
      </footer>
    `;
};
