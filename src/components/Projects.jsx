import { motion } from "framer-motion";
import { PROJECT_DATA } from "../constants/projects";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className="py-20 md:py-24 px-4 sm:px-6 bg-gray-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4 transition-colors duration-500"
          >
            Selected Works
          </motion.h2>
          <div className="h-1.5 w-16 md:w-20 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
        </div>

        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-zinc-900 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 shadow-xl shadow-black/[0.03] dark:shadow-none"
            >
              {/* Responsive Image Container: Lower height on mobile */}
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 md:grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Area: Adjusted padding for mobile */}
              <div className="p-6 md:p-8">
                <span className="text-blue-600 dark:text-blue-400 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mt-2 md:mt-3 mb-3 md:mb-4 transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 line-clamp-3 md:h-20">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-8 md:mb-10">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] md:text-[10px] font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-black/[0.03] dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 md:gap-6 pt-4 border-t border-black/5 dark:border-white/5">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                  >
                    <Github size={16} className="group-hover/link:rotate-12 transition-transform md:w-5 md:h-5" />
                    Source
                  </a>
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform md:w-5 md:h-5" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;