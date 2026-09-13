import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white tracking-wide z-50">
          Alma'ruf<span className="text-blue-500">.</span>
        </a>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="text-zinc-300 hover:text-white transition">Beranda</a>
          <a href="#about" className="text-zinc-300 hover:text-white transition">Tentang</a>
          <a href="#projects" className="text-zinc-300 hover:text-white transition">Proyek</a>
          <a href="#contact" className="text-zinc-300 hover:text-white transition">Kontak</a>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-zinc-950 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <a href="#hero" onClick={() => setIsOpen(false)} className="text-2xl text-zinc-300 hover:text-white transition">Beranda</a>
        <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl text-zinc-300 hover:text-white transition">Tentang</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="text-2xl text-zinc-300 hover:text-white transition">Proyek</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl text-zinc-300 hover:text-white transition">Kontak</a>
      </div>
    </nav>
  );
};

export default Navbar;