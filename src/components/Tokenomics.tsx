import { motion } from "framer-motion";

function Tokenomics() {
  const tokenomicsData = [
    { label: "Total Supply", value: "1,000,000,000", color: "from-yellow-400 to-orange-500" },
    { label: "Liquidity Pool", value: "40%", color: "from-blue-400 to-purple-500" },
    { label: "Community Rewards", value: "30%", color: "from-green-400 to-blue-500" },
    { label: "Marketing", value: "20%", color: "from-pink-400 to-red-500" },
    { label: "Team", value: "10%", color: "from-indigo-400 to-purple-500" }
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-yellow-400">Tokenomics</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transparent and fair distribution designed to reward our community and ensure long-term growth
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">{item.label}</span>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              {/* Pie chart representation */}
              <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">AURIX</div>
                    <div className="text-white/80">Token Distribution</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
              <div>
                <div className="text-yellow-400 font-semibold">🔥 Deflationary</div>
                <p className="text-sm mt-2">Regular token burns to increase scarcity</p>
              </div>
              <div>
                <div className="text-yellow-400 font-semibold">💰 Rewards</div>
                <p className="text-sm mt-2">Holder rewards through staking</p>
              </div>
              <div>
                <div className="text-yellow-400 font-semibold">🔒 Locked Liquidity</div>
                <p className="text-sm mt-2">Liquidity locked for 2 years</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Tokenomics;