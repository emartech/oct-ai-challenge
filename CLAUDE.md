# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Landing Page Development
```bash
# Navigate to landing page directory
cd landing-page/

# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production (creates static 'out' folder)
npm run export

# Run linting
npm run lint

# Deploy to GitHub Pages (build + add .nojekyll)
npm run deploy
```

## Architecture Overview

### Project Structure
This is a Next.js-based landing page for the OCT AI Challenge platform, configured for static export to GitHub Pages. Live at: https://emartech.github.io/oct-ai-challenge/

### Component System (Ultra-Modular)
- **landing-page/components/Hero.tsx**: Main orchestrator component that assembles all page sections
- **landing-page/components/HeroBackground.tsx**: Robot image, OCT AI title, and traffic flow animation (4 lanes)
- **landing-page/components/CallToAction.tsx**: Registration section with Google Form integration ("Hell yeah!" button)
- **landing-page/components/Rules.tsx**: Challenge structure explanation and rules overview
- **landing-page/components/Timeline.tsx**: Interactive milestone visualization (5 milestones with color coding)
- **landing-page/components/FoundationExercises.tsx**: Displays 7 foundation exercises with badge rewards
- **landing-page/components/MainChallenges.tsx**: Shows main challenges with points and leaderboard info
- **landing-page/components/ChallengeRoadmap.tsx**: Container component that combines foundation exercises and main challenges
- **landing-page/config/challenges.ts**: Single source of truth for all challenge content, dates, and details - update here to modify content

### Configuration Files
- **landing-page/next.config.js**: Static export configuration with GitHub Pages base path handling
- **landing-page/tailwind.config.js**: Custom OCT AI color scheme (oct-bg: #a5b2c4, oct-text: #394255)
- **.github/workflows/deploy-pages.yml**: Automated GitHub Pages deployment on main branch changes

### Development Approach
- Components use TypeScript with React functional components
- Configuration-driven content management via `config/challenges.ts`
- Styling uses Tailwind CSS utility classes with glassmorphism effects
- Images are stored in `landing-page/public/` directory
- Maximum component reusability through separation of concerns

### Key Features
- Full-screen animated traffic flow using multiple lanes with different speeds
- Responsive design with 3-column grid for foundation, 2-column for main challenges
- Static site generation for optimal performance
- Automated GitHub Pages deployment via GitHub Actions
- Google Form integration for participant registration

## Current Development Status

### Completed
- Landing page deployed and live at https://emartech.github.io/oct-ai-challenge/
- Ultra-modular component architecture with 5 focused components
- Configuration-driven content system
- Automated deployment pipeline
- Comprehensive documentation
- Participant registration via Google Forms
- **Foundation Exercises Integration**: Aligned with warmup-excercises folder structure
- **Exercise Links**: Direct GitHub links to exercise README files
- **Submission System**: Individual Google Forms for each exercise with time-based activation
- **Badge System**: Funny themed badge names as rewards (e.g., "🏓 Ping Pong Champion", "🥷 Prompt Ninja")
- **UI Enhancements**: 
  - Full-width Timeline with darker background (bg-oct-blue/20)
  - Badge-focused exercise cards with gradient headers
  - Dual-button system (View Exercise + Submit Solution)
  - Responsive glassmorphism design throughout

### Recent Changes
- **Component Architecture Refactoring**: Split Hero component into modular pieces
  - **HeroBackground.tsx**: Robot image, title, and traffic flow animation
  - **CallToAction.tsx**: Registration section with "Hell yeah!" button
  - **Rules.tsx**: Challenge structure explanation and rules
  - **Timeline.tsx**: Updated title to just "Timeline", equal-width milestone items
- **Timeline Enhancements**: 
  - Extended with all main challenge milestones (5 total milestones)
  - Color differentiation: white (foundation) → gray gradient → solid gray
  - Equal-width milestone items regardless of description length
  - Connecting line temporarily disabled
- **Foundation Exercises Improvements**:
  - Removed workshop badges and reorganized layout
  - Badges prominently displayed at top of cards with gradient background
  - Exercise titles kept but paired with emojis
  - Time-based button activation (both View Exercise and Submit Solution)
  - Development override: All buttons active in `NODE_ENV=development`
  - Enhanced descriptions explaining badge rewards system
- **Content Updates**:
  - CallToAction: Refined messaging about progressive learning platform
  - Rules: Two-phase structure explanation with detailed descriptions
  - Config Structure: Added submission form URLs and date ranges for exercises

### File Structure Notes
- **warmup-excercises/** folder contains actual exercise content (note the typo in folder name)
  - test/, basic/, json/, agent/, mcp-usage/, mcp-server/, prompt-injection/
  - Each has a README.md with exercise instructions
- **landing-page/config/challenges.ts**: Single source of truth for all content
  - Exercise details, badges, dates, and form URLs
  - Both foundation exercises and main challenges configured here

### Current Page Structure (Hero.tsx)
1. **HeroBackground** - Robot image, title, and traffic flow animation
2. **CallToAction** - Registration form and participation invitation  
3. **Rules** - Challenge structure and rules explanation
4. **Timeline** - 5 milestones showing progression from foundation to main challenges
5. **Challenge Roadmap** - Foundation exercises and main challenges sections

### Next Development Phase
1. **Update Submission Forms**: Replace placeholder Google Form URLs with actual form IDs
2. **Backend API** (challenges/backend/): Node.js server, PostgreSQL schema, authentication, challenge endpoints
3. **Frontend Dashboard** (challenges/frontend/): Participant portal, challenge interaction, progress tracking
4. **Data Integration**: Connect config to database, dynamic loading, user progress, admin interface

### Important Notes
- Edit challenge content only in `landing-page/config/challenges.ts`
- Components are now highly modular - each handles a specific responsibility
- The platform foundation is complete and ready to scale into full challenge management system
- Time-based restrictions: All buttons active in development, date-controlled in production
- Badge names should remain fun and engaging to motivate participants
- Component separation allows for easy maintenance and feature additions