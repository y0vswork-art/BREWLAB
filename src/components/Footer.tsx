import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-3xl font-display font-bold tracking-tighter text-white mb-6 block">
              BREW<span className="text-brand-green">LAB</span>
            </a>
            <p className="text-white/50 max-w-sm mb-8 font-sans">
              Formulated for focus. Engineered for taste. The next evolution of functional hydration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-green hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-blue hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-orange-500 hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/50 hover:text-brand-green transition-colors">All Formulas</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-green transition-colors">Neon Citrus</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-green transition-colors">Void Berry</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-green transition-colors">Quantum Peach</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-green transition-colors">Subscriptions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/50 hover:text-brand-blue transition-colors">The Science</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-blue transition-colors">Lab Notes (Blog)</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-blue transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/50 hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            Â© {new Date().getFullYear()} Brewlab Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
