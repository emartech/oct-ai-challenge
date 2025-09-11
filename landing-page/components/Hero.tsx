import Image from 'next/image'

export default function Hero() {
  return (
    <div className="min-h-screen bg-oct-bg flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Images Container */}
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

        {/* Call to Action Section */}
        <div className="mt-16 md:mt-24">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              A challenge, designed to help YOU leverage AI tools for your own benefit by offering engaging tasks.
            </h2>
            <p className="text-white text-xl md:text-2xl font-light mb-4">
              Are you interested in participating?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-oct-blue hover:bg-oct-blue/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Hell yeah!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
