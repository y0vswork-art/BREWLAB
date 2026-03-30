import { motion } from 'motion/react';
import { Microscope } from 'lucide-react';

export default function Science() {
  return (
    <section id="science" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
              <Microscope className="w-3 h-3" />
              <span>Clinical Grade Ingredients</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">
              WE DON'T GUESS.<br />
              <span className="text-brand-blue">WE MEASURE.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl">
              Every ingredient in Brewlab is backed by peer-reviewed research. We use clinical doses of nootropics and adaptogens to ensure you actually feel the difference.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-bold text-lg">L-Theanine + Caffeine</h4>
                  <span className="text-brand-green font-mono text-sm">2:1 Ratio</span>
                </div>
                <p className="text-white/50 text-sm">The golden ratio for focused energy without the anxiety or crash. Smooth, sustained alertness.</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-bold text-lg">Lion's Mane Extract</h4>
                  <span className="text-brand-blue font-mono text-sm">500mg</span>
                </div>
                <p className="text-white/50 text-sm">Supports neurogenesis and cognitive function. Essential for deep work and creative problem solving.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-brand-gray border border-white/10 flex items-center justify-center p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent" />
            <div className="relative z-10 w-full h-full border border-white/10 rounded-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-1/2 h-1/2 bg-brand-blue/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute text-center">
                  <div className="text-6xl font-display font-bold text-white mb-2">100%</div>
                  <div className="text-brand-blue uppercase tracking-widest text-sm font-bold">Bioavailable</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
