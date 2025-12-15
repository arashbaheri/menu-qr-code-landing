import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const pricingPlans = [
  {
    name: 'پایه',
    description: 'مناسب برای کافه‌ها و فودتراک‌های کوچک',
    monthlyPrice: '۲۹۰,۰۰۰',
    yearlyPrice: '۲,۹۰۰,۰۰۰',
    features: [
      'تولید QR کد نامحدود',
      'سفارشی‌سازی منوی پایه',
      'آپلود عکس منو (تا ۲۵ عکس)',
      'پشتیبانی ایمیلی',
      'به‌روزرسانی منظم منو',
    ],
    highlighted: false,
  },
  {
    name: 'حرفه‌ای',
    description: 'ایده‌آل برای رستوران‌های معتبر',
    monthlyPrice: '۷۹۰,۰۰۰',
    yearlyPrice: '۷,۹۰۰,۰۰۰',
    features: [
      'همه امکانات پایه، به‌علاوه:',
      'سفارشی‌سازی پیشرفته منو',
      'آپلود عکس نامحدود',
      'دسته‌بندی و فیلتر منو',
      'داشبورد تحلیلی',
      'پشتیبانی اولویت‌دار',
      'غذاهای ویژه روزانه',
    ],
    highlighted: true,
  },
  {
    name: 'سازمانی',
    description: 'برای گروه‌ها و زنجیره‌های رستورانی',
    monthlyPrice: '۱,۹۹۰,۰۰۰',
    yearlyPrice: '۱۹,۹۰۰,۰۰۰',
    features: [
      'همه امکانات حرفه‌ای، به‌علاوه:',
      'مدیریت چند شعبه',
      'QR کدهای برندینگ شده',
      'دسترسی API',
      'پشتیبانی چندزبانه',
      'مدیر حساب اختصاصی',
      'یکپارچه‌سازی سفارشی',
    ],
    highlighted: false,
  },
];

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تعرفه‌های ساده و شفاف
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            پلنی را انتخاب کنید که با نیازهای رستوران شما مطابقت دارد، بدون هزینه‌های پنهان.
          </p>
          <div className="flex items-center justify-center mt-8 gap-3">
            <span className={`${!isYearly ? 'font-semibold text-primary' : 'text-muted-foreground'}`}>ماهانه</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`${isYearly ? 'font-semibold text-primary' : 'text-muted-foreground'}`}>سالانه <span className="text-sm text-green-600">(۲۰٪ تخفیف)</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.highlighted ? 'border-primary shadow-lg shadow-primary/10' : 'border-border shadow-sm'} animate-slide-up relative`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  محبوب‌ترین
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <p className="text-4xl font-bold">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-base font-normal text-muted-foreground"> تومان/{isYearly ? 'سال' : 'ماه'}</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-6 w-6 text-primary ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  انتخاب {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            مطمئن نیستید کدام پلن برای شما مناسب است؟ با ما تماس بگیرید.
          </p>
          <Button variant="link" className="text-primary">
            تماس با فروش
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;