import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Mail, User, Package } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "پیام ارسال شد!",
        description: "در اسرع وقت با شما تماس خواهیم گرفت.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "خطایی رخ داد",
        description: "لطفاً بعداً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تماس با ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            سوالی درباره راه‌حل‌های منوی QR دارید؟ ما اینجا هستیم تا به شما کمک کنیم بهترین گزینه را برای رستوران خود پیدا کنید.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="h-5 w-5 text-muted-foreground absolute right-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="نام شما"
                        className="pr-10"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail className="h-5 w-5 text-muted-foreground absolute right-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="ایمیل شما"
                        className="pr-10"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="relative">
                      <Package className="h-5 w-5 text-muted-foreground absolute right-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="text"
                        name="company"
                        placeholder="نام رستوران"
                        className="pr-10"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Textarea
                      name="message"
                      placeholder="چگونه می‌توانیم به شما کمک کنیم؟"
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    ظرف ۲۴ ساعت با شما تماس خواهیم گرفت.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-secondary to-primary/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">چرا منوی دیجیتال؟</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center ml-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">مورد اعتماد پیشروان صنعت</h4>
                    <p className="text-muted-foreground">به هزاران رستورانی بپیوندید که از راه‌حل‌های ما استفاده می‌کنند.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center ml-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">راه‌اندازی سریع</h4>
                    <p className="text-muted-foreground">منوی دیجیتال خود را در چند دقیقه راه‌اندازی کنید، نه چند روز یا هفته.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center ml-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">پشتیبانی اختصاصی</h4>
                    <p className="text-muted-foreground">تیم ما همیشه آماده کمک به هر سوالی است.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;