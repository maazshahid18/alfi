export const site = {
  name: "Alfi Builders & Developers",
  shortName: "alfi",
  tagline: "Known for quality & commitment",
  url: "https://alfibuilders.com",
  description:
    "Known for quality and commitment since 2009. Residential, commercial, institutional, and infrastructure across India.",
  established: 2009,
  location: "Gaya, India",
  email: "sajid.alfi@gmail.com",
  phone: "+91 90069 13858",
  phoneHref: "tel:+919006913858",
  address: "Bageecha The Party Lawn, Professor's Colony, Gaya",
  postal: "P.O. Box 823001, Gaya",
  heroImage: "/images/hero.jpeg",
  bageecha: {
    name: "Bageecha The Party Lawn",
    url: "https://bageecha.alfibuilders.com",
    description: "Our signature venue space in Gaya — events, gatherings, and celebrations.",
  },
  social: {
    facebook: "https://facebook.com/alfibuilders",
    twitter: "https://twitter.com/alfi_builders",
    instagram: "https://instagram.com/officialalfibuilders",
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
] as const;

export const externalLinks = [
  {
    href: site.bageecha.url,
    label: "Bageecha",
    external: true,
  },
] as const;

export type GalleryCategory =
  | "all"
  | "residential"
  | "commercial"
  | "institutional"
  | "infrastructure";

export type GalleryItem = {
  id: string;
  type: "photo" | "video";
  src: string;
  poster?: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  location?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g01",
    type: "photo",
    src: "/images/gallery/substation-angul.jpeg",
    title: "132/33KV Substation — Angul",
    category: "infrastructure",
    location: "Orissa",
  },
  {
    id: "g02",
    type: "photo",
    src: "/images/gallery/substation-gaya.jpeg",
    title: "132KV Extension Bay — Gaya",
    category: "infrastructure",
    location: "Bihar",
  },
  {
    id: "g03",
    type: "photo",
    src: "/images/gallery/steel-fabrication.jpeg",
    title: "Steel Fabrication & Erection",
    category: "infrastructure",
  },
  {
    id: "g04",
    type: "photo",
    src: "/images/gallery/substation-bodhgaya.jpeg",
    title: "132/33KV Substation — Bodhgaya",
    category: "infrastructure",
    location: "Bihar",
  },
  {
    id: "g05",
    type: "photo",
    src: "/images/gallery/structural-talchar.jpeg",
    title: "Structural Works — Talchar",
    category: "infrastructure",
    location: "Orissa",
  },
  {
    id: "g06",
    type: "photo",
    src: "/images/gallery/building-interior.jpeg",
    title: "Building Construction — Interior",
    category: "commercial",
  },
  {
    id: "g07",
    type: "photo",
    src: "/images/gallery/site-survey.jpeg",
    title: "Site Survey & Engineering",
    category: "infrastructure",
  },
  {
    id: "g08",
    type: "photo",
    src: "/images/gallery/construction-team.jpeg",
    title: "On-Site Construction Team",
    category: "infrastructure",
  },
  {
    id: "g09",
    type: "photo",
    src: "/images/gallery/equipment-fleet.jpeg",
    title: "Equipment & Machinery Fleet",
    category: "infrastructure",
  },
  {
    id: "g10",
    type: "photo",
    src: "/images/gallery/civil-works.jpeg",
    title: "Civil Engineering Works",
    category: "infrastructure",
  },
  // Add videos by placing files in public/videos/ and entries like:
  // { id: "v01", type: "video", src: "/videos/site-walkthrough.mp4", poster: "/images/gallery/site-survey.jpeg", title: "Site Walkthrough", category: "residential", location: "Gaya" },
];

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "institutional", label: "Institutional" },
  { id: "infrastructure", label: "Infrastructure" },
];

export const marqueeItems = [
  "Safety First",
  "Quality Delivery",
  "Progress Must",
  "Known for Quality & Commitment",
  "An Organisation Built on Trust",
  "Witness Your Classic in the Making",
] as const;

export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Works Delivered" },
  { value: 9, suffix: "", label: "Major Clients" },
] as const;

