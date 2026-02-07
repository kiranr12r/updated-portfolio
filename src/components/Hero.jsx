import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();

  const fadeInUp = (delay) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
  });

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500 selection:bg-blue-500/30 py-20">
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-15 pointer-events-none transition-opacity duration-500" 
        style={{ 
          backgroundImage: `radial-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        {/* Status Badge */}
        <motion.div
          {...fadeInUp(0)}
          className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-6 sm:mb-8 rounded-full border border-blue-500/30 bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[9px] sm:text-[10px] font-mono tracking-[0.2em] uppercase"
        >
          Available for Internships 2026
        </motion.div>

        {/* Hero Title - Adjusted font sizes for mobile/tablet/desktop */}
        <motion.h1
          {...fadeInUp(0.2)}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white tracking-tighter mb-6 sm:mb-8 leading-[0.9] sm:leading-[0.85] transition-colors duration-500"
        >
          KIRAN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-teal-600 dark:from-blue-400 dark:via-emerald-400 dark:to-teal-500">
            R.
          </span>
        </motion.h1>

        {/* Professional Summary - Better text scaling */}
        <motion.p
          {...fadeInUp(0.4)}
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light transition-colors duration-500"
        >
          Full-Stack Developer specializing in <span className="text-black dark:text-white font-medium">Blockchain architectures</span> and 
          <span className="text-black dark:text-white font-medium"> AI-driven applications</span>. Crafting secure, 
          intelligent, and highly scalable digital experiences.
        </motion.p>

        {/* Action Area - Mobile: Stacked | Tablet+: Row */}
        <motion.div
          {...fadeInUp(0.6)}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 sm:px-0"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-500 text-sm uppercase tracking-wider shadow-xl shadow-black/5 dark:shadow-white/5"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-transparent text-black dark:text-white font-bold rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-500 text-sm uppercase tracking-wider"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Visual Depth - Scaling ambient glow for smaller screens */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: isDark ? [0.1, 0.15, 0.1] : [0.03, 0.08, 0.03] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[80px] sm:blur-[140px] -z-10 pointer-events-none"
      />
    </section>
  );
};

export default Hero;