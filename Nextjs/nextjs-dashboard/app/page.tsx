//each route will have their own page.tsx and layout.tsx file with them. each page.tsx exports a react file and can have their own styling 

import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css' 
// css modules are good if you want to resolve style ocnflicts for different components. Provide a way to make CSS classes locally scoped to components by default, reducing the risk of styling conflicts.
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
//image optimisation: helps in lazy loading and prevents layout shifts when image is loading, resize image for larger size images for smaller viewports 
import Image from 'next/image' ;
// Images without dimensions and web fonts are common causes of layout shift due to the browser having to download additional resources.



export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className={styles.shape} />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.This is under Next js learning series
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image src="/hero-desktop.png" width={1000} height={760} className='hidden md:block' alt='Screenshiots of the dashboard project showing desktop version'/>
          {/* Here, you're setting the width to 1000 and height to 760 pixels. It's good practice to set the width and height of your images to avoid layout shift, these should be an aspect ratio identical to the source image. */}
          <Image src="/hero-mobile.png" alt='Screenshot of dashboard project in mobile version' width={560} height={620} className='block md:hidden'></Image>
        </div>
      </div>
    </main>
  );
}
