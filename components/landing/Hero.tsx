import { Button } from '@heroui/react';
import { title, subtitle } from '@/components/primitives';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
const Hero = () => {
  return (
    <div className='relative py-24 md:py-36 ml-auto'>
      <div className='text-center mx-auto'>
        <h1 className={title({ color: 'violet', size: 'xl' })}>Медасистент</h1>
        <p className={subtitle({ class: 'mt-4 md:px-40 px-2' })}>
          є технічним співроганізатором Асоціації Лікарів Амбулаторної Медицини та організовує науково-практичні заходи з метою підвищення
          кваліфікації та розвитку медичних фахівців.
        </p>
        <p className={subtitle({ class: 'md:px-40 px-2' })}>
          Наша спільна ініціатива включає в себе організацію широкого спектру науково-практичних заходів, які охоплюють різноманітні тематики та
          спеціальності в області медицини. В рамках цих заходів, які ми разом втілюємо, тисячі лікарів з усієї України мають можливість активно брати
          участь у дискусіях, обмінюватися досвідом та вивчати новітні досягнення у своїй галузі.
        </p>
        <div className='mt-8 flex flex-wrap justify-center gap-3'>

          <Button color="secondary" variant="shadow" radius="full">
            Відео-матеріали
          </Button>
          <Button color="secondary" variant="solid" radius="full">
            Спікери
          </Button>
          <Button color="secondary" variant="faded" radius="full">
            Переглянути Заходи
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
