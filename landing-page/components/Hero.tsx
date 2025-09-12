import FoundationExercises from './FoundationExercises'
import MainChallenges from './MainChallenges'
import Timeline from './Timeline'
import HeroBackground from './HeroBackground'
import CallToAction from './CallToAction'
import ParticipantCounter from './ParticipantCounter'
import Rules from './Rules'

export default function Hero() {
  return (
    <div className="min-h-screen bg-oct-bg flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10 pt-8">

        <HeroBackground />
        
        <CallToAction />
        
        <Rules />

        <Timeline />

        <div className="mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="text-oct-blue">Challenge</span> Roadmap
            </h2>
            <p className="text-white/90 text-xl text-center mb-16">
              Your journey to AI mastery starts here
            </p>
            <FoundationExercises />
            <MainChallenges />
          </div>
        </div>

      </div>
    </div>
  )
}
