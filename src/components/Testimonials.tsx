import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex R.",
    role: "Software Engineer",
    text: "I used to drink 3 coffees a day and crash by 3 PM. Brewlab Neon Citrus gives me a clean, 6-hour focus block. It's actually insane.",
    rating: 5
  },
  {
    name: "Sarah M.",
    role: "Creative Director",
    text: "The taste is incredible, but the mental clarity is why I subscribe. It's like someone turned the lights on in my brain.",
    rating: 5
  },
  {
    name: "David K.",
    role: "Founder",
    text: "Void Berry is my go-to after a long day of meetings. The magnesium helps me wind down and actually recover for the next day.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">
            THE <span className="text-brand-green">RESULTS</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what the community is saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-black/40 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-green text-brand-green" />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
