import { button as buttonStyles } from '@nextui-org/theme';
import Link from 'next/link';
import { title, subtitle } from '@/components/primitives';
const Hero = () => {
  return (
    <div className='relative py-24 md:py-36 ml-auto'>
      <div className='text-center mx-auto'>
        <h1 className={title({ color: 'violet', size: 'lg' })}>Медасистент</h1>
        <p className={subtitle({ class: 'mt-4' })}>
          є технічним співроганізатором Асоціації Лікарів Амбулаторної Медицини та організовує науково-практичні заходи з метою підвищення
          кваліфікації та розвитку медичних фахівців.
        </p>
        <p className={subtitle()}>
          Наша спільна ініціатива включає в себе організацію широкого спектру науково-практичних заходів, які охоплюють різноманітні тематики та
          спеціальності в області медицини. В рамках цих заходів, які ми разом втілюємо, тисячі лікарів з усієї України мають можливість активно брати
          участь у дискусіях, обмінюватися досвідом та вивчати новітні досягнення у своїй галузі.
        </p>
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          <Link href='/events' className={buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow' })}>
            Відео-матеріали
          </Link>

          <Link href='/news' className={buttonStyles({ color: 'primary', variant: 'solid', radius: 'full' })}>
            Спікери
          </Link>

          <Link href='/events' className={buttonStyles({ color: 'primary', variant: 'flat', radius: 'full' })}>
            Переглянути Заходи
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
