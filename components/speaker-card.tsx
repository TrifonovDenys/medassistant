import { Link } from "@nextui-org/link"
import { Image } from "./ui/image"
import img from '@/public/speakers/Чередниченко-Наталья-Валериевна-scaled.jpg'
import { subtitle, title } from "@/components/primitives"
import { cn } from "@/lib/utils"

const SpeakerCard = () => {
  return (
    <div className="md:w-5/12 lg:w-5/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] xl:mt-0 lg:mt-0">
      <Image src={img.src} height={200} alt='img' />
      <p className={cn(title({ size: 'sm' }), 'mt-4')}>Чередніченко Наталія Валеріївна</p>
      <p className={cn(subtitle())}>Психіатр</p>
      <Link>Детальніше</Link>
    </div>
  )
}

export default SpeakerCard