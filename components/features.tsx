export default function Features() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-50">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 z-10">
            <h2 className="h2 mb-4">Most people do not understand what the UK has to offer</h2>
            <p className="text-xl text-gray-400">So here's a little excerpt! :3</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-300" width="64" height="64" rx="32" />
                <g transform="scale(0.5) translate(34 34)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-gray-500" strokeWidth="2.2" strokeLinecap="square" fill="none" fillRule="evenodd" d="M54.278,5.663l-3.029-3.029L31.133,22.75L4.258,49.624c-0.023,0.006-0.045,0.012-0.069,0.018l0.01,0.041l-4.2,4.2 l1.761,0.404c0.954,0.22,1.954,0.329,3.002,0.329c8.586,0,20.296-7.363,34.877-21.944l0.707-0.707l-4.217-4.217 c1.966-0.425,5.074-1.395,8.021-3.58c0.229-0.192,5.629-4.762,8.667-9.866l0.065-0.131c0.051-0.112,0.549-1.087,2.504-0.702 L55.8,13.55l0.347-0.238c0.099-0.067,0.963-0.695,1.087-2.032C57.384,9.665,56.39,7.774,54.278,5.663z M31.133,25.578l2.518,2.518 l0.001,0l1.427,1.427c-13.362,12.759-18.8,16.493-26.9,19.008L31.133,25.578z M4.113,52.596l1.173-1.173 c11.047-2.878,16.592-6.525,31.208-20.485l1.023,1.023C23.421,45.916,11.949,52.996,4.113,52.596z M55.169,11.413 c-2.463-0.269-3.725,1.062-4.106,1.925c-2.87,4.787-8.146,9.253-8.151,9.26c-3.435,2.545-7.24,3.25-8.509,3.422l-1.855-1.855 L51.249,5.462l1.615,1.615c2.135,2.136,2.409,3.395,2.383,3.955C55.239,11.19,55.207,11.316,55.169,11.413z"></path>
                </g>
              </svg>
              <h4 className="h4 mb-2">Stabbing</h4>
              <p className="text-lg text-gray-400 text-center">Where there's a hole, there's a goal. So why not make a few more?</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-300" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <circle className="fill-current text-teal-300" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-gray-500" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-gray-500" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">British People</h4>
              <p className="text-lg text-gray-400 text-center">Yes.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-300" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                <path className="stroke-current text-gray-500" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-gray-500" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-gray-500" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Bo''le o' Wa'er</h4>
              <p className="text-lg text-gray-400 text-center">Why do they sound so weird? That's what we, and most scientists, have been consistently asking ourselves.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-300" width="64" height="64" rx="32" />
                <g transform="scale(0.7) translate(13 13)" strokeLinecap="square" strokeWidth="10" fill="none" fillRule="evenodd">
                  <svg strokeWidth="10" fill="#707d86" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.531 496.53">
                    <path className="stroke-current text-gray-500" d="M247.437,23.872c-65.733,0-117.209,22.782-117.209,51.863s51.476,51.863,117.209,51.863 c65.72,0,117.202-22.782,117.202-51.863C364.644,46.654,313.157,23.872,247.437,23.872z M247.437,116.047 c-62.273,0-105.667-21.247-105.667-40.317c0-19.067,43.395-40.312,105.667-40.312c62.261,0,105.655,21.244,105.655,40.312 C353.097,94.805,309.698,116.047,247.437,116.047z"></path> 
                    <path className="stroke-current text-gray-500" d="M179.335,76.414c0,18.892,33.248,28.779,66.093,28.779c32.851,0,66.1-9.887,66.1-28.779 C311.528,38.634,179.335,38.634,179.335,76.414z M245.428,93.643c-33.3,0-54.542-10.205-54.542-17.229 c0-7.026,21.242-17.229,54.542-17.229c33.304,0,54.553,10.202,54.553,17.229C299.981,83.438,278.732,93.643,245.428,93.643z"></path> 
                    <path className="stroke-current text-gray-500" d="M401.206,288.416V77.947C401.206,34.237,334,0,248.205,0C162.412,0,95.204,34.237,95.204,77.947V418.59 c0,43.707,67.208,77.94,153.001,77.94c85.79,0,153.001-34.237,153.001-77.94V289.788c0.019-0.452,0.121-0.9,0.121-1.362h-0.121 V288.416z M389.66,418.59c0,35.993-64.779,66.395-141.455,66.395c-76.675,0-141.455-30.401-141.455-66.395V311.191 c17.303,17.502,54.252,30.924,102.018,35.838c-0.654,1.186-1.181,2.399-1.725,3.622c-3.125,6.249-4.966,13.124-4.966,20.433 c0,27.321,24.341,49.551,54.271,49.551c22.924,0,42.479-13.092,50.408-31.484c3.021-6.161,4.771-12.928,4.771-20.105 c0-8.41-2.441-16.689-7.011-24.055c39.74-5.965,69.703-17.763,85.133-32.716V418.59H389.66z M214.527,369.035 c0-4.947,1.253-9.764,3.421-14.328c6.903-12.75,21.445-21.641,38.401-21.641c23.559,0,42.722,17.049,42.722,38.013 c0,4.761-1.101,9.278-2.907,13.479c-6.688,13.213-21.576,22.486-38.909,22.486C233.697,407.034,214.527,389.99,214.527,369.035z M389.66,289.415c-1.312,19.802-41.435,38.802-96.497,45.457h-0.019c-9.689-8.214-22.561-13.353-36.791-13.353 c-15.053,0-28.684,5.638-38.529,14.72c-63.026-5.11-110.353-25.524-110.353-47.813h-0.716V108.143 c22.733,28.292,76.799,47.747,141.455,47.747c64.657,0,118.721-19.45,141.45-47.747V289.415L389.66,289.415z M248.205,144.339 c-76.675,0-141.455-30.399-141.455-66.396c0-35.995,64.779-66.396,141.455-66.396c76.676,0,141.455,30.401,141.455,66.396 C389.66,113.944,324.88,144.339,248.205,144.339z"></path> <polygon points="116.292,386.388 118.133,433.03 120.756,434.248 118.917,387.592 "></polygon> <polygon points="146.927,400.52 148.751,447.148 151.396,448.366 149.561,401.724 "></polygon> <polygon points="122.553,389.285 124.375,435.914 125.699,436.53 123.864,389.883 "></polygon> 
                  </svg>
                </g>
              </svg>
              <h4 className="h4 mb-2">Baked Beans</h4>
              <p className="text-lg text-gray-400 text-center">🫘</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-300" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <circle className="fill-current text-teal-300" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-gray-500" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                  <path className="stroke-current text-gray-500" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Rishi Sunak</h4>
              <p className="text-lg text-gray-400 text-center">Hey man, just look him up. I'm german, so shitting on anyone except white people is a little <strong>too</strong> spicy for me, yk?</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-teal-300" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                </g>
              </svg>
              <label className="text-lg text-gray-500 text-center mt-4" style={{position: "absolute"}}>:c</label>
              <h4 className="h4 mb-2">Hungy</h4>
              <p className="text-lg text-gray-400 text-center">This doesnt have anything to do with british people, but after the beans, I got hungy and ated this last fact, sorry :c</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
