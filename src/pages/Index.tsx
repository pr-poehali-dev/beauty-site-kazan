import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      title: 'Биоревитализация',
      description: 'Глубокое увлажнение и восстановление кожи с помощью инъекций гиалуроновой кислоты',
      price: 'от 8 000 ₽',
      icon: 'Droplets'
    },
    {
      title: 'Контурная пластика',
      description: 'Коррекция объемов лица, моделирование контуров и устранение возрастных изменений',
      price: 'от 15 000 ₽',
      icon: 'Heart'
    },
    {
      title: 'Ботулинотерапия',
      description: 'Коррекция мимических морщин для естественного омоложения лица',
      price: 'от 6 000 ₽',
      icon: 'Sparkles'
    },
    {
      title: 'Мезотерапия',
      description: 'Питание и омоложение кожи витаминными коктейлями',
      price: 'от 5 000 ₽',
      icon: 'Smile'
    },
    {
      title: 'Пилинги',
      description: 'Химические пилинги для обновления и выравнивания тона кожи',
      price: 'от 4 000 ₽',
      icon: 'Stars'
    },
    {
      title: 'Плазмотерапия',
      description: 'Лечение и омоложение с использованием собственной плазмы крови',
      price: 'от 7 000 ₽',
      icon: 'Zap'
    }
  ];

  const handleBooking = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения записи.',
    });
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-emerald text-cream py-6 px-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-wide">
            Эстетическая медицина
          </h1>
          <nav className="hidden md:flex gap-8 font-body text-sm">
            <a href="#services" className="hover:text-gold transition-colors">Услуги</a>
            <a href="#about" className="hover:text-gold transition-colors">О враче</a>
            <a href="#booking" className="hover:text-gold transition-colors">Запись</a>
          </nav>
        </div>
      </header>

      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-gold/5"></div>
        <div className="container mx-auto relative z-10 text-center animate-fade-in">
          <h2 className="font-heading text-5xl md:text-7xl font-light mb-6 text-emerald">
            Красота и здоровье<br />вашей кожи
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональная эстетическая медицина в Казани.<br />
            Индивидуальный подход и безопасные методики.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-foreground font-body font-medium px-8 py-6 text-lg"
              onClick={() => setIsBookingOpen(true)}
            >
              Записаться на консультацию
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-emerald text-emerald hover:bg-emerald hover:text-cream font-body font-medium px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-4 text-emerald">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-body">
            Полный спектр инъекционных процедур для вашей красоты
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-gold/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon name={service.icon} className="text-gold" size={24} />
                  </div>
                  <CardTitle className="font-heading text-2xl text-emerald">{service.title}</CardTitle>
                  <CardDescription className="font-body">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-semibold text-gold text-lg">{service.price}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-emerald text-emerald hover:bg-emerald hover:text-cream font-body"
                      onClick={() => handleBooking(service.title)}
                    >
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-emerald/5 to-gold/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-emerald">О враче</h2>
              <p className="font-body text-lg mb-4 text-muted-foreground leading-relaxed">
                Я — врач-косметолог с многолетним опытом работы в сфере эстетической медицины.
              </p>
              <p className="font-body text-lg mb-4 text-muted-foreground leading-relaxed">
                Моя философия — естественная красота и здоровье кожи. Я использую только сертифицированные препараты и современные протоколы лечения.
              </p>
              <div className="space-y-3 mt-8">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" className="text-gold mt-1" size={20} />
                  <p className="font-body">Высшее медицинское образование</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-gold mt-1" size={20} />
                  <p className="font-body">Сертифицированный специалист по инъекционным методикам</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-gold mt-1" size={20} />
                  <p className="font-body">Более 1000 довольных пациентов</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square rounded-lg shadow-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/60bfa460-2eaf-4f1e-900a-a48efc855795/files/aa5f0531-a690-4d8d-a077-c7bab8c3cc8f.jpg" 
                  alt="Врач косметолог-эстетист" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-4 text-emerald">Запись на приём</h2>
          <p className="text-center text-muted-foreground mb-12 font-body">
            Выберите удобную дату для консультации
          </p>
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
            <div className="flex-1 w-full flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border shadow-lg bg-card"
                classNames={{
                  months: "space-y-4",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center font-heading",
                  caption_label: "text-lg font-medium text-emerald",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-gold/10 rounded",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-muted-foreground rounded-md w-12 font-body font-normal text-sm",
                  row: "flex w-full mt-2",
                  cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 font-body",
                  day: "h-12 w-12 p-0 font-normal hover:bg-gold/20 rounded-md transition-colors",
                  day_selected: "bg-emerald text-cream hover:bg-emerald hover:text-cream focus:bg-emerald focus:text-cream",
                  day_today: "bg-gold/10 text-foreground font-semibold",
                }}
              />
            </div>
            <div className="flex-1 w-full">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-emerald">Забронировать время</CardTitle>
                  <CardDescription className="font-body">
                    {date ? `Выбрана дата: ${date.toLocaleDateString('ru-RU')}` : 'Выберите дату в календаре'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitBooking} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="font-body">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" required className="font-body" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-body">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" required className="font-body" />
                    </div>
                    <div>
                      <Label htmlFor="service" className="font-body">Услуга</Label>
                      <Input id="service" placeholder="Выберите услугу" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="font-body" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="font-body">Комментарий</Label>
                      <Textarea id="message" placeholder="Дополнительная информация" className="font-body" />
                    </div>
                    <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-foreground font-body font-medium">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-emerald">Запись на процедуру</DialogTitle>
            <DialogDescription className="font-body">
              {selectedService && `Услуга: ${selectedService}`}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitBooking} className="space-y-4">
            <div>
              <Label htmlFor="dialog-name" className="font-body">Имя</Label>
              <Input id="dialog-name" placeholder="Ваше имя" required className="font-body" />
            </div>
            <div>
              <Label htmlFor="dialog-phone" className="font-body">Телефон</Label>
              <Input id="dialog-phone" type="tel" placeholder="+7 (900) 000-00-00" required className="font-body" />
            </div>
            <div>
              <Label htmlFor="dialog-message" className="font-body">Комментарий</Label>
              <Textarea id="dialog-message" placeholder="Дополнительная информация" className="font-body" />
            </div>
            <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-foreground font-body font-medium">
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <footer className="bg-emerald text-cream py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl mb-4">Контакты</h3>
              <div className="space-y-2 font-body">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Казань
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (900) 000-00-00
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@example.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-4">Режим работы</h3>
              <div className="space-y-2 font-body">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб: 11:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/30 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/30 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-8 pt-8 text-center font-body text-sm">
            <p>&copy; 2024 Эстетическая медицина. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;