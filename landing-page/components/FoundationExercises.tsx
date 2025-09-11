import { CHALLENGE_CONFIG } from '../config/challenges'

export default function FoundationExercises() {
  // Check if foundation exercises period is active
  const now = new Date()
  const isExercisePeriodActive = now >= CHALLENGE_CONFIG.foundationExercises.startDate
  const isSubmissionOpen = 
    now >= CHALLENGE_CONFIG.foundationExercises.startDate && 
    now <= CHALLENGE_CONFIG.foundationExercises.endDate

  return (
	<div className="mb-20">
	  <div className="text-center mb-8">
		<div className="bg-oct-blue/20 backdrop-blur-sm rounded-2xl px-6 py-6 max-w-4xl mx-auto">
		  <h3 className="text-white text-2xl font-semibold flex items-center justify-center gap-3 mb-3">
			{CHALLENGE_CONFIG.foundationExercises.title}
			<span className="bg-oct-blue px-3 py-1 rounded-full text-sm">
			  Starting {CHALLENGE_CONFIG.foundationExercises.launchDate}
			</span>
		  </h3>
		  <p className="text-white/80 text-base">
			Complete exercises to earn exclusive badges that can be exchanged for additional benefits at the end.
		  </p>
		</div>
	  </div>
	  
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{CHALLENGE_CONFIG.foundationExercises.exercises.map((exercise) => (
		  <div 
		    key={exercise.id} 
		    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 relative overflow-hidden"
		  >
			<div className="text-center mb-4 bg-gradient-to-r from-oct-blue/40 to-oct-blue/60 rounded-lg py-3 px-4 -mx-6 -mt-6 mb-6 shadow-lg">
			  <div className="text-white font-bold text-lg">{exercise.badge}</div>
			</div>
			<p className="text-white/80 text-sm mb-4">{exercise.description}</p>
			<div className="flex gap-2">
			  {isExercisePeriodActive ? (
			    <a 
			      href={exercise.readmePath || '#'}
			      target="_blank"
			      rel="noopener noreferrer"
			      className="bg-oct-blue hover:bg-oct-blue/90 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex-1 flex items-center justify-center"
			    >
			      View Exercise
			    </a>
			  ) : (
			    <button 
			      disabled
			      className="bg-oct-blue/30 text-white/50 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex-1 flex items-center justify-center cursor-not-allowed"
			    >
			      View Exercise
			    </button>
			  )}
			  {isSubmissionOpen ? (
			    <a 
			      href={exercise.submissionFormUrl || '#'}
			      target="_blank"
			      rel="noopener noreferrer"
			      className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex-1 flex items-center justify-center border border-white/40"
			    >
			      Submit Solution
			    </a>
			  ) : (
			    <button 
			      disabled
			      className="bg-white/10 text-white/50 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex-1 flex items-center justify-center border border-white/20 cursor-not-allowed"
			    >
			      Submit Solution
			    </button>
			  )}
			</div>
		  </div>
		))}
	  </div>
	</div>
  )
}