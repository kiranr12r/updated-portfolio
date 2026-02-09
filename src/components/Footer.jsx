import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-tighter">
            KIRAN<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Full-Stack Developer & Blockchain Enthusiast building the future of Web3.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-blue-600 transition-all text-white">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-blue-600 transition-all text-white">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your-email@example.com" className="p-3 bg-zinc-900 rounded-full hover:bg-blue-600 transition-all text-white">
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll to Top */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono"
        >
          BACK TO TOP 
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          © 2026 Kiran R. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;