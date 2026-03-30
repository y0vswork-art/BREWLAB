import { motion } from 'motion/react';

const reviews = [
  "â€œThe only drink that keeps me focused for 6 hours straight.â€  - Wired",
  "â€œTastes like the future. Performs like a biohack.â€  - GQ",
  "â€œFinally, a functional beverage that doesn't taste like medicine.â€  - Fast Company",
  "â€œBrewlab is redefining the energy drink category.â€  - Forbes",
  "â€œThe perfect balance of science and flavor.â€  - Hypebeast"
];

export default function SocialProof() {
  return (
    <div className="w-full bg-brand-green py-4 overflow-hidden border-y border-black/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
          className="flex gap-12 items-center text-black font-display font-bold uppercase tracking-widest text-sm"
        >
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>{review}</span>
              <span className="w-2 h-2 bg-black rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
