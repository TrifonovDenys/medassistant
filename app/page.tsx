import { Link } from '@heroui/react';
import { Snippet } from '@heroui/react';
import { Code } from '@heroui/react';
import { button as buttonStyles } from '@heroui/react';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Hero from '@/components/landing/Hero';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4'>
      <Hero />
      {/* <div className='inline-block max-w-lg text-center justify-center'>
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>websites regardless of your design experience.</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>Beautiful, fast and modern React UI library.</h2>
      </div> */}

      {/* <div className='flex gap-3'>
        <Link isExternal href={siteConfig.links.docs} className={buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow' })}>
          Documentation
        </Link>
        <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}

      {/* <div className='mt-8'>
        <Snippet hideSymbol hideCopyButton variant='flat'>
          <span>
            Get started by editing <Code color='primary'>app/page.tsx</Code>
          </span>
        </Snippet>

        <Button size='icon' variant='destructive'>
          Test
        </Button>
      </div> */}
    </section>
  );
}
