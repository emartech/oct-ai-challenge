import { CHALLENGE_CONFIG } from '../config/challenges'

export default function Timeline() {
  return (
	<div className="mt-16 w-full bg-oct-blue/20 backdrop-blur-sm py-8 rounded-2xl">
	  <div className="max-w-6xl mx-auto px-4">
		<div className="p-8">
		  <h3 className="text-white text-xl font-semibold mb-6 text-center">Challenge Timeline</h3>
		  <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 text-center">
			{CHALLENGE_CONFIG.timeline.milestones.map((milestone, index) => (
			  <div key={milestone.date} className="flex flex-col items-center relative z-10">
				<div className="w-4 h-4 bg-white rounded-full mb-2 shadow-lg"></div>
				<span className="text-white font-medium">{milestone.date}</span>
				<span className="text-white/90 text-sm">{milestone.label}</span>
                <span className="text-oct-blue/90 text-sm">{milestone.description}</span>
			  </div>
			))}
			{/* Connecting line behind all dots */}
			<div className="hidden md:block absolute top-2 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-white via-white to-white/40"></div>
		  </div>
		</div>
	  </div>
	</div>
  )
}