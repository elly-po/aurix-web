import { motion } from "framer-motion";

function Roadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      status: "completed",
      items: [
        "Token Launch",
        "Website & Social Media",
        "Initial Community Building",
        "DEX Listing"
      ]
    },
    {
      phase: "Phase 2",
      title: "Growth & Expansion",
      status: "current",
      items: [
        "Marketing Campaign",
        "Influencer Partnerships",
        "Community Events",
        "CEX Listings"
      ]
    },
    {
      phase: "Phase 3",
      title: "Utility & Features",
      status: "upcoming",
      items: [
        "Staking Platform",
        "NFT Collection",
        "Mobile App",
        "Governance System"
      ]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem & Beyond",
      status: "future",
      items: [
        "DeFi Integration",
        "Cross-chain Bridge",
        "Metaverse Presence",
        "Global Partnerships"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "from-green-400 to-emerald-500";
      case "current": return "from-yellow-400 to-orange-500";
      case "upcoming": return "from-blue-400 to-purple-500";
      case "future": return "from-purple-400 to-pink-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-yellow-400">Roadmap</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our journey to the moon is carefully planned. Here's what we've accomplished and what's coming next!
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-purple-500 rounded-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 max-w-md">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${getStatusColor(item.status)} text-black`}>
                      {item.phase}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-white/80">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden lg:block">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${getStatusColor(item.status)} border-4 border-white/20`}></div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-md hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">🚀 Next Milestone</h3>
            <p className="text-white/80 text-lg">
              We're currently in Phase 2, focusing on explosive growth and community expansion. 
              Join us as we prepare for our next major exchange listings!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Roadmap;