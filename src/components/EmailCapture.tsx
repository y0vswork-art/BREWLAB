import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function EmailCapture() {
  return (
    <section className="py-32 bg-brand-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-black mb-6 leading-none">
            JOIN THE <br />EXPERIMENT.
          </h2>
          <p className="text-black/70 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Get 15% off your first order and early access to limited-batch formula drops.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full bg-black/5 border border-black/20 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 font-medium"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-black text-brand-green font-bold text-lg rounded-full hover:bg-black/80 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              Get Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-black/50 text-xs mt-4 font-medium">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
