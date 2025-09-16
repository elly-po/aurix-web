import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">A</span>
            </div>
            <span className="text-white font-bold text-2xl">AURIX</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#tokenomics" className="text-white/80 hover:text-white transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-white/80 hover:text-white transition-colors">Roadmap</a>
            <a href="#community" className="text-white/80 hover:text-white transition-colors">Community</a>
          </nav>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Buy AURIX
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;