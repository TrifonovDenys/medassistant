import { Link } from "@nextui-org/link"
import { Image } from "./ui/image"
import img from '@/public/speakers/Чередниченко-Наталья-Валериевна-scaled.jpg'
import { subtitle, title } from "@/components/primitives"
import { cn } from "@/lib/utils"
import { button as buttonStyles } from "@nextui-org/theme";
const SpeakerCard = () => {
  return (
    // <div className="md:w-5/12 lg:w-5/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] xl:mt-0 lg:mt-0">
    //   <Image src={img.src} height={200} alt='img' />
    //   <p className={cn(title({ size: 'sm' }), 'mt-4')}>Чередніченко Наталія Валеріївна</p>
    //   <p className={cn(subtitle())}>Психіатр</p>
    //   <Link>Детальніше</Link>
    // </div>

    (<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={img.src} height={200} alt='img' />
      <div className="p-5">
        <h5 className={cn(title({ size: 'sm' }), "mb-2 text-2xl font-bold tracking-tight ")}>Чередніченко Наталія Валеріївна</h5>
        <p className={cn(subtitle(), "mb-3 font-normal")}>Психіатр</p>
        <Link href="#" className={buttonStyles({ color: 'secondary', variant: 'solid', radius: 'full' })}>
          Детальніше
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>)
  );
}

export default SpeakerCard