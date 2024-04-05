'use client'

import Link from 'next/link'
import MobileMenu from './mobile-menu'

import Image from 'next/image'

import rockCat from '@/public/images/therockcat.jpg'
import evilCat from '@/public/images/evilcat.jpg'
import unimpressedCat from '@/public/images/unimpressedcat.jpg'

export default function Header() {
  return (
    <header className="absolute w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 z-30">
          {/* Site branding */}
          <div className="shrink-0 mr-4 z-50">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8 fill-current text-teal-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow z-50">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-teal-300 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <button onClick={() => {
                  const rockCat = document.getElementById('rockCat') as HTMLDivElement;
                  console.log("Looking for rockCat")
                  if (rockCat) {
                    console.log("Found rockCat")
                    rockCat.classList.add('visible');

                    setTimeout(() => {
                      rockCat.classList.remove('visible');

                      const unimpressedCat = document.getElementById('unimpressedCat') as HTMLDivElement;
                      console.log("Looking for unimpressedCat")
                      if (unimpressedCat) {
                        console.log("Found unimpressedCat")
                        unimpressedCat.classList.add('visible');

                        setTimeout(() => {
                          unimpressedCat.classList.remove('visible');

                          const evilCat = document.getElementById('evilCat') as HTMLDivElement;
                          console.log("Looking for evilCat")
                          if (evilCat) {
                            console.log("Found evilCat")
                            evilCat.classList.add('visible');

                            setTimeout(() => {
                              evilCat.classList.remove('visible');
                            }, 3000);
                          }
                        }, 3000);
                      }
                    }, 3000);
                  }
                }} className="btn-sm text-white bg-teal-300 hover:bg-gray-500 hover:text-teal-300 ml-3">
                  Shut Up
                </button>
              </li>
            </ul>
          </nav>

          <MobileMenu />

          <div className="funny-cat fixed top-40 bottom-40 left-40 right-40 flex justify-center items-center" id="rockCat">
              <label className="text-9xl top-20 bottom-40 left-40 right-40 fixed justify-top text-center items-center">Shut up?</label>
              <Image className='' src={rockCat} alt='Funny Cat looking with raised Eyebrow' />
          </div>
          <div className="funny-cat fixed top-40 bottom-40 left-40 right-40 flex justify-center items-center" id="evilCat">
              <label className="text-6xl top-20 bottom-40 left-40 right-40 fixed justify-top text-center items-center">How about you shut up instead?</label>
              <Image className='' src={evilCat} alt='Funny Cat looking with smug and evil expression' width={753} height={753} />
          </div>
          <div className="funny-cat fixed top-40 bottom-40 left-40 right-40 flex justify-center items-center" id="unimpressedCat">
              <label className="text-6xl top-20 bottom-40 left-40 right-40 fixed justify-top text-center items-center">Well that's not very nice.</label>
              <Image className='' src={unimpressedCat} alt='Funny Cat looking with unimpressed expression' width={753} height={753} />
          </div>

        </div>
      </div>
    </header>
  )
}
