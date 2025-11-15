import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      title: 'Чистка лица',
      description: 'Глубокое очищение и оздоровление кожи с профессиональным уходом',
      price: '3 500 ₽',
      duration: '60 мин',
      icon: 'Sparkles',
      popular: false
    },
    {
      title: 'Биоревитализация',
      description: 'Инъекционное увлажнение и восстановление упругости кожи',
      price: '8 000 ₽',
      duration: '45 мин',
      icon: 'Droplets',
      popular: true
    },
    {
      title: 'Контурная пластика губ',
      description: 'Моделирование и увеличение объема губ филлерами',
      price: '12 000 ₽',
      duration: '40 мин',
      icon: 'Heart',
      popular: true
    },
    {
      title: 'Ботулинотерапия',
      description: 'Коррекция мимических морщин для естественного омоложения',
      price: '6 000 ₽',
      duration: '30 мин',
      icon: 'Smile',
      popular: false
    },
    {
      title: 'Мезотерапия лица',
      description: 'Витаминные коктейли для питания и сияния кожи',
      price: '5 500 ₽',
      duration: '40 мин',
      icon: 'Stars',
      popular: false
    },
    {
      title: 'Пилинги',
      description: 'Химические пилинги для обновления и выравнивания тона',
      price: 'от 4 000 ₽',
      duration: '50 мин',
      icon: 'Zap',
      popular: false
    }
  ];

  const timeSlots = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  const reviews = [
    {
      name: 'Алина К.',
      text: 'Марьям — настоящий профессионал! Результат превзошел все ожидания. Кожа сияет, выглядит здоровой.',
      rating: 5,
      service: 'Биоревитализация'
    },
    {
      name: 'Светлана Р.',
      text: 'Очень довольна результатом контурной пластики губ. Естественно и красиво! Спасибо!',
      rating: 5,
      service: 'Контурная пластика'
    },
    {
      name: 'Диана М.',
      text: 'Отличный специалист с золотыми руками. Безболезненно, комфортно, результат виден сразу.',
      rating: 5,
      service: 'Мезотерапия'
    }
  ];

  const handleBooking = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена! 💖',
      description: 'Я свяжусь с вами в ближайшее время для подтверждения записи.',
    });
    setIsBookingOpen(false);
    setSelectedService('');
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-soft/30">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-rose-medium/20 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-deep flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-rose-deep bg-clip-text text-transparent">
                Марьям Космос
              </h1>
              <p className="text-xs text-muted-foreground font-body">Косметолог-эстетист</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 font-body text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О враче</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#booking" className="hover:text-primary transition-colors">Запись</a>
          </nav>
          <Button 
            className="bg-gradient-to-r from-primary to-rose-deep text-white hover:opacity-90 font-body"
            onClick={() => setIsBookingOpen(true)}
          >
            <Icon name="Calendar" size={16} className="mr-2" />
            Записаться
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(343,65%,64%,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(351,100%,90%,0.2)_0%,transparent_50%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-rose-soft text-primary border-primary/20">Казань, Вахитовский район</Badge>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Ваша красота —<br />
                <span className="bg-gradient-to-r from-primary to-rose-deep bg-clip-text text-transparent">
                  моя забота
                </span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                Профессиональная эстетическая косметология с индивидуальным подходом к каждому клиенту. 
                Современные методики и сертифицированные препараты для вашего преображения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-rose-deep text-white hover:opacity-90 font-body text-base px-8"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Записаться на консультацию
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-rose-soft font-body text-base px-8"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Смотреть услуги
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="font-body text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="font-body text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="font-body text-sm text-muted-foreground">безопасность</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/60bfa460-2eaf-4f1e-900a-a48efc855795/files/6b5b7842-771f-4ac5-a24c-5e6bd3d3d17f.jpg" 
                  alt="Марьям Космос - косметолог-эстетист в Казани" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-rose-deep rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-rose-soft to-rose-medium rounded-full blur-3xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4 bg-rose-soft text-primary border-primary/20">Услуги</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Что я предлагаю</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Полный спектр инъекционных и аппаратных процедур для красоты и здоровья вашей кожи
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary/20 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-primary to-rose-deep text-white text-xs font-bold py-1 px-4 text-center">
                    ⭐ Популярно
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-soft to-rose-medium/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading text-2xl">{service.title}</CardTitle>
                  <CardDescription className="font-body text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {service.duration}
                    </span>
                    <span className="font-heading text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-rose-deep text-white hover:opacity-90 font-body"
                    onClick={() => handleBooking(service.title)}
                  >
                    Записаться
                    <Icon name="Calendar" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-rose-soft/30 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/60bfa460-2eaf-4f1e-900a-a48efc855795/files/0540dcb6-8a72-44e9-a8e0-a677c09a1519.jpg" 
                  alt="Кабинет косметолога в Казани" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-white text-primary border-primary/20">О враче</Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Марьям Космос</h2>
              <p className="font-body text-lg text-muted-foreground mb-4 leading-relaxed">
                Я — сертифицированный врач-косметолог с многолетним опытом в эстетической медицине. 
                Моя миссия — помочь каждому клиенту почувствовать себя красивым и уверенным.
              </p>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                Я использую только проверенные методики и сертифицированные препараты, 
                индивидуально подбирая программу для каждого клиента.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur">
                  <div className="w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center flex-shrink-0">
                    <Icon name="GraduationCap" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Образование</h3>
                    <p className="font-body text-sm text-muted-foreground">Высшее медицинское образование, постоянное повышение квалификации</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur">
                  <div className="w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Сертификаты</h3>
                    <p className="font-body text-sm text-muted-foreground">Международные сертификаты по инъекционным методикам и аппаратной косметологии</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur">
                  <div className="w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Подход</h3>
                    <p className="font-body text-sm text-muted-foreground">Индивидуальная работа, естественные результаты, забота о здоровье кожи</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4 bg-rose-soft text-primary border-primary/20">Отзывы</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Мне важно мнение каждого клиента — читайте реальные отзывы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={16} />
                    ))}
                  </div>
                  <CardTitle className="font-heading text-xl">{review.name}</CardTitle>
                  <Badge variant="outline" className="w-fit border-primary/30 text-primary">{review.service}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-rose-soft/50 via-white to-rose-medium/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4 bg-white text-primary border-primary/20">Онлайн-запись</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Запишитесь прямо сейчас</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Выберите удобные дату и время — я жду вас!
            </p>
          </div>
          <Card className="shadow-2xl border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Выберите дату</h3>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-2xl border-2 border-rose-soft"
                    classNames={{
                      months: "space-y-4",
                      month: "space-y-4 w-full",
                      caption: "flex justify-center pt-1 relative items-center font-heading",
                      caption_label: "text-lg font-semibold text-primary",
                      nav: "space-x-1 flex items-center",
                      nav_button: "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-rose-soft rounded-lg transition-all",
                      table: "w-full border-collapse",
                      head_row: "flex w-full",
                      head_cell: "text-muted-foreground rounded-md w-full font-body font-medium text-sm",
                      row: "flex w-full mt-2",
                      cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 font-body w-full",
                      day: "h-12 w-full p-0 font-normal hover:bg-rose-soft rounded-lg transition-colors",
                      day_selected: "bg-gradient-to-r from-primary to-rose-deep text-white hover:opacity-90 font-semibold",
                      day_today: "bg-rose-soft text-primary font-semibold",
                      day_disabled: "text-muted-foreground opacity-30",
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Выберите время</h3>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={selectedTime === time 
                          ? "bg-gradient-to-r from-primary to-rose-deep text-white" 
                          : "border-2 border-rose-soft hover:bg-rose-soft"
                        }
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  {date && selectedTime && (
                    <div className="bg-rose-soft/50 p-4 rounded-2xl mb-6">
                      <p className="font-body text-sm text-muted-foreground mb-1">Выбрано:</p>
                      <p className="font-heading text-lg font-semibold text-primary">
                        {date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} в {selectedTime}
                      </p>
                    </div>
                  )}
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-rose-deep text-white hover:opacity-90 font-body text-lg py-6"
                    onClick={() => setIsBookingOpen(true)}
                    disabled={!date || !selectedTime}
                  >
                    Подтвердить запись
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-primary">Оформление записи</DialogTitle>
            <DialogDescription className="font-body">
              Заполните форму, и я свяжусь с вами для подтверждения
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitBooking} className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-body">Ваше имя *</Label>
              <Input 
                id="name" 
                placeholder="Например, Алина" 
                required 
                className="font-body border-2 focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="font-body">Телефон *</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+7 (900) 000-00-00" 
                required 
                className="font-body border-2 focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="service-select" className="font-body">Услуга</Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="border-2 focus:border-primary">
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.title} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message" className="font-body">Комментарий</Label>
              <Textarea 
                id="message" 
                placeholder="Расскажите о ваших пожеланиях..." 
                className="font-body border-2 focus:border-primary resize-none"
                rows={3}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-rose-deep text-white hover:opacity-90 font-body text-base py-6"
            >
              Отправить заявку
              <Icon name="Send" size={18} className="ml-2" />
            </Button>
            <p className="text-xs text-muted-foreground text-center font-body">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </DialogContent>
      </Dialog>

      <footer className="bg-gradient-to-r from-primary to-rose-deep text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Sparkles" size={20} />
                </div>
                <h3 className="font-heading text-xl font-bold">Марьям Космос</h3>
              </div>
              <p className="font-body text-white/80 text-sm">
                Ваша красота — моя главная цель. Доверьте заботу о вашей коже профессионалу.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 font-body text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Казань, Вахитовский район
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (900) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  maryam@cosmos.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 font-body text-sm">
                <p>Понедельник - Пятница: 10:00 - 20:00</p>
                <p>Суббота: 11:00 - 18:00</p>
                <p>Воскресенье: выходной</p>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center font-body text-sm text-white/70">
            <p>&copy; 2024 Марьям Космос. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;