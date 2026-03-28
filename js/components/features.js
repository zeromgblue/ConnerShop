const renderFeatures = () => {
    const features = [
      { icon: "brush", title: "ปรับแต่งดีไซน์ได้อิสระ", desc: "เทมเพลตระดับโลก พรีเมียมทุกสัดส่วน ปรับแต่งรูปแบบสีและฟอนต์ให้เข้ากับแบรนด์ได้ 100%" },
      { icon: "smartphone", title: "รองรับมือถือและแท็บเล็ต", desc: "หน้าเว็บแสดงผลสวยงามทุกขนาดหน้าจอ เพิ่มโอกาสการขายจากผู้ใช้งานสมาร์ทโฟน" },
      { icon: "server", title: "เทิร์นคีย์โซลูชัน 100%", desc: "เราดูแลระบบเซิร์ฟเวอร์โดเมนให้ทั้งหมด คุณแค่คลิกเปิดร้านก็พร้อมขายเลยทันที" },
      { icon: "credit-card", title: "รองรับรับชำระเงินทุกช่องทาง", desc: "เชื่อมต่อพร้อมเพย์, บัตรเครดิต, ตัดผ่านแอปธนาคารอัตโนมัติ โดยไม่ต้องเขียนโค้ด" },
      { icon: "bar-chart-2", title: "วิเคราะห์ยอดขายอัจฉริยะ", desc: "สรุปยอดขายรายวัน จัดการออเดอร์พร้อมแบนเนอร์แสดงสถิติลูกค้าผ่าน Dashboard ส่วนตัว" },
      { icon: "shield", title: "ปลอดภัยสูงสุดเทียบเท่าธนาคาร", desc: "ปกป้องข้อมูลลูกค้าด้วย SSL และระบบป้องกัน Server อัตโนมัติ ปลอดภัยหายห่วง" }
    ];

    const cardsHtml = features.map((f, i) => `
        <div class="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:bg-blue-600/10 hover:border-blue-400/30 group">
            <div class="w-14 h-14 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-blue-500 group-hover:text-white shadow-lg">
                <i data-lucide="${f.icon}" class="w-7 h-7"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">${f.title}</h3>
            <p class="text-slate-400 leading-relaxed font-light">${f.desc}</p>
        </div>
    `).join('');

    return `
      <section id="features" class="py-24 relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 max-w-3xl mx-auto animate-slide-up">
                <h2 class="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">จุดเด่นของแพลตฟอร์ม</h2>
                <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">ฟีเจอร์ระดับพรีเมียม<br/>ครบจบบน Connershop</h3>
                <p class="text-slate-400 text-lg font-light">เรามีเครื่องมือชั้นนำทั้งหมดที่คุณต้องใช้ ในการเริ่มต้นและสเกลธุรกิจออนไลน์ของคุณ</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
                ${cardsHtml}
            </div>
        </div>
      </section>
    `;
};
