import { PromptCategory } from '@/types/prompts'
import {
  Users,
  Globe,
  Mountain,
  BookOpen,
  Share2,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Flower2,
  Languages,
  Brain,
  Timer,
  Medal,
  Map,
  History,
  Sparkles,
  Users as UsersGroup,
  Brain as BrainIcon,
  Lightbulb,
  Compass,
  Heart,
  Music,
  Palette,
  Camera,
  Mic,
  Home,
  DollarSign,
  Briefcase,
  Calendar
} from 'lucide-react'

export const promptCategories: PromptCategory[] = [
  {
    name: "Coaching & Athletics",
    icon: Users,
    description: "Training plans, technique analysis, and performance optimization",
    prompts: [
      {
        title: "Training Plan Development",
        text: "Create a progressive training plan for [sport/event] focusing on: 1) building endurance, 2) improving technique, 3) peaking for competition. Include recovery periods and cross-training.",
        tips: ["Specify event goals", "Include periodization preferences", "Note any specific conditions or terrain"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Coaching & Athletics",
        difficulty: "Intermediate",
        tags: ["sports", "training", "planning", "performance", "coaching"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Competition Preparation",
        text: "Design a competition preparation plan for [EVENT] including: 1) Peak performance timing, 2) Tapering strategy, 3) Mental preparation, 4) Nutrition planning, 5) Recovery protocols.",
        tips: ["Specify competition date", "Include current fitness level", "Note any qualifying standards", "Consider travel requirements"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Coaching & Athletics",
        difficulty: "Advanced",
        tags: ["sports", "competition", "performance", "planning"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Injury Prevention Program",
        text: "Create an injury prevention program for [SPORT/ACTIVITY] focusing on: 1) Movement screening, 2) Corrective exercises, 3) Recovery protocols, 4) Progressive loading, 5) Monitoring methods.",
        tips: ["List previous injuries", "Include sport-specific risks", "Note training volume", "Specify equipment available"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Coaching & Athletics",
        difficulty: "Intermediate",
        tags: ["sports", "injury-prevention", "health", "training"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Team Building Workshop",
        text: "Design a team building workshop for [SPORT/GROUP] that develops: 1) Communication skills, 2) Trust exercises, 3) Leadership development, 4) Problem-solving scenarios, 5) Group dynamics.",
        tips: ["Specify group size", "Include skill levels", "Note time available", "Consider facility constraints"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Coaching & Athletics",
        difficulty: "Intermediate",
        tags: ["team-building", "leadership", "coaching", "development"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Performance Analysis Template",
        text: "Create a performance analysis template for [SPORT/EVENT] including: 1) Key metrics, 2) Technical benchmarks, 3) Tactical evaluation, 4) Progress tracking, 5) Feedback mechanisms.",
        tips: ["Define key performance indicators", "Include video analysis points", "Specify measurement methods", "Note comparison standards"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Coaching & Athletics",
        difficulty: "Advanced",
        tags: ["analysis", "performance", "metrics", "evaluation"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Learning & Education",
    icon: GraduationCap,
    description: "Study techniques, subject mastery, and skill development",
    prompts: [
      {
        title: "Learning Path Creation",
        text: "Create a structured learning path for [subject/skill], breaking it down into: 1) foundational concepts, 2) progressive steps, 3) practice exercises, 4) milestones. Include resource recommendations and estimated time commitments.",
        tips: ["Specify current level", "Include learning style preferences", "Note time available per week"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Learning & Education",
        difficulty: "Beginner",
        tags: ["education", "learning", "study", "planning", "skill-development"],
        useCases: ["Education", "Research", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Study Schedule Optimization",
        text: "Create an optimized study schedule for [SUBJECT/EXAM] incorporating: 1) Peak concentration times, 2) Active recall methods, 3) Spaced repetition, 4) Break intervals, 5) Review periods.",
        tips: ["Specify available study hours", "Include energy patterns", "Note deadline dates", "Consider other commitments"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Learning & Education",
        difficulty: "Intermediate",
        tags: ["study", "planning", "time-management", "education"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Memory Enhancement Techniques",
        text: "Develop a memory enhancement strategy for [SUBJECT/CONTENT] using: 1) Mnemonics creation, 2) Mind mapping, 3) Association techniques, 4) Visualization methods, 5) Active recall exercises.",
        tips: ["Specify content type", "Include learning style", "Note complexity level", "Consider time constraints"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Learning & Education",
        difficulty: "Intermediate",
        tags: ["memory", "learning", "techniques", "study"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Exam Preparation Strategy",
        text: "Design an exam preparation strategy for [SUBJECT/TEST] including: 1) Content breakdown, 2) Practice test schedule, 3) Weak area identification, 4) Review methods, 5) Final preparation checklist.",
        tips: ["List exam components", "Include available resources", "Note scoring system", "Specify preparation time"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Learning & Education",
        difficulty: "Advanced",
        tags: ["exam", "preparation", "study", "planning"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Concept Mastery Framework",
        text: "Create a framework for mastering [COMPLEX CONCEPT] through: 1) Foundational understanding, 2) Progressive complexity, 3) Real-world applications, 4) Teaching others, 5) Advanced exploration.",
        tips: ["Define prerequisite knowledge", "Include practical examples", "Note common misconceptions", "Consider assessment methods"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Learning & Education",
        difficulty: "Advanced",
        tags: ["learning", "mastery", "understanding", "education"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Cooking & Recipe Development",
    icon: Utensils,
    description: "Recipe creation, meal planning, and cooking techniques",
    prompts: [
      {
        title: "Recipe Adaptation",
        text: "Adapt this recipe for [dietary requirement/preference], maintaining similar flavors and textures. Include: ingredient substitutions, modified techniques, and any timing adjustments.",
        tips: ["List original ingredients", "Specify dietary restrictions", "Note available ingredients"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Cooking & Recipe Development",
        difficulty: "Intermediate",
        tags: ["cooking", "recipes", "dietary", "food", "meal-planning"],
        useCases: ["Problem Solving", "Creative Writing"],
        style: "Standard"
      },
      {
        title: "Weekly Meal Plan Creation",
        text: "Design a weekly meal plan considering: 1) Nutritional balance, 2) Prep time management, 3) Ingredient cross-utilization, 4) Storage optimization, 5) Budget constraints.",
        tips: ["Specify dietary preferences", "Include cooking skill level", "Note available prep time", "Consider storage space"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Cooking & Recipe Development",
        difficulty: "Intermediate",
        tags: ["meal-planning", "cooking", "organization", "nutrition"],
        useCases: ["Problem Solving", "Creative Writing"],
        style: "Standard"
      },
      {
        title: "Cooking Technique Guide",
        text: "Create a detailed guide for mastering [COOKING TECHNIQUE] including: 1) Equipment setup, 2) Temperature control, 3) Timing indicators, 4) Troubleshooting tips, 5) Practice exercises.",
        tips: ["Specify technique level", "Include equipment list", "Note common mistakes", "Consider safety measures"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Cooking & Recipe Development",
        difficulty: "Advanced",
        tags: ["cooking", "techniques", "skills", "education"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Recipe Scaling Guide",
        text: "Develop a scaling guide for [RECIPE] including: 1) Ingredient adjustments, 2) Equipment modifications, 3) Timing changes, 4) Storage considerations, 5) Quality control.",
        tips: ["Specify original yield", "Include critical ratios", "Note equipment capacity", "Consider texture changes"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Cooking & Recipe Development",
        difficulty: "Intermediate",
        tags: ["recipe", "scaling", "cooking", "planning"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Flavor Profile Development",
        text: "Create a flavor development guide for [CUISINE/DISH] including: 1) Key ingredients, 2) Seasoning combinations, 3) Balance principles, 4) Tasting progression, 5) Adjustment techniques.",
        tips: ["Specify cuisine style", "Include taste elements", "Note seasonal variations", "Consider cultural authenticity"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Cooking & Recipe Development",
        difficulty: "Advanced",
        tags: ["flavor", "cooking", "development", "culinary"],
        useCases: ["Creative Writing", "Education"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Luxury Retail & Fashion",
    icon: ShoppingBag,
    description: "Sales strategies, product knowledge, and client relations",
    prompts: [
      {
        title: "Product Story Development",
        text: "Create a compelling product story for [item], highlighting: 1) craftsmanship details, 2) unique features, 3) heritage elements, 4) styling versatility. Include specific talking points for luxury clientele.",
        tips: ["Include brand heritage", "Specify target client", "Note key selling points"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Luxury Retail & Fashion",
        difficulty: "Intermediate",
        tags: ["fashion", "retail", "sales", "luxury", "marketing"],
        useCases: ["Marketing", "Creative Writing", "Business"],
        style: "Standard"
      },
      {
        title: "Client Wardrobe Consultation",
        text: "Create a wardrobe consultation framework for [CLIENT TYPE] including: 1) Style assessment, 2) Lifestyle analysis, 3) Color profiling, 4) Investment pieces, 5) Seasonal planning.",
        tips: ["Define client preferences", "Include lifestyle needs", "Note budget range", "Consider climate factors"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Luxury Retail & Fashion",
        difficulty: "Advanced",
        tags: ["fashion", "consulting", "styling", "luxury"],
        useCases: ["Creative Writing", "Business"],
        style: "Standard"
      },
      {
        title: "Visual Merchandising Plan",
        text: "Design a visual merchandising strategy for [LUXURY BRAND/COLLECTION] including: 1) Display concepts, 2) Product storytelling, 3) Space utilization, 4) Lighting design, 5) Customer journey.",
        tips: ["Specify brand identity", "Include seasonal theme", "Note target audience", "Consider store layout"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Luxury Retail & Fashion",
        difficulty: "Intermediate",
        tags: ["retail", "merchandising", "luxury", "design"],
        useCases: ["Creative Writing", "Business"],
        style: "Standard"
      },
      {
        title: "Client Experience Protocol",
        text: "Develop a luxury client experience protocol including: 1) Welcome sequence, 2) Needs assessment, 3) Product presentation, 4) Service personalization, 5) Follow-up strategy.",
        tips: ["Define service standards", "Include communication guidelines", "Note VIP considerations", "Consider cultural nuances"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Luxury Retail & Fashion",
        difficulty: "Advanced",
        tags: ["luxury", "service", "client-relations", "retail"],
        useCases: ["Business", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Collection Launch Strategy",
        text: "Create a launch strategy for [LUXURY COLLECTION] including: 1) Pre-launch activities, 2) Client segmentation, 3) Event planning, 4) Digital integration, 5) Sales team preparation.",
        tips: ["Specify collection theme", "Include key dates", "Note exclusivity factors", "Consider market positioning"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Luxury Retail & Fashion",
        difficulty: "Advanced",
        tags: ["luxury", "marketing", "launch", "strategy"],
        useCases: ["Marketing", "Business"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Gardening & Plant Care",
    icon: Flower2,
    description: "Plant cultivation, garden planning, and maintenance",
    prompts: [
      {
        title: "Garden Planning",
        text: "Design a [season] garden plan for [space dimensions] considering: 1) plant combinations, 2) growth patterns, 3) maintenance needs, 4) seasonal transitions. Include companion planting suggestions.",
        tips: ["Specify climate zone", "Include sun exposure", "Note soil conditions"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Gardening & Plant Care",
        difficulty: "Beginner",
        tags: ["gardening", "plants", "landscaping", "planning", "maintenance"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Plant Propagation Guide",
        text: "Create a propagation guide for [PLANT TYPE] including: 1) Method selection, 2) Timing considerations, 3) Material preparation, 4) Care requirements, 5) Troubleshooting steps.",
        tips: ["Specify plant variety", "Include seasonal timing", "Note success indicators", "Consider environmental factors"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Gardening & Plant Care",
        difficulty: "Intermediate",
        tags: ["gardening", "propagation", "plants", "cultivation"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Garden Maintenance Schedule",
        text: "Design a comprehensive maintenance schedule for [GARDEN TYPE] including: 1) Regular tasks, 2) Seasonal activities, 3) Pest management, 4) Fertilization plan, 5) Pruning calendar.",
        tips: ["List plant varieties", "Include climate zone", "Note water requirements", "Consider growth patterns"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Gardening & Plant Care",
        difficulty: "Intermediate",
        tags: ["gardening", "maintenance", "planning", "schedule"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Indoor Plant Care System",
        text: "Develop a care system for [INDOOR PLANT COLLECTION] including: 1) Light management, 2) Watering schedule, 3) Humidity control, 4) Nutrition plan, 5) Health monitoring.",
        tips: ["Specify plant types", "Include light conditions", "Note space limitations", "Consider air quality"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Gardening & Plant Care",
        difficulty: "Beginner",
        tags: ["indoor-plants", "care", "maintenance", "gardening"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Garden Design Blueprint",
        text: "Create a detailed garden design for [SPACE/STYLE] including: 1) Plant selection, 2) Layout planning, 3) Hardscape elements, 4) Water features, 5) Lighting design.",
        tips: ["Define garden style", "Include site analysis", "Note budget constraints", "Consider maintenance needs"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Gardening & Plant Care",
        difficulty: "Advanced",
        tags: ["garden-design", "landscaping", "planning", "creativity"],
        useCases: ["Creative Writing", "Problem Solving"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Language & Translation",
    icon: Languages,
    description: "Language learning, translation, and cultural understanding",
    prompts: [
      {
        title: "Language Learning Plan",
        text: "Create a personalized study plan for learning [language] from [current level] to [target level]. Include: daily activities, resource recommendations, and progress milestones.",
        tips: ["Specify time commitment", "Include learning goals", "Note preferred methods"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Language & Translation",
        difficulty: "Beginner",
        tags: ["language", "learning", "translation", "study", "culture"],
        useCases: ["Education", "Translation"],
        style: "Standard"
      }
    ]
  },
  {
    name: 'Creative Writing',
    icon: BookOpen,
    description: 'Story development, content creation, and writing techniques',
    prompts: [
      {
        title: 'Story Development',
        text: 'Help me develop a story about [THEME/CONCEPT]. Include: character development, plot structure, key scenes, and narrative arc.',
        tips: ["Define genre and tone", "Describe main characters", "Outline key plot points", "Note target audience"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Creative Writing",
        difficulty: "Intermediate",
        tags: ["writing", "creativity", "storytelling", "content"],
        useCases: ["Creative Writing", "Writing"],
        style: "Standard"
      }
    ]
  },
  {
    name: 'Personal Development',
    icon: Brain,
    description: 'Goal setting, habit formation, and personal growth strategies',
    prompts: [
      {
        title: 'Goal Achievement Plan',
        text: 'Create a structured plan to achieve [GOAL] within [TIMEFRAME]. Include: milestones, habits to develop, potential obstacles, and progress tracking methods.',
        tips: ["Specify your goal clearly", "Include current situation", "Note available resources", "Define success criteria"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Personal Development",
        difficulty: "Beginner",
        tags: ["goals", "planning", "self-improvement", "habits"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      }
    ]
  },
  {
    name: 'Travel Planning',
    icon: Map,
    description: 'Trip planning, itinerary creation, and travel tips',
    prompts: [
      {
        title: 'Travel Itinerary Creation',
        text: 'Help plan a [DURATION] trip to [DESTINATION] for [TRAVELER_TYPE]. Include: daily activities, accommodations, transportation, and local experiences.',
        tips: ["Specify travel dates", "Include interests/preferences", "Note budget constraints", "Mention must-see attractions"],
        bestTools: ["ChatGPT", "Perplexity"],
        category: "Travel Planning",
        difficulty: "Beginner",
        tags: ["travel", "planning", "itinerary", "tourism"],
        useCases: ["Problem Solving", "Research"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Arts & Creativity",
    icon: Palette,
    description: "Visual arts, design, and creative expression",
    prompts: [
      {
        title: "Art Project Planning",
        text: "Design a creative project plan for [MEDIUM/STYLE]. Include: 1) Concept development, 2) Material requirements, 3) Technique exploration, 4) Timeline, 5) Presentation strategy.",
        tips: ["Define artistic vision", "List required materials", "Specify techniques to explore", "Consider presentation format"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Arts & Creativity",
        difficulty: "Intermediate",
        tags: ["art", "creativity", "design", "planning"],
        useCases: ["Creative Writing", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Design Composition Guide",
        text: "Create a composition guide for [ARTWORK TYPE]. Analyze: 1) Color theory, 2) Layout principles, 3) Visual hierarchy, 4) Balance and harmony, 5) Focal points.",
        tips: ["Specify design style", "Include color palette", "Note composition rules", "Consider audience impact"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Arts & Creativity",
        difficulty: "Advanced",
        tags: ["design", "composition", "art", "visual"],
        useCases: ["Creative Writing", "Education"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Music & Performance",
    icon: Music,
    description: "Musical composition, practice, and performance preparation",
    prompts: [
      {
        title: "Practice Routine Development",
        text: "Create a structured practice routine for [INSTRUMENT/VOICE]. Include: 1) Warm-up exercises, 2) Technical drills, 3) Repertoire practice, 4) Performance preparation, 5) Cool-down.",
        tips: ["Specify skill level", "Include time allocations", "List specific pieces", "Note technical focus areas"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Music & Performance",
        difficulty: "Intermediate",
        tags: ["music", "practice", "performance", "routine"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Performance Preparation Guide",
        text: "Develop a performance preparation plan for [PIECE/CONCERT]. Cover: 1) Technical mastery, 2) Interpretation development, 3) Memory work, 4) Stage presence, 5) Pre-performance routine.",
        tips: ["List performance pieces", "Include rehearsal schedule", "Note challenging sections", "Consider venue acoustics"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Music & Performance",
        difficulty: "Advanced",
        tags: ["music", "performance", "preparation", "stage"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Photography techniques, composition, and post-processing",
    prompts: [
      {
        title: "Photo Shoot Planning",
        text: "Plan a photo shoot for [SUBJECT/STYLE]. Detail: 1) Location scouting, 2) Equipment needs, 3) Lighting setup, 4) Shot list, 5) Post-processing workflow.",
        tips: ["Define shoot concept", "List required gear", "Consider lighting conditions", "Plan backup options"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Photography",
        difficulty: "Intermediate",
        tags: ["photography", "planning", "composition", "lighting"],
        useCases: ["Creative Writing", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Post-Processing Workflow",
        text: "Create a post-processing workflow for [PHOTO STYLE]. Include: 1) Basic adjustments, 2) Color grading, 3) Retouching steps, 4) Special effects, 5) Export settings.",
        tips: ["Specify software used", "List adjustment order", "Include preset creation", "Note backup strategy"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Photography",
        difficulty: "Advanced",
        tags: ["photography", "editing", "post-processing", "workflow"],
        useCases: ["Creative Writing", "Problem Solving"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Public Speaking",
    icon: Mic,
    description: "Speech preparation, delivery, and presentation skills",
    prompts: [
      {
        title: "Speech Structure Development",
        text: "Create a structure for a [SPEECH TYPE] speech on [TOPIC]. Include: 1) Opening hook, 2) Main points, 3) Supporting evidence, 4) Audience engagement, 5) Memorable conclusion.",
        tips: ["Define key message", "Include anecdotes", "Plan audience interaction", "Consider time limit"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Public Speaking",
        difficulty: "Intermediate",
        tags: ["speaking", "presentation", "communication", "speech"],
        useCases: ["Writing", "Education"],
        style: "Standard"
      },
      {
        title: "Presentation Design Guide",
        text: "Design a presentation for [TOPIC/AUDIENCE]. Plan: 1) Visual layout, 2) Content flow, 3) Slide transitions, 4) Visual aids, 5) Speaker notes.",
        tips: ["Consider audience background", "Include data visualization", "Plan interactive elements", "Note technical requirements"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Public Speaking",
        difficulty: "Intermediate",
        tags: ["presentation", "design", "speaking", "visual"],
        useCases: ["Writing", "Problem Solving"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Interior Design",
    icon: Home,
    description: "Space planning, decoration, and room styling",
    prompts: [
      {
        title: "Room Design Concept",
        text: "Create a design concept for [ROOM TYPE]. Include: 1) Color scheme, 2) Furniture layout, 3) Lighting plan, 4) Material selection, 5) Accessory styling.",
        tips: ["Specify room dimensions", "Note existing features", "Include budget constraints", "Consider traffic flow"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Interior Design",
        difficulty: "Intermediate",
        tags: ["interior", "design", "decoration", "space-planning"],
        useCases: ["Creative Writing", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Space Optimization Plan",
        text: "Develop a space optimization plan for [ROOM/AREA]. Address: 1) Storage solutions, 2) Multi-functional furniture, 3) Zone planning, 4) Visual tricks, 5) Circulation paths.",
        tips: ["List storage needs", "Include measurement details", "Note lifestyle requirements", "Consider natural light"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Interior Design",
        difficulty: "Intermediate",
        tags: ["interior", "space-planning", "organization", "design"],
        useCases: ["Problem Solving", "Creative Writing"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Financial Planning",
    icon: DollarSign,
    description: "Personal finance, budgeting, and investment strategy",
    prompts: [
      {
        title: "Budget Planning System",
        text: "Create a comprehensive budget plan for [INCOME/LIFESTYLE]. Include: 1) Income allocation, 2) Expense categories, 3) Savings goals, 4) Debt management, 5) Emergency fund.",
        tips: ["List all income sources", "Include fixed expenses", "Set realistic goals", "Plan for contingencies"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Financial Planning",
        difficulty: "Intermediate",
        tags: ["finance", "budgeting", "planning", "money-management"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Investment Strategy Development",
        text: "Develop an investment strategy for [GOALS/TIMEFRAME]. Consider: 1) Risk tolerance, 2) Asset allocation, 3) Investment vehicles, 4) Rebalancing schedule, 5) Tax efficiency.",
        tips: ["Define investment goals", "Specify time horizon", "Note risk preferences", "Consider tax implications"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Financial Planning",
        difficulty: "Advanced",
        tags: ["finance", "investing", "strategy", "planning"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Career Development",
    icon: Briefcase,
    description: "Career planning, professional growth, and skill development",
    prompts: [
      {
        title: "Career Transition Plan",
        text: "Create a career transition plan for moving from [CURRENT ROLE] to [TARGET ROLE]. Include: 1) Skill gap analysis, 2) Learning roadmap, 3) Networking strategy, 4) Experience building, 5) Timeline.",
        tips: ["List transferable skills", "Include industry research", "Set milestone goals", "Plan networking events"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Career Development",
        difficulty: "Advanced",
        tags: ["career", "professional", "planning", "development"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Professional Brand Development",
        text: "Develop a professional branding strategy for [INDUSTRY/ROLE]. Plan: 1) Personal value proposition, 2) Online presence, 3) Content strategy, 4) Network building, 5) Reputation management.",
        tips: ["Define target audience", "Include platform strategy", "Plan content calendar", "Set engagement goals"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Career Development",
        difficulty: "Intermediate",
        tags: ["branding", "career", "professional", "networking"],
        useCases: ["Writing", "Problem Solving"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Wellness & Mindfulness",
    icon: Heart,
    description: "Mental health, meditation, and holistic well-being practices",
    prompts: [
      {
        title: "Meditation Practice Design",
        text: "Create a progressive meditation practice for [GOAL/EXPERIENCE LEVEL] including: 1) Breathing techniques, 2) Guided sessions, 3) Duration progression, 4) Environment setup, 5) Progress tracking.",
        tips: ["Specify meditation style", "Include time availability", "Note current experience", "Consider practice environment"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Wellness & Mindfulness",
        difficulty: "Beginner",
        tags: ["meditation", "mindfulness", "wellness", "mental-health"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Stress Management Plan",
        text: "Develop a comprehensive stress management plan including: 1) Trigger identification, 2) Coping strategies, 3) Daily practices, 4) Emergency responses, 5) Support systems.",
        tips: ["List stress sources", "Include available time", "Note preferred methods", "Consider lifestyle factors"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Wellness & Mindfulness",
        difficulty: "Intermediate",
        tags: ["stress", "management", "wellness", "mental-health"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Morning Routine Design",
        text: "Create a mindful morning routine including: 1) Wake-up ritual, 2) Movement practice, 3) Mindfulness exercises, 4) Intention setting, 5) Energy management.",
        tips: ["Specify wake time", "Include available duration", "Note energy patterns", "Consider household schedule"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Wellness & Mindfulness",
        difficulty: "Beginner",
        tags: ["routine", "mindfulness", "wellness", "morning"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Emotional Intelligence Development",
        text: "Design a program for developing emotional intelligence focusing on: 1) Self-awareness exercises, 2) Emotion regulation, 3) Empathy building, 4) Social skills, 5) Relationship management.",
        tips: ["Include assessment methods", "Note current challenges", "Specify practice scenarios", "Consider feedback mechanisms"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Wellness & Mindfulness",
        difficulty: "Intermediate",
        tags: ["emotional-intelligence", "personal-growth", "relationships", "self-awareness"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Sleep Optimization Protocol",
        text: "Create a sleep optimization protocol including: 1) Evening routine, 2) Environment setup, 3) Relaxation techniques, 4) Sleep hygiene practices, 5) Morning transition.",
        tips: ["Specify desired sleep schedule", "Include current habits", "Note environmental factors", "Consider lifestyle impacts"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Wellness & Mindfulness",
        difficulty: "Intermediate",
        tags: ["sleep", "wellness", "health", "routine"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Event Planning",
    icon: Calendar,
    description: "Comprehensive event organization and management",
    prompts: [
      {
        title: "Event Timeline Creation",
        text: "Create a detailed timeline for [EVENT TYPE] including: 1) Planning phases, 2) Vendor coordination, 3) Setup schedule, 4) Event flow, 5) Breakdown plan.",
        tips: ["Specify event date", "Include guest count", "Note venue details", "Consider weather contingencies"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Event Planning",
        difficulty: "Intermediate",
        tags: ["events", "planning", "organization", "management"],
        useCases: ["Problem Solving", "Business"],
        style: "Standard"
      },
      {
        title: "Budget Management System",
        text: "Create a comprehensive budget management system for [EVENT TYPE] including: 1) Cost categories, 2) Vendor payments, 3) Contingency planning, 4) Cash flow tracking, 5) Final reconciliation.",
        tips: ["Specify total budget", "Include payment schedules", "Note deposit requirements", "Consider hidden costs"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Event Planning",
        difficulty: "Advanced",
        tags: ["budget", "events", "planning", "finance"],
        useCases: ["Problem Solving", "Business"],
        style: "Standard"
      },
      {
        title: "Vendor Coordination Plan",
        text: "Develop a vendor coordination plan for [EVENT] including: 1) Communication protocols, 2) Delivery schedules, 3) Setup coordination, 4) Emergency backups, 5) Breakdown logistics.",
        tips: ["List all vendors", "Include contact details", "Note dependencies", "Consider timing conflicts"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Event Planning",
        difficulty: "Intermediate",
        tags: ["events", "coordination", "logistics", "management"],
        useCases: ["Problem Solving", "Business"],
        style: "Standard"
      },
      {
        title: "Guest Experience Design",
        text: "Design the guest experience for [EVENT TYPE] including: 1) Arrival sequence, 2) Flow management, 3) Entertainment timing, 4) Comfort considerations, 5) Departure planning.",
        tips: ["Specify guest demographics", "Include special needs", "Note venue layout", "Consider weather impacts"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Event Planning",
        difficulty: "Intermediate",
        tags: ["events", "experience", "hospitality", "planning"],
        useCases: ["Creative Writing", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Event Marketing Strategy",
        text: "Create a marketing strategy for [EVENT] including: 1) Target audience analysis, 2) Promotion channels, 3) Content calendar, 4) Engagement tactics, 5) Success metrics.",
        tips: ["Define target audience", "Include budget allocation", "Note key deadlines", "Consider competition"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Event Planning",
        difficulty: "Advanced",
        tags: ["marketing", "events", "promotion", "strategy"],
        useCases: ["Marketing", "Business"],
        style: "Standard"
      }
    ]
  },
  {
    name: "Parenting & Child Development",
    icon: Heart,
    description: "Child development, education, and parenting strategies",
    prompts: [
      {
        title: "Age-Appropriate Activity Plan",
        text: "Create an activity plan for [AGE GROUP] focusing on: 1) Developmental goals, 2) Learning through play, 3) Social interaction, 4) Motor skills, 5) Creative expression.",
        tips: ["Specify age range", "Include attention span", "Note available materials", "Consider safety factors"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Parenting & Child Development",
        difficulty: "Beginner",
        tags: ["parenting", "activities", "development", "education"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Behavior Management Strategy",
        text: "Design a positive behavior management strategy for [SPECIFIC CHALLENGE] including: 1) Prevention techniques, 2) Communication methods, 3) Consequence system, 4) Reinforcement plan, 5) Progress tracking.",
        tips: ["Describe specific behaviors", "Include child's age", "Note current approaches", "Consider family dynamics"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Parenting & Child Development",
        difficulty: "Intermediate",
        tags: ["parenting", "behavior", "discipline", "development"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Educational Milestone Tracking",
        text: "Create a developmental milestone tracking system for [AGE RANGE] including: 1) Key indicators, 2) Assessment methods, 3) Progress documentation, 4) Support activities, 5) Professional consultation triggers.",
        tips: ["List age-appropriate milestones", "Include observation methods", "Note typical ranges", "Consider individual differences"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Parenting & Child Development",
        difficulty: "Intermediate",
        tags: ["development", "education", "milestones", "tracking"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      },
      {
        title: "Family Routine Development",
        text: "Design a family routine for [FAMILY SITUATION] that includes: 1) Daily schedules, 2) Responsibility sharing, 3) Quality time allocation, 4) Transition management, 5) Flexibility considerations.",
        tips: ["Specify family composition", "Include work/school schedules", "Note special needs", "Consider seasonal changes"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Parenting & Child Development",
        difficulty: "Intermediate",
        tags: ["family", "routine", "organization", "parenting"],
        useCases: ["Problem Solving", "Education"],
        style: "Standard"
      },
      {
        title: "Learning Environment Design",
        text: "Create a home learning environment plan for [AGE/STAGE] including: 1) Space organization, 2) Material selection, 3) Activity zones, 4) Safety measures, 5) Rotation schedule.",
        tips: ["Specify available space", "Include budget constraints", "Note learning goals", "Consider storage needs"],
        bestTools: ["ChatGPT", "Gemini"],
        category: "Parenting & Child Development",
        difficulty: "Beginner",
        tags: ["education", "environment", "learning", "organization"],
        useCases: ["Education", "Problem Solving"],
        style: "Standard"
      }
    ]
  }
] 