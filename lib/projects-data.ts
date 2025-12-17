export type Industry = "all" | "fintech" | "healthcare" | "retail" | "logistics" | "enterprise"

export interface Project {
  id: string
  slug: string
  industry: Industry
  status: "Live" | "In Development"
  title: string
  subtitle?: string
  outcome: string
  tags: readonly string[]
  features: readonly string[]
  description: string
  fullDescription?: string
  benefits?: readonly string[]
  modules?: readonly {
    title: string
    description: string
    icon: string
  }[]
  icon: string
}

export const projectsData: readonly Project[] = [
  {
    id: "applite-xgen",
    slug: "applite-xgen-banking-solution",
    industry: "fintech",
    status: "Live",
    title: "Applite - XGen Banking Solution",
    subtitle: "Microfinance",
    outcome: "Modular microfinance platform enabling rapid product launches and seamless operations",
    tags: ["Microservices", "API-First", "Cloud & On-Premise"],
    features: [
      "Client & Group Management with unique customer identification",
      "Centralized Product Configuration for rapid market launches",
      "Integrated Accounting Engine meeting regulatory requirements",
      "Credit Risk Management with scoring tools",
      "NPA Management with built-in collection module",
      "Digitalization tools with SMS & Mobile App integration",
      "Anytime anywhere banking through multiple channels",
      "Real-time customer information & insightful reports",
      "Open API ecosystem for seamless integration",
    ],
    description:
      "Applite is a banking solution made up of small, independent components that work together seamlessly. It is also a comprehensive microfinance solution with all the features and functionality you need to succeed.",
    fullDescription:
      "Applite is a microservice/modular solution with an extensive set of APIs, which allows users to choose the business functions they need and integrate them through a workflow module. This means that you can customize Applite to meet your business needs quickly and easily. Configuring Applite to meet your needs is like playing LOGO, where you can pick and choose the right shapes to create your perfect home.",
    benefits: [
      "Anytime anywhere banking through multiple channels",
      "Real-time, complete customer information",
      "Product builder",
      "Manage Growth with proven scalability",
      "Drive collaboration with ecosystem through open API",
      "Insightful reports for better decision making",
    ],
    modules: [
      {
        title: "Client & Group Management",
        description:
          "Customer is the heart of Client & Group Management. Each customer is uniquely identified which allows you to access the risk associated with the customer and provide appropriate financial service to them. Client & Group Management supports individual, corporate as well as group customers.",
        icon: "👥",
      },
      {
        title: "Portfolio Management",
        description:
          "Success of any financial institution depends on how quickly it can launch a product in the market. With our centralized product configuration feature, you will be able to quickly launch a wide range of deposit and loan products to market.",
        icon: "📊",
      },
      {
        title: "Accounting",
        description:
          "Accounting features a robust accounting engine which is fully integrated with the product engine and meets the regulatory requirements.",
        icon: "📖",
      },
      {
        title: "Credit Risk Management",
        description:
          "Credit Risk Management support integration with external credit scoring tool and also features criteria based credit scoring tool to identify potential risk.",
        icon: "💳",
      },
      {
        title: "NPA Management",
        description:
          "NPA Management has a built in collection module to track and manage recovery of bad loans.",
        icon: "📈",
      },
      {
        title: "Digitalization Tool",
        description:
          "Digitalization Tool also support SMS integration, Field application for collection and client mobile app.",
        icon: "📱",
      },
    ],
    icon: "💰",
  },
  {
    id: "predixarena",
    slug: "predixarena-knowledge-meets-opportunity",
    industry: "fintech",
    status: "In Development",
    title: "PredixArena – Where Knowledge Meets Opportunity",
    outcome: "A prediction and insights platform where community intelligence powers better decisions.",
    tags: ["Prediction Markets", "Analytics", "Community"],
    features: [
      "Engaging discussions and predictions across politics, sports, and global events",
      "Tools tailored for predictors to showcase analytical skills",
      "Analyst-focused views for deeper trend and pattern analysis",
      "Transparent environment where knowledge and opportunity converge",
      "Community-driven insights to surface the wisdom of the crowd",
      "Structured markets for events with clear outcomes",
    ],
    description:
      "PredixArena is a platform designed to facilitate engaging discussions and predictions on topics like politics, sports, and global events, allowing users to turn their insights into meaningful predictions.",
    fullDescription:
      "PredixArena brings together predictors and analysts in a single, transparent environment where knowledge meets opportunity. Predictors can make informed calls on upcoming events and showcase their analytical skills, while analysts access comprehensive data and tools to understand market behaviour, trends, and sentiment. The platform is built around the idea that collective intelligence — when structured and surfaced correctly — leads to better forecasting and decision-making.",
    benefits: [
      "Make informed predictions on a wide range of real-world events.",
      "Leverage community sentiment and market data instead of guessing in isolation.",
      "Access advanced analytics and trend views tailored for analysts.",
      "Stay updated with real-time event outcomes and market movements.",
      "Engage with a diverse community to refine perspectives and strategies.",
      "Use a transparent, structured environment where every prediction and outcome is trackable.",
    ],
    icon: "🎯",
  },
] as const

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug)
}

export function getProjectsByIndustry(industry: Industry): readonly Project[] {
  if (industry === "all") return projectsData
  return projectsData.filter((project) => project.industry === industry)
}

