export const site = {
  name: "ALFI Builders & Developers",
  shortName: "alfi",
  tagline: "Known for quality & commitment",
  url: "https://alfibuilders.com",
  description:
    "ALFI Builders & Developers is a trusted name in the construction industry, delivering high-quality residential, commercial, and interior solutions with honesty, transparency and timely delivery.",
  descriptionLines: [
    "ALFI Builders & Developers is a trusted name in the construction industry,",
    "delivering high-quality residential, commercial, and interior solutions with honesty, transparency and timely delivery.",
  ],
  established: 2009,
  location: "Gaya, Bihar",
  email: "Alfibuilder1@gmail.com",
  phone: "+91 90069 13858",
  phoneHref: "tel:+919006913858",
  address: "Bageecha The Party Lawn, Gaya, Bihar",
  postal: "P.O. Box 823001, Gaya",
  heroImage: "/images/hero.jpeg",
  commitmentQuote: "Building Today, Better Tomorrow.",
  social: {
    facebook: "https://facebook.com/alfibuilders",
    twitter: "https://twitter.com/alfi_builders",
    instagram: "https://instagram.com/officialalfibuilders",
  },
} as const;

//console
export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-alfi", label: "Why ALFI" },
  { href: "#contact", label: "Contact" },
] as const;

export const servicesSection = {
  tag: "Our Services",
  title: "Complete Construction Solutions",
  subtitle:
    "From concept to completion, we provide end-to-end construction and development services tailored to your needs.",
} as const;

export const services = [
  {
    title: "Residential Construction",
    image: "/images/project-01.jpeg",
    items: [
      "Independent Houses",
      "Villas",
      "Apartment Buildings",
      "Row Houses & Duplexes",
      "Renovation & Remodeling",
    ],
  },
  {
    title: "Commercial Construction",
    image: "/images/project-02.jpeg",
    items: [
      "Office Buildings",
      "Retail Spaces",
      "Commercial Complexes",
      "Showrooms",
      "Mixed-Use Developments",
    ],
  },
  {
    title: "Interior Solutions",
    image: "/images/gallery/building-interior.jpeg",
    items: [
      "Home Interiors",
      "Office Interiors",
      "Turnkey Interior Projects",
      "Space Planning",
      "Modular Solutions",
    ],
  },
  {
    title: "Project Management",
    image: "/images/gallery/construction-team.jpeg",
    items: [
      "Planning & Execution",
      "Cost Management",
      "Site Supervision",
      "Quality Control",
      "Documentation & Reporting",
    ],
  },
] as const;

export const whyChoose = [
  "Experienced & dedicated team",
  "High-quality materials",
  "Modern construction techniques",
  "Transparent communication",
  "Timely project delivery",
  "Competitive pricing",
  "Long-term support",
] as const;

export const workProcess = [
  {
    step: "01",
    icon: "💬",
    title: "Consultation",
    text: "Understanding your needs",
  },
  {
    step: "02",
    icon: "📐",
    title: "Planning & Design",
    text: "Creating smart and practical solutions",
  },
  {
    step: "03",
    icon: "👷",
    title: "Execution",
    text: "Quality construction with strict supervision",
  },
  {
    step: "04",
    icon: "✅",
    title: "Handover",
    text: "On-time delivery with complete satisfaction",
  },
] as const;

export const commitment = {
  title: "Our Commitment",
  text: "We are committed to delivering structures that are safe, durable, and built to last. Every project we undertake reflects our values of integrity, quality, and excellence.",
} as const;

export const contactSection = {
  tag: "Contact Us",
  title: "Let's Build",
  titleEm: "Something Great Together",
  lead: "Whether it's your dream home, a new business space, or a complete interior makeover, we are here to turn your vision into reality.",
} as const;