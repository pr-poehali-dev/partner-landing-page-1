import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-sans text-foreground">
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-beige to-cream">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 shadow-lg border-4 border-sage/20">
            <img 
              src="https://cdn.poehali.dev/files/IMG_5053.jpeg" 
              alt="Ландыш Сиразутдинова"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-sage leading-tight">
            Ландыш Сиразутдинова
          </h1>
          
          <p className="text-2xl md:text-3xl font-heading font-medium text-warmGray">
            Партнёр компании LR
          </p>
          
          <p className="text-xl md:text-2xl text-warmGray/90 max-w-2xl mx-auto leading-relaxed">
            Помогаю людям заботиться о здоровье и выстраивать доход
          </p>
          
          <p className="text-lg text-warmGray/80 max-w-xl mx-auto">
            Я здесь, чтобы вдохновлять, делиться пользой и показывать, что бизнес может быть честным и любимым
          </p>
          
          <Button 
            size="lg" 
            className="mt-8 bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Познакомиться ближе
          </Button>
        </div>
      </section>

      <section id="story" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-sage text-center mb-12">
            Моя история
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none space-y-6 text-warmGray/90 leading-relaxed">
              <p>
                Моё знакомство с LR началось не с бизнеса, а с семьи.
              </p>
              
              <p>
                У моего племянника внезапно появилась сильная крапивница, и мы долго не могли понять причину.
              </p>
              
              <p>
                После рекомендаций продукции LR — геля Алоэ Персик и минералов Pro Balance — и грамотной дозировки, он полностью восстановился.
              </p>
              
              <p className="text-sage font-medium text-xl">
                Так LR стала частью нашей семьи, а позже — делом, в которое я по-настоящему поверила.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/e9932cb1-2e18-4a8a-a49e-975b44e29fbe.jpeg"
                alt="До и после использования продукции LR"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-beige">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-sage text-center mb-16">
            Результаты наших клиентов
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img 
                src="https://cdn.poehali.dev/files/d8a13519-00eb-4878-8c98-8192d64dac24.jpeg"
                alt="Результат 2-3 дня"
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img 
                src="https://cdn.poehali.dev/files/294bc522-ede0-41db-939f-d4dd660369f6.jpeg"
                alt="Результаты клиентов до и после"
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img 
                src="https://cdn.poehali.dev/files/575775a3-9f68-4148-8592-f1858069e3bf.jpeg"
                alt="Результаты клиентов до и после"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="p-8 bg-white border-none shadow-sm hover:shadow-md transition-shadow animate-scale-in">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Heart" size={32} className="text-sage flex-shrink-0" />
                <h3 className="font-heading text-2xl font-semibold text-sage">
                  Результаты семьи
                </h3>
              </div>
              <ul className="space-y-3 text-warmGray/90">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-sage flex-shrink-0 mt-1" />
                  <span>Восстановление ребёнка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-sage flex-shrink-0 mt-1" />
                  <span>Регулярное использование продукции всей семьёй</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-none shadow-sm hover:shadow-md transition-shadow animate-scale-in">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="TrendingUp" size={32} className="text-sage flex-shrink-0" />
                <h3 className="font-heading text-2xl font-semibold text-sage">
                  Результаты сестры
                </h3>
              </div>
              <ul className="space-y-3 text-warmGray/90">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-sage flex-shrink-0 mt-1" />
                  <span>За 1 год в LR — доход 170 000 ₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-sage flex-shrink-0 mt-1" />
                  <span>Лидер организации, рост без остановки</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-sage text-center mb-16">
            Знакомство с продукцией LR
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 bg-beige/30 border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center mb-4 p-4">
                <img 
                  src="https://cdn.poehali.dev/projects/2bb33266-636d-437a-9cab-ecc537401455/files/24cab2fd-35bf-4f99-a48c-71b35498ae1e.jpg"
                  alt="Алоэ Вера Гель Персик"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-sage text-center mb-2">
                Алоэ Вера Гель Персик
              </h3>
              <p className="text-sm text-warmGray/80 text-center">
                Для очищения организма и укрепления иммунитета
              </p>
            </Card>

            <Card className="p-6 bg-beige/30 border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center mb-4 p-4">
                <img 
                  src="https://cdn.poehali.dev/projects/2bb33266-636d-437a-9cab-ecc537401455/files/b511b3cb-d843-4a4b-9123-bd97dc298cf2.jpg"
                  alt="Pro Balance"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-sage text-center mb-2">
                Pro Balance
              </h3>
              <p className="text-sm text-warmGray/80 text-center">
                Минеральный комплекс для баланса организма
              </p>
            </Card>

            <Card className="p-6 bg-beige/30 border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center mb-4 p-4">
                <img 
                  src="https://cdn.poehali.dev/projects/2bb33266-636d-437a-9cab-ecc537401455/files/7a44ca02-bf5b-42c1-b0b2-adfe822a5b88.jpg"
                  alt="Pro 12"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-sage text-center mb-2">
                Pro 12
              </h3>
              <p className="text-sm text-warmGray/80 text-center">
                12 штаммов пробиотиков для здоровья ЖКТ
              </p>
            </Card>

            <Card className="p-6 bg-beige/30 border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center mb-4 p-4">
                <img 
                  src="https://cdn.poehali.dev/projects/2bb33266-636d-437a-9cab-ecc537401455/files/f4b60c0f-5162-4be2-b327-ba3df52987eb.jpg"
                  alt="Mind Master"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-sage text-center mb-2">
                Mind Master
              </h3>
              <p className="text-sm text-warmGray/80 text-center">
                Для концентрации внимания и работы мозга
              </p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 bg-beige/30 border-none">
              <h3 className="font-heading text-xl font-semibold text-sage mb-4">
                Я сама регулярно использую продукцию LR:
              </h3>
              <ul className="space-y-3 text-warmGray/90">
                <li className="flex items-start gap-2">
                  <span className="text-sage">•</span>
                  <span>Гели — курсами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage">•</span>
                  <span>Гриб Рейши и Pro 12 — курсами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage">•</span>
                  <span>Omega и Pro Balance — ежедневно</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-sage/5 border-none">
              <h3 className="font-heading text-xl font-semibold text-sage mb-4">
                Результаты:
              </h3>
              <ul className="space-y-3 text-warmGray/90">
                <li className="flex items-start gap-2">
                  <Icon name="Sparkles" size={20} className="text-sage flex-shrink-0 mt-1" />
                  <span>Активный рост волос</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Sparkles" size={20} className="text-sage flex-shrink-0 mt-1" />
                  <span>Нормализация цикла</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Sparkles" size={20} className="text-sage flex-shrink-0 mt-1" />
                  <span>Решение проблемы с циститом</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Sparkles" size={20} className="text-sage flex-shrink-0 mt-1" />
                  <span>Отличные анализы</span>
                </li>
              </ul>
            </Card>

            <p className="text-center text-xl text-sage font-medium italic mt-8">
              Это тот случай, когда продукт не стыдно рекомендовать — потому что ты живёшь в этом сам.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-beige">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-sage text-center mb-16">
            Почему LR — это больше, чем продукт
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white border-none text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Award" size={40} className="text-sage mx-auto mb-4" />
              <p className="text-warmGray/90 leading-relaxed">
                Немецкое качество и педантичный подход
              </p>
            </Card>

            <Card className="p-6 bg-white border-none text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Calendar" size={40} className="text-sage mx-auto mb-4" />
              <p className="text-warmGray/90 leading-relaxed">
                40 лет на рынке, 15 лет в России
              </p>
            </Card>

            <Card className="p-6 bg-white border-none text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="TrendingUp" size={40} className="text-sage mx-auto mb-4" />
              <p className="text-warmGray/90 leading-relaxed">
                2-е место в России по товарообороту в 2026 году
              </p>
            </Card>

            <Card className="p-6 bg-white border-none text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Wallet" size={40} className="text-sage mx-auto mb-4" />
              <p className="text-warmGray/90 leading-relaxed">
                Возможность не только пользоваться, но и зарабатывать
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-heading text-4xl font-bold text-sage text-center mb-12">
            Бизнес и возможности
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-warmGray/90 leading-relaxed">
            <p className="text-xl">
              В LR я не просто за продукт, я за бизнес и рост.
            </p>
            <p className="text-xl">
              Здесь можно зарабатывать честно, экологично и с поддержкой команды.
            </p>
          </div>

          <Card className="p-8 bg-sage/5 border-2 border-sage/20 mt-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Car" size={40} className="text-sage flex-shrink-0" />
              <h3 className="font-heading text-2xl font-semibold text-sage">
                Авто-программа LR
              </h3>
            </div>
            
            <ul className="space-y-4 text-warmGray/90 text-lg">
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-sage flex-shrink-0 mt-1" />
                <span>Компания предоставляет автомобиль</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-sage flex-shrink-0 mt-1" />
                <span>Полное обслуживание за счёт компании</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-sage flex-shrink-0 mt-1" />
                <span>Вы платите только за бензин</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={24} className="text-sage flex-shrink-0 mt-1" />
                <span>Бонус за брендирование авто: 20 000 – 40 000 ₽ в месяц</span>
              </li>
            </ul>

            <p className="text-sage font-medium text-xl italic mt-6 text-center">
              Это кажется нереальным, пока не увидишь это вживую.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6 bg-beige">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-sage text-center mb-12">
            Как стать партнёром
          </h2>
          
          <Card className="p-8 bg-white border-none shadow-sm">
            <p className="text-xl text-warmGray/90 mb-6">
              Чтобы стать партнёром LR, нужно:
            </p>
            
            <ol className="space-y-4 text-lg text-warmGray/90">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center font-semibold">
                  1
                </span>
                <span>Зарегистрироваться по моей реферальной ссылке</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center font-semibold">
                  2
                </span>
                <span>Сделать первый заказ от 7 000 ₽</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center font-semibold">
                  3
                </span>
                <span>Или начать со стартового набора — это выгоднее, чем покупать продукты по отдельности</span>
              </li>
            </ol>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6 bg-sage text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl font-bold mb-8">
            Готовы начать?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-xl">
              Если ты хочешь:
            </p>
            
            <ul className="space-y-3 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-2">
                <span>–</span>
                <span>продукт, за который не стыдно</span>
              </li>
              <li className="flex items-start gap-2">
                <span>–</span>
                <span>доход с перспективой</span>
              </li>
              <li className="flex items-start gap-2">
                <span>–</span>
                <span>команду и поддержку</span>
              </li>
              <li className="flex items-start gap-2">
                <span>–</span>
                <span>и дело, от которого горят глаза</span>
              </li>
            </ul>

            <p className="text-2xl font-heading font-semibold mt-8">
              Напиши мне в Telegram:<br />
              «Хочу в команду Ландыш»
            </p>

            <p className="text-lg opacity-90">
              Я лично проведу с тобой созвон и расскажу, подойдёт ли тебе этот путь.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="bg-white text-sage hover:bg-white/90 px-8 py-6 text-lg rounded-full font-semibold"
              onClick={() => window.open('https://telegram.me/', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-semibold"
              onClick={() => window.open('#', '_blank')}
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-warmGray/10 text-center text-warmGray/70">
        <p className="text-sm">
          © 2026 Ландыш Сиразутдинова • Партнёр LR
        </p>
      </footer>
    </div>
  );
};

export default Index;