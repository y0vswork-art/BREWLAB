import { motion } from 'motion/react';
import { Menu, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-display font-bold tracking-tighter text-white">
            BREW<span className="text-brand-green">LAB</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
            <a href="#shop" className="hover:text-brand-green transition-colors">Shop Formulas</a>
            <a href="#science" className="hover:text-brand-green transition-colors">The Science</a>
            <a href="#about" className="hover:text-brand-green transition-colors">About Us</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-brand-green transition-colors">
            Log In
          </button>
          <button className="p-2 text-white hover:text-brand-green transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-brand-green rounded-full"></span>
          </button>
          <button className="md:hidden p-2 text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
