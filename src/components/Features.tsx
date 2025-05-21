
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Calendar, Package, User } from 'lucide-react';

const features = [
  {
    icon: <QrCode className="h-10 w-10 text-brand-600" />,
    title: 'QR Code Menus',
    description: 'Generate unique QR codes for your restaurant that customers can scan to view your digital menu instantly.',
  },
  {
    icon: <Calendar className="h-10 w-10 text-brand-600" />,
    title: 'Real-time Updates',
    description: 'Update your menu in real-time. Perfect for daily specials, seasonal items, or sold-out dishes.',
  },
  {
    icon: <Package className="h-10 w-10 text-brand-600" />,
    title: 'Custom Branding',
    description: 'Customize your digital menu with your restaurant's logo, colors, and unique style.',
  },
  {
    icon: <User className="h-10 w-10 text-brand-600" />,
    title: 'Customer Analytics',
    description: 'Track menu views, popular items, and customer behavior to optimize your offerings.',
  },
];

const Features = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Restaurants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create stunning digital menus that drive customer satisfaction and streamline operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Modern Solution for a <br />
                  <span className="gradient-text">Contactless Experience</span>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In today's world, customers expect contactless options. Our QR code menus eliminate the need for physical menus, reducing costs and waste while providing a safer, more hygienic dining experience.
                </p>
                <ul className="space-y-3">
                  {['Eco-friendly', 'Cost-effective', 'Easy to sanitize', 'Instantly updatable'].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-brand-500 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Customer scanning QR code" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
