import { Linkedin, Github, Instagram } from 'lucide-react';
import { SiMedium } from 'react-icons/si';

const FooterBottom = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-lg text-gray-400 gap-4">
      <p className="text-center md:text-left">
        © 2025 Fikri Andra Irham – All rights reserved
      </p>
      <div className="flex flex-wrap justify-center md:justify-end gap-6">
        <a
          href="https://linkedin.com/in/fikriandrrhm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition flex items-center gap-2"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/fikriandrrhm19"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition flex items-center gap-2"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a
          href="https://medium.com/@fikri.andrhm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition flex items-center gap-2"
        >
          <SiMedium size={18} />
          <span>Medium</span>
        </a>
        <a
          href="https://instagram.com/fikriandrrhm_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition flex items-center gap-2"
        >
          <Instagram size={18} />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
