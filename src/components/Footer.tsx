import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <span className="text-white font-bold text-2xl">AURIX</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              The golden meme coin that's revolutionizing the crypto space. Join our community and ride the wave to the moon!
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                🐦
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                💬
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                🎮
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                📱
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#tokenomics" className="text-white/80 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-white/80 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#community" className="text-white/80 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Audit Report</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contract</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Chart</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contract Address */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
          <h3 className="text-white font-bold text-lg mb-2">Contract Address</h3>
          <div className="flex items-center justify-between bg-black/30 rounded-lg p-3">
            <span className="text-yellow-400 font-mono text-sm break-all">
              0x1234567890abcdef1234567890abcdef12345678
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-300 transition-colors"
            >
              Copy
            </motion.button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 AURIX. All rights reserved. Built with 💎 by the community.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
          <p className="text-yellow-400 text-xs text-center">
            ⚠️ Cryptocurrency investments are subject to high market risk. Please invest responsibly and do your own research. 
            AURIX is a meme coin created for entertainment purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;