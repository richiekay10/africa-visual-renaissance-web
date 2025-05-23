
import { PenTool, Smartphone, Layout, ShoppingBag, FileText, Image, BriefcaseIcon, ChartBar, Printer, Edit } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  details: string[];
  image?: string;
  textOnly?: boolean;
  iconName: string;
}

// This function will create the icon element when used in a React component
export const getServiceIcon = (iconName: string, size = 36): JSX.Element => {
  const icons: Record<string, LucideIcon> = {
    PenTool,
    Smartphone,
    Layout,
    ShoppingBag,
    FileText,
    Image,
    BriefcaseIcon,
    ChartBar,
    Printer,
    Edit
  };
  
  const IconComponent = icons[iconName];
  // We'll handle this in the component that uses this file
  return IconComponent ? <IconComponent size={size} className="text-primary" /> : <></>;
};

export const services: ServiceItem[] = [
  {
    title: "Brand Identity & Strategy",
    description: "We create distinctive brand identities that capture your essence and connect with your audience.",
    details: [
      "Logo Design & Visual Identity Systems",
      "Brand Guidelines & Style Documentation",
      "Naming & Positioning",
      "Brand Strategy & Creative Direction"
    ],
    image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&q=80",
    iconName: "PenTool"
  },
  {
    title: "Packaging & Product Design",
    description: "We develop product packaging that stands out on shelves and resonates with consumers.",
    details: [
      "Product Packaging & Label Design",
      "Packaging Prototypes",
      "Retail-Ready Design Solutions"
    ],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80",
    iconName: "ShoppingBag"
  },
  {
    title: "Web Design & Development",
    description: "We craft engaging digital experiences that are both beautiful and functional.",
    details: [
      "Responsive Website Design",
      "E-Commerce Development",
      "Custom Web Applications",
      "UX/UI Design for Web & Mobile",
      "Wireframes, Prototypes & Usability Testing"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    iconName: "Layout"
  },
  {
    title: "Digital Design & Social Media",
    description: "We create compelling digital content that engages audiences across platforms.",
    details: [
      "Social Media Graphics & Campaign Assets",
      "Email Marketing Designs",
      "Banner Ads & Display Graphics",
      "Motion Graphics & Animated Content",
      "Content Planning, Scheduling & Community Management"
    ],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80",
    iconName: "Smartphone"
  },
  {
    title: "Content Creation",
    description: "We produce high-quality content that tells your brand's story effectively.",
    details: [
      "Copywriting for Brands & Campaigns",
      "Photography (Product, Lifestyle, Events)",
      "Video Production & Editing",
      "Explainer Videos & Branded Visual Stories"
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    iconName: "FileText"
  },
  {
    title: "Consulting & Training",
    description: "We share our expertise to help your team excel in creative and strategic endeavors.",
    details: [
      "Brand & Digital Strategy Consulting",
      "UX/UI Design Training",
      "Design Thinking & Creative Workshops",
      "Visual Merchandising Strategy"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    iconName: "BriefcaseIcon"
  },
  {
    title: "Marketing & SEO",
    description: "We develop effective strategies to increase your brand's visibility and reach.",
    details: [
      "Digital Marketing Strategy",
      "Search Engine Optimization (On-Page & Off-Page)",
      "Keyword Research & SEO Audits",
      "Analytics, Reporting & Performance Tracking"
    ],
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80",
    iconName: "ChartBar"
  },
  {
    title: "Print & Production",
    description: "We create high-quality print materials that represent your brand with excellence.",
    details: [
      "Brochures, Flyers, Posters & Editorial Layouts",
      "Annual Reports & Corporate Publications",
      "Print Production Management & Quality Control",
      "Environmental Graphics & Space Branding"
    ],
    textOnly: true,
    iconName: "Printer"
  },
  {
    title: "Event Branding & Experience",
    description: "We create cohesive visual systems that make your events memorable.",
    details: [
      "Event Logo & Visual Identity",
      "Event Collateral & Signage Design",
      "Branded Merchandise & Promotional Materials",
      "Wayfinding Systems & Booth Design"
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    iconName: "Edit"
  },
  {
    title: "Illustration & Custom Art",
    description: "We create unique illustrations and custom artwork that bring your ideas to life.",
    details: [
      "Editorial & Conceptual Illustrations",
      "Infographics & Data Visuals",
      "Hand-drawn & Vector Artworks"
    ],
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80",
    iconName: "Image"
  }
];
