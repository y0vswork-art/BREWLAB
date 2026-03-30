import { motion } from 'motion/react';
import { ArrowRight, Beaker } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-dark">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-wider mb-6">
            <Beaker className="w-3 h-3" />
            <span>Batch 004 Now Available</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-white leading-[0.9] mb-6">
            FORMULATED FOR <span className="text-brand-green">FOCUS.</span><br />
            ENGINEERED FOR <span className="text-brand-blue">TASTE.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl font-sans text-balance">
            Experience the next evolution of functional hydration. Zero crash, pure performance, and flavors that defy logic.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-green text-black font-bold text-lg rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 group">
              Shop The Lab
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold text-lg rounded-full border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Explore Formulas
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] lg:h-[800px] flex items-center justify-center"
        >
          {/* Placeholder for 3D Can or Hero Image */}
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2000&auto=format&fit=crop" 
              alt="Brewlab Can" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            <div className="relative z-10 text-center">
              <div className="text-brand-green font-display font-bold text-4xl tracking-tighter mb-2">NEON CITRUS</div>
              <div className="text-white/50 font-mono text-sm tracking-widest uppercase">Formula 01</div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/4 -left-8 p-4 bg-brand-gray/80 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <div className="text-brand-green font-bold text-xl">200mg</div>
            <div className="text-white/50 text-xs uppercase tracking-wider">L-Theanine</div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 -right-8 p-4 bg-brand-gray/80 backdrop-blur-md border border-white/10 rounded-2xl text-right"
          >
            <div className="text-brand-blue font-bold text-xl">Zero</div>
            <div className="text-white/50 text-xs uppercase tracking-wider">Sugar Crash</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
