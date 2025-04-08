import { motion } from "framer-motion";
import StickyGreeting from './StickyGreeting';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section
  id="hero"
  className="relative min-h-screen bg-[#C7D0D9] flex items-center justify-center overflow-hidden"
>
  <h1
    className={`
      absolute
      text-[10vw] font-bold text-white/30 leading-none text-center
      px-4
      top-[45%] z-0
      md:block hidden
    `}
  >
    Front-End Developer — UI/UX
  </h1>
  <h1
  className={`
    absolute z-20
    text-white/80 font-bold text-center leading-tight
    text-[16vw] w-[150vw] left-1/2 -translate-x-1/2
    md:hidden block
    whitespace-pre-line
    pointer-events-none
    top-3/4 mb-[5rem]
  `}
>
  Front-End Developer{'\n'}— UI/UX
</h1>

  <motion.img
    src={heroImg}
    alt="Hero"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="absolute bottom-0 z-10 h-[70vh] md:h-[80vh] lg:h-[90vh] object-contain"
  />

  <StickyGreeting />
</section>

  );
};

export default Hero;