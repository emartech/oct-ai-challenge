import Image from 'next/image'

export default function HeroBackground() {
  return (
    <>
      {/* Robot Image Container */}
      <div className="relative flex items-center flex-wrap lg:flex-nowrap">
        {/* Robot Image */}
        <div className="relative z-10 flex-shrink-0">
          <div className="relative">
            <Image
              src="octaianvil.png"
              alt="OCT AI Robot"
              width={400}
              height={400}
              className="w-64 md:w-80 lg:w-96 h-auto"
              priority
            />
          </div>
        </div>

        {/* Main Title */}
        <div className="relative z-20 flex-grow mt-8 lg:mt-0 lg:ml-12 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-oct-blue">OCT AI</span>{' '}
            <span className="text-white">CHALLENGE</span>
          </h1>
          <p className="text-white text-lg md:text-lg lg:text-lg font-light">
            <span className="text-white">Where human creativity meets artificial intelligence</span>
          </p>
        </div>
      </div>

      {/* Highway Traffic Flow - Bird's Eye View - Full Screen Right to Left */}
      <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
        {/* Traffic Lane 1 - Moving Right to Left Fast */}
        <div className="absolute top-1/4 left-0 w-full h-16 flex items-center">
          <div className="animate-highway-left-fast">
            <Image
              src="Anvil_RipplePattern_RGB_grey_2.png"
              alt="Traffic Flow 1"
              width={600}
              height={400}
              className="opacity-60"
            />
          </div>
        </div>

        {/* Traffic Lane 2 - Moving Right to Left Medium */}
        <div className="absolute top-2/4 left-0 w-full h-16 flex items-center">
          <div className="animate-highway-left-medium">
            <Image
              src="Anvil_RipplePattern_RGB_grey_2.png"
              alt="Traffic Flow 2"
              width={600}
              height={400}
              className="opacity-50"
            />
          </div>
        </div>

        {/* Traffic Lane 3 - Moving Right to Left Fast (Different timing) */}
        <div className="absolute top-3/4 left-0 w-full h-16 flex items-center">
          <div className="animate-highway-right-slow">
            <Image
              src="Anvil_RipplePattern_RGB_grey_2.png"
              alt="Traffic Flow 3"
              width={600}
              height={400}
              className="opacity-70"
            />
          </div>
        </div>

        {/* Traffic Lane 4 - Moving Right to Left Medium (Different timing) */}
        <div className="absolute top-1/6 left-0 w-full h-16 flex items-center">
          <div className="animate-highway-left-medium">
            <Image
              src="Anvil_RipplePattern_RGB_grey_2.png"
              alt="Traffic Flow 4"
              width={600}
              height={400}
              className="opacity-40"
            />
          </div>
        </div>
      </div>
    </>
  )
}