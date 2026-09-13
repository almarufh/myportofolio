import profileImg from '../assets/profile.png';
import cvFile from '../assets/CV_Almaruf_Hidayat.pdf';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Teks Deskripsi */}
        <div className="order-2 md:order-1">
          <p className="text-blue-500 font-medium mb-4 tracking-wide">👋 Halo, perkenalkan saya</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Alma'ruf Hidayat
          </h1>
          <h2 className="text-2xl md:text-3xl text-zinc-400 font-semibold mb-6">
            Fullstack Web Developer
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed max-w-lg text-lg order-2 md:order-1" data-aos="fade-right">
            Saya adalah pengembang perangkat lunak yang berfokus pada ekosistem JavaScript dan Golang. Berpengalaman membangun sistem otomatisasi transaksi level produksi sejak 2024.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg shadow-blue-500/30">
              Lihat Proyek
            </a>

            {/* Tombol Unduh CV dengan Icon */}
            <a 
              href={cvFile} 
              download="CV_Almaruf_Hidayat.pdf" 
              className="flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Unduh CV
            </a>

            <a href="#contact" className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300">Hubungi Saya
            </a>
          </div>
        </div>

        {/* Foto Profil */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img 
            src={profileImg} 
            alt="Alma'ruf Hidayat" 
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-zinc-800 shadow-2xl"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;