const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-800/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Mari terhubung! Saya terbuka untuk peluang baru, kolaborasi proyek, atau sekadar berdiskusi tentang teknologi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info Kontak */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Lokasi</h4>
              <p className="text-zinc-400">Bogor, Indonesia</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Email</h4>
              <a href="mailto:almarufhidayat99@gmail.com" className="text-blue-500 hover:text-blue-400 transition block">
                almarufhidayat99@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">WhatsApp</h4>
              <a href="https://wa.me/6281973779380" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 transition block">
                +62 819-7377-9380
              </a>
            </div>
          </div>

          {/* Form Pengiriman Pesan */}
          <form action="https://formsubmit.co/almarufhidayat99@gmail.com" method="POST" className="space-y-6">
            {/* Menonaktifkan captcha bawaan formsubmit agar UX lebih mulus */}
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nama Lengkap</label>
              <input type="text" name="name" id="name" required className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Masukkan nama Anda" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
              <input type="email" name="email" id="email" required className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Masukkan email Anda" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Pesan</label>
              <textarea name="message" id="message" rows="4" required className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;