import { listTools } from "../data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Deskripsi */}
          <div>
            <p className="text-zinc-400 leading-relaxed text-lg mb-6">
              Latar belakang saya di Hukum Ekonomi Syariah dari UIN Palopo dipadukan dengan pelatihan intensif Fullstack Web Development memberikan saya perspektif unik dalam melihat sebuah produk digital—tidak hanya dari sisi kode, tetapi juga dari sisi kepatuhan, keandalan, dan alur bisnis.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg mb-6">
              Saya sangat tertarik untuk berkontribusi pada ekosistem teknologi finansial, membangun backend yang tangguh dengan Golang dan antarmuka frontend yang modern menggunakan React.js.
            </p>
            <div className="flex gap-6 mt-8">
              <div>
                <h4 className="text-3xl font-bold text-white">2+</h4>
                <p className="text-blue-500">Tahun Pengalaman</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">100+</h4>
                <p className="text-blue-500">Transaksi/Hari (Produksi)</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Teknologi & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {listTools.map((tool) => (
                <div key={tool.id} className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 hover:border-blue-500 transition-colors group flex flex-col items-center text-center">
                  <img src={tool.gambar} alt={tool.nama} className="w-12 h-12 mb-3 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                  <h4 className="text-white font-medium text-sm">{tool.nama}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;