import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side */}
        <motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 transition-colors duration-500">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg transition-colors duration-500">
            I'm currently looking for internship opportunities. If you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-300">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Mail size={24} />
              </div>
              <p className="font-medium">rkiru04@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 text-gray-800 dark:text-gray-300">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <MapPin size={24} />
              </div>
              <p className="font-medium">Bengaluru, India</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div className="bg-gray-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 p-8 rounded-3xl shadow-xl dark:shadow-none">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white outline-none focus:ring-2 ring-blue-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">Message</label>
              <textarea 
                rows="4" 
                className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white outline-none focus:ring-2 ring-blue-500 transition-all"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;