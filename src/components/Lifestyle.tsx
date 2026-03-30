import { motion } from 'motion/react';

export default function Lifestyle() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">
            <span className="text-brand-blue">FUEL</span> YOUR FLOW
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you're coding, creating, or crushing a workout, Brewlab is the catalyst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
              alt="Coding late night" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="text-brand-green font-bold text-xl mb-2">Deep Work</div>
              <div className="text-white/70">6 hours of uninterrupted focus.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 rounded-3xl overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
              alt="Gym workout" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="text-brand-blue font-bold text-xl mb-2">Performance</div>
              <div className="text-white/70">Clean energy, zero crash.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 rounded-3xl overflow-hidden relative group bg-brand-gray flex items-center justify-center p-8 text-center border border-white/5"
          >
            <div>
              <div className="text-4xl font-display font-bold text-white mb-4">"The biohacker's secret weapon."</div>
              <div className="text-brand-green font-mono text-sm uppercase tracking-widest">- TechCrunch</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
