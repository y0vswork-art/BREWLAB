/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Products from './components/Products';
import ValueProps from './components/ValueProps';
import HowItWorks from './components/HowItWorks';
import Science from './components/Science';
import Testimonials from './components/Testimonials';
import Lifestyle from './components/Lifestyle';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Products />
        <ValueProps />
        <HowItWorks />
        <Science />
        <Testimonials />
        <Lifestyle />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  );
}
