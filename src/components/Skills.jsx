import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL"] },
  { category: "Web3 & Specialized", items: ["Blockchain", "Solidity", "Hardhat"] },
  { category: "Languages", items: ["Python", "Java", "C++"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 transition-colors duration-500">
              Technical Arsenal
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md transition-colors duration-500">
              A comprehensive toolkit for building scalable web applications and decentralized systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group shadow-sm dark:shadow-none"
            >
              <h3 className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-gray-800 dark:text-white text-lg font-medium group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;