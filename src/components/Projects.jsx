import { listProyek } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyek Saya</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Berikut adalah beberapa proyek unggulan yang telah saya kembangkan, mulai dari platform komunitas hingga sistem transaksi otomatis skala produksi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {listProyek.map((proyek, index) => (
            <div 
              key={proyek.id} 
              data-aos-delay={index * 200} 
              alt={proyek.nama} 
              className="bg-zinc-800/80 rounded-2xl overflow-hidden border border-zinc-700 hover:border-blue-500 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={proyek.gambar} 
                  alt={proyek.nama} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {proyek.nama === "CuanBot" && (
                  <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Live Production
                  </span>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{proyek.nama}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {proyek.desk}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <span key={index} className="bg-zinc-900 text-blue-400 text-sm px-3 py-1 rounded-md border border-zinc-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;