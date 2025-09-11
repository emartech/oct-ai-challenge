import { CHALLENGE_CONFIG } from '../config/challenges'

export default function Timeline() {
  return (
	<div className="mt-16 w-full bg-oct-blue/20 backdrop-blur-sm py-8 rounded-2xl">
	  <div className="max-w-6xl mx-auto px-4">
		<div className="p-8">
		  <h3 className="text-white text-xl font-semibold mb-6 text-center">Challenge Timeline</h3>
		  <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-4 text-center">
			{CHALLENGE_CONFIG.timeline.milestones.map((milestone, index) => (
			  <div key={milestone.date} className="flex flex-col items-center relative z-10 flex-1 min-w-0">
                <span className="text-white font-medium mb-2">{milestone.date}</span>
				<div className={`w-4 h-4 rounded-full mb-2 shadow-lg ${
				  milestone.type === 'foundation' 
					? 'bg-white' 
					: index <= 1
					? 'bg-gradient-to-r from-gray-400 to-gray-600'
					: 'bg-gray-500'
				}`}></div>
				
				<span className="text-white/90 text-sm mb-1">{milestone.label}</span>
                <span className="text-oct-blue/90 text-sm px-2">{milestone.description}</span>
			  </div>
			))}
			{/* Connecting line behind all dots */}
			{/* <div className="hidden md:block absolute top-2 left-[0%] right-[0%] h-0.5 bg-gradient-to-r from-white via-gray-300 to-gray-500"></div> */}
		  </div>
		</div>
	  </div>
	</div>
  )
}