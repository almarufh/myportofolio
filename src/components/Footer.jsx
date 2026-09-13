const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-8 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold text-white">
          Alma'ruf<span className="text-blue-500">.</span>
        </div>
        
        <p className="text-zinc-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Alma'ruf Hidayat. All rights reserved.
        </p>

        <div className="flex space-x-6">
          {/* Ganti "#" dengan link GitHub Anda */}
          <a href="https://github.com/almarufh" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition font-medium">
            GitHub
          </a>
          {/* Ganti "#" dengan link LinkedIn Anda */}
          <a href="https://www.linkedin.com/in/almarufhidayat" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition font-medium">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;