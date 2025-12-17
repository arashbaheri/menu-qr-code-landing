import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'منوی پایه',
    description: 'مناسب برای شروع کار با منوی دیجیتال',
    monthlyPrice: '۴۶۰,۰۰۰',
    features: [
      'دسترسی از طریق QRcode',
      'امکان درج و ویرایش اطلاعات و قیمت‌ها',
      'ارائه فایل QRcode جهت چاپ',
      'امکان درج لوگو کسب و کار',
      'ارائه پنل مدیریت محصولات و تصاویر',
      'آموزش اولیه کار با پنل',
      'امکان درج آدرس شبکه‌های اجتماعی',
      'امکان درج آدرس و شماره تماس',
    ],
    highlighted: false,
  },
  {
    name: 'منوی پیشرفته',
    description: 'ایده‌آل برای رستوران‌های فعال',
    monthlyPrice: '۷۳۰,۰۰۰',
    features: [
      'تمامی قابلیت‌های منوی پایه',
      'امکان ثبت سفارش آنلاین',
      'پرینت فاکتور مشتری',
      'فراخوان گارسون',
      'چاپ QRcode برای هر میز',
      'سفارش‌گیر گارسون',
      'اطلاع از بازدید صفحه رستوران شما',
      'طراحی منو نسبت به کانسپت مجموعه',
    ],
    highlighted: true,
  },
  {
    name: 'منوی حرفه‌ای',
    description: 'برای کسب‌وکارهای حرفه‌ای و زنجیره‌ای',
    monthlyPrice: '۹۸۰,۰۰۰',
    features: [
      'تمامی قابلیت‌های منوی پیشرفته',
      'دامنه اختصاصی با نام کسب و کار',
      'تخمین سود با هوش مصنوعی',
      'امکان تعریف انواع تخفیفات',
      'امکان اتصال به درگاه پرداخت اختصاصی',
      'نظرسنجی هوشمند',
      'باشگاه مشتریان',
      'امکان چاپ کارت هدیه و تخفیف',
    ],
    highlighted: false,
  },
];

const PricingPlans = () => {
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
                    {plan.monthlyPrice}
                    <span className="text-base font-normal text-muted-foreground"> تومان/ماه</span>
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