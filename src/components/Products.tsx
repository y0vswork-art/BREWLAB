import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "NEON CITRUS",
    tagline: "Formula 01: Pure Focus",
    benefits: ["200mg L-Theanine", "150mg Natural Caffeine", "Zero Sugar"],
    color: "from-brand-green/20",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "VOID BERRY",
    tagline: "Formula 02: Deep Recovery",
    benefits: ["Magnesium L-Threonate", "Ashwagandha", "Electrolytes"],
    color: "from-brand-blue/20",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "QUANTUM PEACH",
    tagline: "Formula 03: Sustained Energy",
    benefits: ["Lion's Mane", "B-Vitamin Complex", "Adaptogens"],
    color: "from-orange-500/20",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <section id="shop" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-4">
              THE <span className="text-brand-green">LAB</span> COLLECTION
            </h2>
            <p className="text-white/60 text-lg max-w-md">
              Bestselling formulas engineered for specific cognitive and physical states.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            View All Formulas <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-brand-gray rounded-3xl overflow-hidden border border-white/5 hover:border-brand-green/30 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${product.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-80 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white/70 border border-white/10">
                    {product.tagline}
                  </div>
                </div>
                
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-brand-gray/50 to-transparent" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{product.name}</h3>
                  <ul className="space-y-1 mb-6">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-white/60 flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-green rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-brand-green transition-colors">
                    Add to Cart â€” $36
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
