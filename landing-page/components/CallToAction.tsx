export default function CallToAction() {
  return (
    <div className="mt-16 md:mt-24">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          A challenge built as a progressive learning platform that guides participants from basic AI skills to advanced real-world applications.
        </h2>
        <p className="text-white text-xl md:text-2xl font-light mb-4">
          Are you interested?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf9_3ndaZ2eUfhls4UO7d3ucEcpahRlkN0T9Rrr1eAR_K2CRg/viewform?usp=header', '_blank')}
            className="bg-oct-blue hover:bg-oct-blue/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Hell yeah!
          </button>
        </div>
      </div>
    </div>
  )
}