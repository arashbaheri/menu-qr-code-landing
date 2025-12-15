import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">منوی دیجیتال</a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">ویژگی‌ها</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">تعرفه‌ها</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">تماس با ما</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">ورود</Button>
            <Button>شروع رایگان</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>ویژگی‌ها</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>تعرفه‌ها</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>تماس با ما</a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline">ورود</Button>
                <Button>شروع رایگان</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;