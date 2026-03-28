document.addEventListener("DOMContentLoaded", () => {
    const appElement = document.getElementById("app");
    
    // เราจะใช้ Components Render เพื่อพ่น HTML ของ "หน้าแพลตฟอร์มปล่อยเช่าเว็บ" ออกมา
    appElement.innerHTML = `
        ${renderNavbar()}
        <main class="flex-grow">
            ${renderHero()}
            ${renderFeatures()}
            ${renderPricing()}
        </main>
        ${renderFooter()}
    `;

    // Initialize Icons ของ lucide
    lucide.createIcons();

    // Effect: Navbar จะเปลี่ยนรูปแบบเมื่อเลื่อนหน้าเว็บ (Scroll)
    const navbar = document.querySelector('#navbar > div');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-white/10', 'backdrop-blur-xl', 'border', 'border-white/10', 'shadow-2xl');
            navbar.classList.remove('glass-card');
        } else {
            navbar.classList.add('glass-card');
            navbar.classList.remove('bg-white/10', 'backdrop-blur-xl', 'border', 'border-white/10', 'shadow-2xl');
        }
    });

    // ลบไฟล์เก่าๆ ที่ไม่เกี่ยวข้องกันทิ้งได้ด้วย ถ้าต้องการ
});
