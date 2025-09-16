import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-yellow-400">AURIX</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            AURIX isn't just another meme coin - it's a golden opportunity to join a community 
            that believes in the power of memes, fun, and financial freedom!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">To The Moon</h3>
            <p className="text-white/80">
              Built on solid fundamentals with a community-driven approach to reach astronomical heights.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors"
          >
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-white mb-4">Diamond Hands</h3>
            <p className="text-white/80">
              Our holders are true believers who understand the long-term potential of AURIX.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors"
          >
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-white mb-4">Golden Future</h3>
            <p className="text-white/80">
              With innovative features and a strong roadmap, AURIX is positioned for golden success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;