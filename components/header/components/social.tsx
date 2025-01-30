import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from '@heroui/react';

const Social = () => {
  return (<NavbarMenu>
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
  </NavbarMenu>)
}