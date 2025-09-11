import FoundationExercises from './FoundationExercises'
import MainChallenges from './MainChallenges'

export default function ChallengeRoadmap() {
  return (
	<div className="mt-24 md:mt-32">
	  <div className="max-w-6xl mx-auto">
		<h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">
		  <span className="text-oct-blue">Challenge</span> Roadmap
		</h2>
		<p className="text-white/90 text-xl text-center mb-16">
		  Your journey to AI mastery starts here
		</p>

		{/* Foundation Exercises */}
		<FoundationExercises />

		{/* Main Challenges */}
		<MainChallenges />
	  </div>
	</div>
  )
}