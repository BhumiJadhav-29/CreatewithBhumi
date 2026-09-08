export type ProjectCategory = 'all' | 'web' | 'ai' | 'iot' | 'java';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'ai' | 'iot' | 'java';
  type: string;
  status: 'Completed' | 'In Progress' | 'Research Award';
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveLink?: string;
  githubLink?: string;
  highlights?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  iconName?: string;
  description?: string;
  category: 'Frontend' | 'Backend & Languages' | 'AI & IoT' | 'Database & Tools';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  usdPrice: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  suitableFor: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  message: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
