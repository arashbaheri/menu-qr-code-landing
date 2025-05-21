
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small cafes and food trucks',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'Unlimited QR code generation',
      'Basic menu customization',
      'Menu photo uploads (up to 25)',
      'Email support',
      'Regular menu updates',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for established restaurants',
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      'Everything in Basic, plus:',
      'Advanced menu customization',
      'Unlimited photo uploads',
      'Menu categories and filters',
      'Analytics dashboard',
      'Priority support',
      'Daily menu specials',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For restaurant groups and chains',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      'Everything in Professional, plus:',
      'Multiple location management',
      'Branded QR codes',
      'API access',
      'Multi-language support',
      'Dedicated account manager',
      'Custom integrations',
    ],
    highlighted: false,
  },
];

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your restaurant's needs, with no hidden fees.
          </p>
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!isYearly ? 'font-semibold text-brand-700' : 'text-gray-500'}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`ml-3 ${isYearly ? 'font-semibold text-brand-700' : 'text-gray-500'}`}>Yearly <span className="text-sm text-green-600">(Save 20%)</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.highlighted ? 'border-brand-500 shadow-lg shadow-brand-100' : 'border-gray-200 shadow-sm'} animate-slide-up relative`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <p className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-base font-normal text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-brand-600 hover:bg-brand-700' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  Choose {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you? Contact us for a personalized recommendation.
          </p>
          <Button variant="link" className="text-brand-600">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
