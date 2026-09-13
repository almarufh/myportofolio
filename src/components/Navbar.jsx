import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white tracking-wide">
          Alma'ruf<span className="text-blue-500">.</span>
        </a>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="text-zinc-300 hover:text-white transition">Beranda</a>
          <a href="#about" className="text-zinc-300 hover:text-white transition">Tentang</a>
          <a href="#projects" className="text-zinc-300 hover:text-white transition">Proyek</a>
          <a href="#contact" className="text-zinc-300 hover:text-white transition">Kontak</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;