import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Select Your State",
    desc: "Choose from Focus, Recovery, or Energy based on your immediate needs."
  },
  {
    num: "02",
    title: "Consume Cold",
    desc: "Drink 15-30 minutes before you need to perform. Best served ice cold."
  },
  {
    num: "03",
    title: "Experience Flow",
    desc: "Feel the active ingredients engage, providing up to 6 hours of sustained output."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-brand-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">
              THE <span className="text-brand-blue">METHOD</span>
            </h2>
            <p className="text-white/60 text-lg mb-12">
              Brewlab isn't just a beverage; it's a tool. To get the most out of our formulas, follow the protocol.
            </p>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="text-4xl font-display font-bold text-brand-gray group-hover:text-brand-green transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden relative border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop" 
                alt="Brewlab in action" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/40 to-transparent mix-blend-overlay" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-brand-green font-bold mb-1">Optimal Timing</div>
                    <div className="text-white/70 text-sm">Consume 30 mins pre-workout or deep work session.</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