export const pillars = [
  {
    title: "Vision",
    text: "A regional market leader in civil engineering and building construction services.",
  },
  {
    title: "Mission",
    text: "World-class engineering construction — efficient, affordable, sustainable, and of the highest quality.",
  },
  {
    title: "Values",
    text: "Professionalism, integrity, creativity, and delivery that surpasses expectations.",
  },
] as const;

export const services = [
  {
    num: "01",
    title: "Building Construction",
    description:
      "Vast experience constructing high-rise and low-rise residential buildings, commercial complexes, and institutional facilities including universities and hospitals.",
    image: "/images/service-building.jpeg",
  },
  {
    num: "02",
    title: "Civil & Structural Engineering",
    description:
      "Steel structure erection, reinforced concrete works, road construction in gravel, paving blocks, concrete, and bitumen with associated drainage structures.",
    image: "/images/service-civil.jpeg",
  },
  {
    num: "03",
    title: "Power Infrastructure",
    description:
      "Civil works for power substations — earthworks, transformer foundations, control buildings, boundary walls, drainages, and access roads.",
    image: "/images/project-01.jpeg",
  },
  {
    num: "04",
    title: "Fabrication & Erection",
    description:
      "Precision steel fabrication and erection work for industrial and structural projects, delivered with safety and engineering excellence.",
    image: "/images/project-03.jpeg",
  },
  {
    num: "05",
    title: "Construction Project Management",
    description:
      "End-to-end project planning, scheduling, and coordination to keep developments on track, on budget, and aligned with client vision.",
    image: "/images/about-survey.jpeg",
  },
] as const;

export const projects = [
  {
    num: "01",
    title: "132/33KV Power Substation",
    client: "Power Grid Corporation Limited (PGCIL)",
    location: "Angul, Orissa",
    scope: "Civil & structural works scope.",
    tag: "Infrastructure",
    image: "/images/project-01.jpeg",
  },
  {
    num: "02",
    title: "132KV Takeoff Extension Bay",
    client: "Bihar Grid Company Limited (BGCIL)",
    location: "Khizarsarai, Gaya",
    scope: "Civil & structural works scope.",
    tag: "Power Grid",
    image: "/images/project-02.jpeg",
  },
  {
    num: "03",
    title: "Fabrication & Erection",
    client: "Industrial Structural Works",
    location: "Multi-site",
    scope: "Steel structure fabrication and erection for large-scale industrial facilities.",
    tag: "Structural",
    image: "/images/project-03.jpeg",
  },
  {
    num: "04",
    title: "132/33KV Power Substation",
    client: "Power Grid Corporation India Limited (PGCIL)",
    location: "Bodhgaya-Gaya, Bihar",
    scope: "Civil & structural works.",
    tag: "Infrastructure",
    image: "/images/project-04.jpeg",
  },
  {
    num: "05",
    title: "Structural Project",
    client: "Talchar Fertilizer Limited",
    location: "Angul, Orissa",
    scope: "Large-scale steel structural works.",
    tag: "Industrial",
    image: "/images/project-05.jpeg",
  },
] as const;

export const categories = [
  {
    icon: "🏠",
    title: "Residential",
    description:
      "Individual apartments and low-to-high-rise residential developments built to last.",
  },
  {
    icon: "🏢",
    title: "Commercial",
    description:
      "Office complexes, retail spaces, and mixed-use developments with modern standards.",
  },
  {
    icon: "🎓",
    title: "Institutional",
    description:
      "University buildings, hospitals, and public facilities that serve communities.",
  },
  {
    icon: "⚡",
    title: "Infrastructure",
    description:
      "Power substations, transmission lines, roads, and civil engineering structures.",
  },
] as const;

export const clients = [
  "Power Grid Corporation of India",
  "L&T Infotech",
  "ABB",
  "Siemens Energy",
  "Bharat Heavy Electricals",
  "Bihar Grid Company",
  "Stelmec",
  "Raj Construction",
  "Dee Vee Projects",
] as const;

export const capacityItems = [
  "Earth Movers & Transport",
  "Concrete & Reinforcement",
  "Survey & Precision Tools",
  "Light Machinery",
] as const;