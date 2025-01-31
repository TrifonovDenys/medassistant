"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { MedAsisstant, NewLogo } from '@/components/icons';
import { components } from '@/config/site'

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* Головна */}

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <MedAsisstant />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Спікери */}

        <NavigationMenuItem>
          <Link href="/speakers" legacyBehavior passHref>
            <NavigationMenuTrigger>Спікери</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Навчальні класи */}

        <NavigationMenuItem>
          <Link href="/educ" legacyBehavior passHref>
            <NavigationMenuTrigger>Навчальні класи</NavigationMenuTrigger>
          </Link>

          <NavigationMenuContent>
            <ul className="grid w-[75vw] gap-3 p-4 md:w-[85vw] md:grid-cols-3 lg:w-[60vw] ">
              {components.map((component) => (

                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}

                >
                  {/* <component.icons/> */}
                  {component.description}
                </ListItem>

              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Для лікарів */}

        <NavigationMenuItem>
          <Link href="/doctors" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Для лікарів
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  console.log(children)
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:shadow-[0_0_3px_0_rgba(0,0,0,0.55)] dark:hover:shadow-[0_0_3px_0_rgba(255,255,255,0.55)]",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div></div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"