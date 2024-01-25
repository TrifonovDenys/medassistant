
import Link from 'next/link';
import { Divider } from "@nextui-org/divider";
import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer className='rounded-lg shadow m-4 dark:bg-gray-800'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2024{' '}
          <Link href='/' className='hover:underline'>
            Школа пацієнта «МедАсистент».
          </Link>
          Всі права захищені.
        </span>


        <ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.footerLinks.map((item) => (
            <li key={item.href}><Link href={item.href} className='me-4 md:me-6'>
              {item.label}
            </Link></li>
					))}
        </ul>
        </div>
    </footer>
  );
};

export default Footer;
