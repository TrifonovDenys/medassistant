import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import { TwitterIcon, GithubIcon, DiscordIcon, HeartFilledIcon, SearchIcon } from '@/components/icons';

import { MedAsisstant, NewLogo } from '@/components/icons';
import { NavigationMenuDemo } from './components/navbar';
import AuthNav from './components/authNav';

export const Header = () => {
  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className='hidden lg:inline-block' keys={['ctrl']}>
          Q
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='Search...'
      startContent={<SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />}
      type='search'
    />
  );

  return (
    <NextUINavbar maxWidth='xl' position='sticky'>
      <MedAsisstant />
      {/* <NewLogo /> */}
      {/* Logo + name */}
      {/* <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1' href='/'>
           
            <p className='font-bold text-inherit'>МедАсистент</p>
          </NextLink>
        </NavbarBrand>
        <ul className='hidden lg:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(linkStyles({ color: 'foreground' }), 'data-[active=true]:text-primary data-[active=true]:font-medium')}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent> */}
      <NavigationMenuDemo />

      {/* Pc version */}
      <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
        <NavbarItem className='hidden sm:flex gap-2'>
          {siteConfig.links.map((item, index) => (
            <Link isExternal href={item.href} key={index} aria-label={item.label}>
              {<item.icon size={item.size} className='text-default-500' />}
            </Link>
          ))}
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <AuthNav />
        </NavbarItem>
      </NavbarContent>

      {/* mob version */}

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 2 ? 'primary' : index === siteConfig.navMenuItems.length - 1 ? 'danger' : 'foreground'}
                href={item.href}
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className='mx-4 mt-2 flex justify-between'>
            {siteConfig.links.map((item, index) => (
              <Link isExternal href={item.href} key={index} aria-label={item.label}>
                {<item.icon size={30} className='text-default-500' />}
              </Link>
            ))}
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
