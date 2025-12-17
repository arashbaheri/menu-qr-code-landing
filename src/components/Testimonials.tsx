import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'علی محمدی',
    role: 'مدیر رستوران پارسیان',
    content: 'از زمانی که منوی دیجیتال ملاین را راه‌اندازی کردیم، سفارش‌گیری سریع‌تر شده و مشتریان راضی‌تر هستند. واقعاً تحول بزرگی در کسب‌وکار ما ایجاد کرد.',
    rating: 5,
  },
  {
    name: 'سارا احمدی',
    role: 'صاحب کافه آرامش',
    content: 'پشتیبانی عالی و امکانات فوق‌العاده. امکان ثبت سفارش آنلاین و فراخوان گارسون خیلی به کارمان اومده. به همه توصیه می‌کنم.',
    rating: 5,
  },
  {
    name: 'محمد رضایی',
    role: 'مدیر زنجیره رستوران‌های سنتی',
    content: 'با استفاده از پنل تحلیلی و هوش مصنوعی ملاین، تونستیم سود خودمون رو ۳۰٪ افزایش بدیم. باشگاه مشتریان هم فوق‌العاده‌ست.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            مشتریان درباره ما چه می‌گویند؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نظرات برخی از مشتریان راضی ما که از خدمات ملاین استفاده می‌کنند.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-border shadow-sm hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
