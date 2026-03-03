export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Subject {
  icon: string;
  name: string;
}

export interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  role: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  emoji: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}