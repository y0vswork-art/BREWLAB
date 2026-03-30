import { motion } from 'motion/react';
import { Zap, Brain, Droplets, Activity } from 'lucide-react';

const pillars = [
  {
    icon: <Brain className="w-8 h-8 text-brand-green" />,
    title: "Cognitive Enhancement",
    desc: "Nootropic stacks designed to increase focus, memory retention, and mental clarity without the jitters."
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-blue" />,
    title: "Clean Energy",
    desc: "Natural caffeine sources paired with L-Theanine for a smooth, sustained energy curve that lasts hours."
  },
  {
    icon: <Droplets className="w-8 h-8 text-orange-500" />,
    title: "Cellular Hydration",
    desc: "Optimized electrolyte ratios ensure your body absorbs water faster and more efficiently."
  },
  {
    icon: <Activity className="w-8 h-8 text-purple-500" />,
    title: "Zero Crash Formula",
    desc: "No refined sugars or artificial sweeteners. Just clean, functional ingredients that your body recognizes."
  }
];

export default function ValueProps() {
  return (
    <section className="py-32 bg-brand-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">
            NOT JUST A DRINK.<br />
            <span className="text-brand-green">A PROTOCOL.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Every can of Brewlab is a precisely engineered formula designed to optimize a specific state of mind and body.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
