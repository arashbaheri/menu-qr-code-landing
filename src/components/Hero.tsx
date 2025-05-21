
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-16">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Digital Menus for <span className="gradient-text">Modern Restaurants</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your menu experience with scannable QR codes. Easily update your offerings, showcase photos, and delight your customers.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button size="lg" className="text-base">Get Started for Free</Button>
              <Button size="lg" variant="outline" className="text-base">See Demo</Button>
            </div>
            <div className="pt-6 text-sm text-gray-500">
              <p>Trusted by 1,000+ restaurants and cafes worldwide</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-brand-700/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-4 shadow-2xl rounded-lg border overflow-hidden">
                <div className="bg-gray-100 p-4 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Cafe Milano</div>
                    <div className="text-sm text-gray-500">Digital Menu</div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" 
                  alt="Digital Menu Preview" 
                  className="w-full h-auto rounded-b-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
