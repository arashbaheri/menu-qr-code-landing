
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-brand-700">MenuQR</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-brand-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-brand-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-brand-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-brand-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline">Log in</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
