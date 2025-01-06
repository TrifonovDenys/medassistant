import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (<footer className="container px-4 pt-[4.5rem] xl:pt-[7rem] lg:pt-[7rem] md:pt-[7rem] pb-[1.75rem]">
        <div className="flex flex-wrap justify-between mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div className="widget">
                    <Image className="!mb-4" src="/images/logo.png" alt="image" width={200} height={200}/>
                    <h2 className="h2 !mb-[.75rem] xl:text-[1.3rem] text-[calc(1.255rem_+_0.06vw)] !leading-[1.35]">
                        Вступити в Асоціацію
                    </h2>
                    <p className="lead !text-[0.9rem] leading-[1.65] font-medium mb-5">
                        Об&#39єднані досвідом, спрямовані на майбутнє. Медицина рухається вперед разом з нами!
                    </p>
                    {/* <Button as-child variant="secondary">
                        <a href="https://medaccount.com.ua/membership">Приєднатися!</a>
                    </Button> */}
                </div>

            </div>
            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] px-[15px] max-w-full  mt-[30px] xl:mt-0 lg:mt-0">
                <div className="widget">
                    <h3 className="widget-title !mb-3 !tracking-[-0.03em]">
                        Потрібна допомога?
                    </h3>
                    <ul className="pl-0 list-none !mb-0">
                        <li>
                            <Link className="text-[#60697b] hover:text-primary" href="/privacy">
                                Політика конфіденційності
                            </Link>
                        </li>
                        <li className="mt-[0.35rem]">
                            <a className="text-[#60697b] hover:text-primary" target="_blank" href="https://drive.google.com/file/d/1VxyXBZghdt_OVyZpr1Am9anOmqoyVrmL/view?usp=sharing">Статут</a>
                        </li>
                        <li className="mt-[0.35rem]">
                            <a className="text-[#60697b] hover:text-primary" target="_blank" href="https://medaccount.com.ua/membership">Вступити в асоціацію</a>
                        </li>
                        <li className="mt-[0.35rem]">
                            <a className="text-[#60697b] hover:text-primary" target="_blank" href="https://medaccount.com.ua">MedAccount</a>
                        </li>
                    </ul>
                    <div className="!mt-4 flex flex-row flex-wrap gap-4">
                        <a href="https://drive.google.com/file/d/1UZOjNgzFPw5ir72fQ2L3ktxfbhGrFTDs/view?usp=sharing" target="_blank" className="flex flex-col justify-center hover:underline">
                            <Image className="h-12 object-contain" src="/images/partners/logo-absolyut-ukr.png" alt="image" width={200} height={200}/>
                            <h3 className="h2 !mb-[.75rem] text-xs !leading-[1.35]">
                                Юридичний висновок
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] xl:mt-0 lg:mt-0">
                <div className="widget">
                    <h3 className="widget-title !mb-3 !tracking-[-0.03em]">
                        Дізнайтеся більше
                    </h3>
                    <ul className="pl-0 list-none !mb-0">
                        <li>
                            <Link className="text-[#60697b] hover:text-primary" href="/about">
                                Про нас
                            </Link>
                        </li>
                        <li className="mt-[0.35rem]">
                            <Link className="text-[#60697b] hover:text-primary" href="/info/charity">
                                Благодійність
                            </Link>
                        </li>
                        <li className="mt-[0.35rem]">
                            <Link className="text-[#60697b] hover:text-primary" href="/news">
                                Новини асоціації
                            </Link>
                        </li>
                        <li className="mt-[0.35rem]">
                            <Link className="text-[#60697b] hover:text-primary" href="/events">
                                Заходи
                            </Link>
                        </li>
                        <li className="mt-[0.35rem]">
                            <Link className="text-[#60697b] hover:text-primary" href="/info/partners">
                                Партнери
                            </Link>
                        </li>
                    </ul>
                    <div className="!mt-4 flex flex-row flex-wrap gap-4">
                        <a href="https://drive.google.com/file/d/1OL6YBM-REUDNUzTCbZG_J8WtEFKzhPM5/view?usp=sharing" target="_blank" className="flex flex-col justify-center hover:underline">
                            <Image className="h-12 object-contain" src="/images/partners/logo-bakertilly.png" alt="image" width={200} height={200}/>
                            <h3 className="h2 !mb-[.75rem] text-xs !leading-[1.35]">
                                Висновок міжнародного аудиту
                            </h3>
                        </a>
                    </div>
                </div>

            </div>

            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] xl:mt-0 lg:mt-0">
                <div className="widget">
                    <h3 className="widget-title !mb-3 !tracking-[-0.03em]">
                        Зв&#39яжіться з нами
                    </h3>
                    <address className="xl:pr-20 xxl:!pr-28 not-italic leading-[inherit] mb-4">
                        м. Дніпро, вулиця Панікахи 2А
                    </address>
                    <div className="flex flex-col gap-1">
                        <a href="mailto:office@aam.com.ua" className="inline-flex gap-x-1 items-center hover:text-primary">
                            {/* <Icon name="uil-envelope-alt" className="block md:hidden" />office@aam.com.ua */}
                        </a>
                        <a href="mailto:amb.medicine@gmail.com" className="inline-flex gap-x-1 items-center hover:text-primary">
                            {/* <Icon name="uil-envelope-alt" className="block md:hidden" />amb.medicine@gmail.com */}
                        </a>
                        <a href="mailto:fundaam@aam.com.ua" className="inline-flex gap-x-1 items-center hover:text-primary">
                            {/* <Icon name="uil-envelope-alt" className="block md:hidden" /> fundaam@aam.com.ua */}
                        </a>
                        <a href="tel:+380508412859" className="inline-flex gap-x-1 items-center hover:text-primary">
                            {/* <Icon name="uil-phone" className="block md:hidden" /> +38 050 841 28 59 */}
                        </a>
                    </div>
                </div>
            </div>

        </div>

        <hr className="xl:!mt-10 lg:!mt-10 md:!mt-10 my-7"/>
        <div className="xl:flex lg:flex md:flex items-center justify-between">
            <p className="mb-2 xl:!mb-0 lg:!mb-0">
                © { new Date().getFullYear() } Асоціація Амбулаторної Медицини. Всі права захищені.
            </p>
            <nav className="nav social   xl:!text-right lg:!text-right md:!text-right">
                <a className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-200 ease-in-out translate-y-0 hover:translate-y-[-0.15rem]" href="https://invite.viber.com/?g2=AQBUPJYK3tGH6ExIisfZsdoLF3aNEA3wdycTg92ak3GF8h9DUGNT1io3tvH4rSOP">
                    <span className="sr-only">Viber</span>
          {/* <Icon name="cib:viber" className="text-[1rem] text-[#8f34f7]" /> */}
        </a>
        <a className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-200 ease-in-out translate-y-0 hover:translate-y-[-0.15rem]" href="https://invite.viber.com/?g2=AQBF9bofYyI8uU5LZwLFM27RHwIiEMrPb%2Fp64rmUfYdkAwO%2BcNJD8Y1X%2B5e9%2Fi8X"><span className="sr-only">Viber</span>
          {/* <Icon name="cib:viber" className="text-[1rem] text-[#8f34f7]" /> */}
        </a>
        <a className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-200 ease-in-out translate-y-0 hover:translate-y-[-0.15rem]" href="https://www.facebook.com/ambulatory.medicine/"><span className="sr-only">Facebook</span>
          {/* <Icon name="cib-facebook" className="text-[1rem] text-[#4470cf]" /> */}
        </a>
        <a className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-200 ease-in-out translate-y-0 hover:translate-y-[-0.15rem]" href="https://www.youtube.com/@user-kb9ls2pd6b"><span className="sr-only">Youtube</span>
          {/* <Icon name="uil-youtube" className="text-[1rem] text-[#c8312b]" /> */}
        </a>
        <a className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-200 ease-in-out translate-y-0 hover:translate-y-[-0.15rem]" href="https://www.youtube.com/channel/UCD7STJqRgZbXm5oLANSZ1Vw"><span className="sr-only">Youtube</span>
          {/* <Icon name="uil-youtube" className="text-[1rem] text-[#c8312b]" /> */}
        </a>
        <a className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-200 ease-in-out translate-y-0 hover:translate-y-[-0.15rem]" href="https://www.instagram.com/aam.com.ua/"><span className="sr-only">Instagram</span>
          {/* <Icon name="uil-instagram" className="text-[1rem] text-[#d53581]" /> */}
        </a>
            </nav>

        </div>

    </footer>)
}

export default Footer;