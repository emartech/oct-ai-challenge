import { CHALLENGE_CONFIG } from '../config/challenges'

export default function MainChallenges() {
  return (
	<div className="mb-16">
	  <div className="text-center mb-8">
		<div className="bg-oct-blue/20 backdrop-blur-sm rounded-2xl px-6 py-6 max-w-4xl mx-auto">
		  <h3 className="text-white text-2xl font-semibold flex items-center justify-center gap-3 mb-3">
			{CHALLENGE_CONFIG.mainChallenges.title}
			<span className="bg-oct-blue px-3 py-1 rounded-full text-sm">
			  Starting {CHALLENGE_CONFIG.mainChallenges.startDate}
			</span>
		  </h3>
		  <p className="text-white/80 text-base">
			Complete challenges to earn points that will be displayed on a public leaderboard. Compete with other participants for the top spot!
		  </p>
		</div>
	  </div>
	  
	  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
		{CHALLENGE_CONFIG.mainChallenges.challenges.map((challenge) => (
		  <div key={challenge.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
			<div className="flex items-center justify-between mb-3">
			  <div className="flex items-center gap-3">
				<span className="text-2xl">{challenge.emoji}</span>
				<h4 className="text-white font-semibold">{challenge.title}</h4>
			  </div>
			  <span className="text-xs bg-oct-blue px-2 py-1 rounded text-white">
				{challenge.date}
			  </span>
			</div>
			<p className="text-white/80 text-sm mb-3">{challenge.description}</p>
			<div className="text-oct-blue text-xs">Points: {challenge.points}</div>
		  </div>
		))}
	  </div> */}
	</div>
  )
}