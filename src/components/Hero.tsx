import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="section bg-gradient-to-b from-background to-secondary/50">
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ملاین، منوی دیجیتال برای <span className="gradient-text">رستوران‌های مدرن</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              تجربه منوی خود را با QR کدهای قابل اسکن متحول کنید. به‌راحتی پیشنهادات خود را به‌روز کنید، سفارش آنلاین بگیرید و مشتریان خود را خوشحال کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base">شروع رایگان</Button>
              <Button size="lg" variant="outline" className="text-base">مشاهده دمو</Button>
            </div>
            <div className="pt-6 text-sm text-muted-foreground">
              <p>مورد اعتماد بیش از ۱۰۰۰ رستوران و کافه</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-primary/10 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-card p-4 shadow-2xl rounded-lg border border-border overflow-hidden">
                <div className="bg-muted p-4 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">کافه میلانو</div>
                    <div className="text-sm text-muted-foreground">منوی دیجیتال</div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" 
                  alt="پیش‌نمایش منوی دیجیتال" 
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