import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-30">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 z-30">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-gray-500 bg-teal-300 rounded-full mb-4">Reaching goals that don't matter</div>
            <h1 className="h2 mb-4">One country, unlimited hate</h1>
            <p className="text-xl text-gray-400">If you keep reading, we guarantee you'll hate the UK too.<br/>100% Money Back Guarantee!</p>
          </div>

          {/* Items */}
          <div className="grid gap-20 z-30">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center z-30">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-teal-300 mb-2">More male. Less based.</div>
                  <h3 className="h3 mb-3">Queen Charles III.</h3>
                  <p className="text-xl text-gray-400 mb-4">Long live the queen, we all chant. Except this time, the queen is male. And also looks a lot stupider.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 256 256">
                    <defs>
                    </defs>
                    <g className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" stroke='none' strokeWidth={0} strokeDasharray="none" strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit={10} fill='none' fillRule='nonzero' opacity={1} transform="scale(2.9 2.9)" >
                      <path d="M 11 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 c -4.295 -4.296 -4.295 -11.261 0 -15.557 l 68 -68 c 4.297 -4.296 11.26 -4.296 15.557 0 c 4.296 4.296 4.296 11.261 0 15.557 l -68 68 C 16.63 88.926 13.815 90 11 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                      <path d="M 79 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 l -68 -68 c -4.295 -4.296 -4.295 -11.261 0 -15.557 c 4.296 -4.296 11.261 -4.296 15.557 0 l 68 68 c 4.296 4.296 4.296 11.261 0 15.557 C 84.63 88.926 81.815 90 79 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                    </g>
                    </svg>
                      <span>Very Old</span>
                    </li>
                    <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 256 256">
                    <defs>
                    </defs>
                    <g className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" stroke='none' strokeWidth={0} strokeDasharray="none" strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit={10} fill='none' fillRule='nonzero' opacity={1} transform="scale(2.9 2.9)" >
                      <path d="M 11 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 c -4.295 -4.296 -4.295 -11.261 0 -15.557 l 68 -68 c 4.297 -4.296 11.26 -4.296 15.557 0 c 4.296 4.296 4.296 11.261 0 15.557 l -68 68 C 16.63 88.926 13.815 90 11 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                      <path d="M 79 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 l -68 -68 c -4.295 -4.296 -4.295 -11.261 0 -15.557 c 4.296 -4.296 11.261 -4.296 15.557 0 l 68 68 c 4.296 4.296 4.296 11.261 0 15.557 C 84.63 88.926 81.815 90 79 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                    </g>
                    </svg>
                      <code><label className="text-blue-300">isMale</label><label> = </label><label className="text-blue-600">true</label></code>
                    </li>
                    <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 256 256">
                    <defs>
                    </defs>
                    <g className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" stroke='none' strokeWidth={0} strokeDasharray="none" strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit={10} fill='none' fillRule='nonzero' opacity={1} transform="scale(2.9 2.9)" >
                      <path d="M 11 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 c -4.295 -4.296 -4.295 -11.261 0 -15.557 l 68 -68 c 4.297 -4.296 11.26 -4.296 15.557 0 c 4.296 4.296 4.296 11.261 0 15.557 l -68 68 C 16.63 88.926 13.815 90 11 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                      <path d="M 79 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 l -68 -68 c -4.295 -4.296 -4.295 -11.261 0 -15.557 c 4.296 -4.296 11.261 -4.296 15.557 0 l 68 68 c 4.296 4.296 4.296 11.261 0 15.557 C 84.63 88.926 81.815 90 79 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                    </g>
                    </svg>
                      <span>Bri'ish</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center z-30">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-teal-300 mb-2">Actually, they're fries</div>
                  <h3 className="h3 mb-3">Fish & Chips</h3>
                  <p className="text-xl text-gray-400 mb-4">Everyone knows em, but does anyone actually like em? I mean, I like fish, but this is just plain boring, bruv.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 256 256">
                        <defs>
                        </defs>
                        <g className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" stroke='none' strokeWidth={0} strokeDasharray="none" strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit={10} fill='none' fillRule='nonzero' opacity={1} transform="scale(2.9 2.9)" >
                          <path d="M 11 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 c -4.295 -4.296 -4.295 -11.261 0 -15.557 l 68 -68 c 4.297 -4.296 11.26 -4.296 15.557 0 c 4.296 4.296 4.296 11.261 0 15.557 l -68 68 C 16.63 88.926 13.815 90 11 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                          <path d="M 79 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 l -68 -68 c -4.295 -4.296 -4.295 -11.261 0 -15.557 c 4.296 -4.296 11.261 -4.296 15.557 0 l 68 68 c 4.296 4.296 4.296 11.261 0 15.557 C 84.63 88.926 81.815 90 79 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                        </g>
                      </svg>
                      <span>Tasteless</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 256 256">
                          <defs>
                          </defs>
                          <g className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" stroke='none' strokeWidth={0} strokeDasharray="none" strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit={10} fill='none' fillRule='nonzero' opacity={1} transform="scale(2.9 2.9)" >
                            <path d="M 11 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 c -4.295 -4.296 -4.295 -11.261 0 -15.557 l 68 -68 c 4.297 -4.296 11.26 -4.296 15.557 0 c 4.296 4.296 4.296 11.261 0 15.557 l -68 68 C 16.63 88.926 13.815 90 11 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                            <path d="M 79 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 l -68 -68 c -4.295 -4.296 -4.295 -11.261 0 -15.557 c 4.296 -4.296 11.261 -4.296 15.557 0 l 68 68 c 4.296 4.296 4.296 11.261 0 15.557 C 84.63 88.926 81.815 90 79 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                          </g>
                        </svg>
                      <span>Unseasoned</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 256 256">
                          <defs>
                          </defs>
                          <g className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" stroke='none' strokeWidth={0} strokeDasharray="none" strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit={10} fill='none' fillRule='nonzero' opacity={1} transform="scale(2.9 2.9)" >
                            <path d="M 11 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 c -4.295 -4.296 -4.295 -11.261 0 -15.557 l 68 -68 c 4.297 -4.296 11.26 -4.296 15.557 0 c 4.296 4.296 4.296 11.261 0 15.557 l -68 68 C 16.63 88.926 13.815 90 11 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                            <path d="M 79 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 l -68 -68 c -4.295 -4.296 -4.295 -11.261 0 -15.557 c 4.296 -4.296 11.261 -4.296 15.557 0 l 68 68 c 4.296 4.296 4.296 11.261 0 15.557 C 84.63 88.926 81.815 90 79 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                          </g>
                        </svg>
                      <span>Misnamed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center z-30">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-teal-300 mb-2">IT'S FUCKING RAW</div>
                  <h3 className="h3 mb-3">Gordon Ramsay</h3>
                  <p className="text-xl text-gray-400 mb-4">I mean, he seems kinda cool, but also very scary. I feel like if I ever went to the UK, I'd just be enjoying a meal, and suddenly Gordon walks into it, and then everyone panics, and then I need to get my stomach pumped out!</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Shits all over That Vegan Teacher</span>
                    </li>
                    <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 256 256">
                          <defs>
                          </defs>
                          <g className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" stroke='none' strokeWidth={0} strokeDasharray="none" strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit={10} fill='none' fillRule='nonzero' opacity={1} transform="scale(2.9 2.9)" >
                            <path d="M 11 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 c -4.295 -4.296 -4.295 -11.261 0 -15.557 l 68 -68 c 4.297 -4.296 11.26 -4.296 15.557 0 c 4.296 4.296 4.296 11.261 0 15.557 l -68 68 C 16.63 88.926 13.815 90 11 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                            <path d="M 79 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 l -68 -68 c -4.295 -4.296 -4.295 -11.261 0 -15.557 c 4.296 -4.296 11.261 -4.296 15.557 0 l 68 68 c 4.296 4.296 4.296 11.261 0 15.557 C 84.63 88.926 81.815 90 79 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                          </g>
                        </svg>
                      <span>Is very scary</span>
                    </li>
                    <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 256 256">
                          <defs>
                          </defs>
                          <g className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" stroke='none' strokeWidth={0} strokeDasharray="none" strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit={10} fill='none' fillRule='nonzero' opacity={1} transform="scale(2.9 2.9)" >
                            <path d="M 11 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 c -4.295 -4.296 -4.295 -11.261 0 -15.557 l 68 -68 c 4.297 -4.296 11.26 -4.296 15.557 0 c 4.296 4.296 4.296 11.261 0 15.557 l -68 68 C 16.63 88.926 13.815 90 11 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                            <path d="M 79 90 c -2.815 0 -5.63 -1.074 -7.778 -3.222 l -68 -68 c -4.295 -4.296 -4.295 -11.261 0 -15.557 c 4.296 -4.296 11.261 -4.296 15.557 0 l 68 68 c 4.296 4.296 4.296 11.261 0 15.557 C 84.63 88.926 81.815 90 79 90 z" stroke="none" strokeWidth="1" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fill="rgb(214,0,0)" fillRule="nonzero"/>
                          </g>
                        </svg>
                      <span>His last name is spelled weird</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
