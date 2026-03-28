import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const ContactSection = ({ contact, shopName }) => {
  return (
    <section id="contact" className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">ติดต่อเรา</h2>
            <p className="text-blue-100 text-lg mb-10 opacity-90">
              สนใจสินค้าหรือมีข้อสงสัยสอบถามเพิ่มเติม สามารถติดต่อ {shopName} ได้ตามช่องทางด้านล่างนี้เลยครับ/ค่ะ
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">LINE Official</h4>
                  <a href={`https://line.me/R/ti/p/~${contact.line}`} target="_blank" rel="noreferrer" className="text-blue-200 hover:text-white transition-colors">
                    {contact.line}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">เบอร์โทรศัพท์</h4>
                  <p className="text-blue-200">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">ที่อยู่ร้าน</h4>
                  <p className="text-blue-200">{contact.address}</p>
                </div>
              </div>
            </div>
            
            <a 
              href={contact.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/10"
            >
              <ExternalLink className="w-4 h-4" /> ดูแผนที่ Google Maps
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">แชทสอบถามทันที</h3>
            <div className="space-y-4">
              <input type="text" placeholder="ชื่อของคุณ" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-400 transition-colors" />
              <textarea rows={4} placeholder="ข้อความที่ต้องการสอบถาม..." className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"></textarea>
              <button 
                onClick={() => window.open(`https://line.me/R/ti/p/~${contact.line}`, '_blank')}
                className="w-full bg-primary hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg flex justify-center items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                ส่งข้อความ
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
