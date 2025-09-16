import { motion } from "framer-motion";

function Community() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: "🐦",
      followers: "50K+",
      description: "Latest updates and memes",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Telegram",
      icon: "💬",
      followers: "25K+",
      description: "Join the conversation",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Discord",
      icon: "🎮",
      followers: "15K+",
      description: "Community hub",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Reddit",
      icon: "📱",
      followers: "10K+",
      description: "Discussions and news",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-yellow-400">Community</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Be part of the AURIX family! Connect with fellow holders, share memes, and stay updated on all things AURIX.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{social.name}</h3>
                <div className={`text-2xl font-bold bg-gradient-to-r ${social.color} bg-clip-text text-transparent mb-2`}>
                  {social.followers}
                </div>
                <p className="text-white/80 text-sm">{social.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl p-12 border border-yellow-400/30">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Join the AURIX Army? 🚀</h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Don't miss out on the golden opportunity! Join thousands of holders who believe in the AURIX vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-shadow"
              >
                Buy AURIX Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Join Telegram
              </motion.button>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm">Community Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100K+</div>
                <div className="text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">∞</div>
                <div className="text-sm">Memes & Fun</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Community;