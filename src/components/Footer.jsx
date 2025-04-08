import { Link } from 'react-router-dom';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-3xl md:text-4xl font-semibold text-center md:text-left">
          <p>Dreaming up something cool?</p>
          <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
            <img
              src="/src/assets/hero.png"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover bg-[#C7D0D9]"
            />
            <p className="text-2xl md:text-3xl font-semibold">Let’s bring it to life together.</p>
          </div>
        </div>
        <Link
          to="/contact"
          className="bg-white text-black text-xl px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Get in touch
        </Link>
      </div>

      <div className="mt-16 pt-6">
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
