export default function Rules() {
  return (
    <div className="mt-16">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-oct-blue">Challenge</span> Structure
        </h2>
        <p className="text-white text-xl md:text-2xl font-light mb-4">
          The structure follows a two-phase approach with multiple engagement touchpoints.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Foundation Exercises Section */}
          <div className="bg-oct-blue/20 rounded-xl p-6">
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              🎖️ Foundation Exercises
            </h3>
            <p className="text-white text-xl md:text-xl font-light mb-4">
              These exercises are skill-building modules designed to ensure all participants have the core competencies needed for the main challenges. Think of them as &ldquo;training levels&rdquo; that unlock advanced gameplay.
            </p>
          </div>

          {/* Main Challenges Section */}
          <div className="bg-gray-500/20 rounded-xl p-6">
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              🏆 Main Challenges
            </h3>
            <p className="text-white text-xl md:text-xl font-light mb-4">
              These challenges are competitive scenarios that simulate real-world AI implementation problems. Participants apply their foundation skills to solve complex, open-ended challenges with scoring and ranking.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}