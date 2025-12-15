import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Calendar, Package, User } from 'lucide-react';

const features = [
  {
    icon: <QrCode className="h-10 w-10 text-primary" />,
    title: 'منوی QR کد',
    description: 'QR کدهای منحصربه‌فرد برای رستوران شما که مشتریان می‌توانند اسکن کنند و منوی دیجیتال را فوراً مشاهده کنند.',
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: 'به‌روزرسانی آنی',
    description: 'منوی خود را در لحظه به‌روز کنید. مناسب برای غذاهای ویژه روزانه، اقلام فصلی یا غذاهای تمام‌شده.',
  },
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: 'برندینگ سفارشی',
    description: 'منوی دیجیتال خود را با لوگو، رنگ‌ها و سبک منحصربه‌فرد رستوران‌تان سفارشی کنید.',
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: 'آمار و تحلیل مشتری',
    description: 'بازدید منو، اقلام محبوب و رفتار مشتری را پیگیری کنید تا پیشنهادات خود را بهینه کنید.',
  },
];

const Features = () => {
  return (
    <section id="features" className="section bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ویژگی‌های قدرتمند برای رستوران‌های مدرن
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            همه آنچه برای ایجاد منوهای دیجیتال زیبا نیاز دارید که رضایت مشتری را افزایش داده و عملیات را ساده‌تر می‌کند.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
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
          <div className="bg-gradient-to-l from-secondary/50 to-primary/10 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  راه‌حل مدرن برای <br />
                  <span className="gradient-text">تجربه‌ای بدون تماس</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  در دنیای امروز، مشتریان انتظار گزینه‌های بدون تماس را دارند. منوهای QR کد ما نیاز به منوهای فیزیکی را حذف کرده، هزینه‌ها و ضایعات را کاهش می‌دهد و تجربه غذاخوری امن‌تر و بهداشتی‌تری فراهم می‌کند.
                </p>
                <ul className="space-y-3">
                  {['دوستدار محیط زیست', 'مقرون به صرفه', 'آسان برای ضدعفونی کردن', 'به‌روزرسانی فوری'].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary-foreground" viewBox="0 0 20 20" fill="currentColor">
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
                  alt="مشتری در حال اسکن QR کد" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;