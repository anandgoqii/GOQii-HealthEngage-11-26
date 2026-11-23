import React, { useState } from 'react';
import {
  Brain,
  Code2,
  Database,
  FileCode2,
  HeartPulse,
  Layers,
  Lock,
  Monitor,
  Pill,
  Settings,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface SideCapabilityCard {
  id: string;
  title: string;
  description: string;
  targetCategoryId: string;
  layerTarget: 'app' | 'data';
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  iconBg: string;
  iconColor: string;
}

const LEFT_CARDS: SideCapabilityCard[] = [
  {
    id: 'care',
    title: 'Care',
    description: 'Digital care delivery and personalised care programs',
    targetCategoryId: 'category-01',
    layerTarget: 'app',
    icon: HeartPulse,
    iconBg: 'bg-[#E8F8F0] border-[#CDECE0]',
    iconColor: 'text-[#059669]',
  },
  {
    id: 'rpm',
    title: 'Remote (RPM)',
    description: 'Continuous monitoring and real-time insights',
    targetCategoryId: 'category-02',
    layerTarget: 'app',
    icon: Monitor,
    iconBg: 'bg-[#EBF7FD] border-[#CFE9F7]',
    iconColor: 'text-[#0284C7]',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    description: 'Habit drives, coaching and member support',
    targetCategoryId: 'category-03',
    layerTarget: 'app',
    icon: Users,
    iconBg: 'bg-[#F3EEFE] border-[#E2D6FB]',
    iconColor: 'text-[#7C3AED]',
  },
];

const RIGHT_CARDS: SideCapabilityCard[] = [
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Health programs, risk insights and better outcomes',
    targetCategoryId: 'category-04',
    layerTarget: 'app',
    icon: ShieldCheck,
    iconBg: 'bg-[#FEF6E6] border-[#FAE5B8]',
    iconColor: 'text-[#D97706]',
  },
  {
    id: 'pharma',
    title: 'Pharma',
    description: 'Patient support programs and therapy management',
    targetCategoryId: 'category-05',
    layerTarget: 'app',
    icon: Pill,
    iconBg: 'bg-[#FEEFEE] border-[#FAD5D3]',
    iconColor: 'text-[#E11D48]',
  },
  {
    id: 'data-ai',
    title: 'Data & AI',
    description: 'Unified health data, AI insights and predictive interventions',
    targetCategoryId: 'category-06',
    layerTarget: 'data',
    icon: Brain,
    iconBg: 'bg-[#EEF2FE] border-[#D7E0FC]',
    iconColor: 'text-[#2563EB]',
  },
];

interface StackLayerSpec {
  id: 'app' | 'data' | 'integration' | 'services';
  y0: number;
  label: string;
  pillText?: string;
  targetId: string;
  topFill: string;
  leftFill: string;
  rightFill: string;
  strokeColor: string;
}

const STACK_LAYERS: StackLayerSpec[] = [
  {
    id: 'services',
    y0: 266,
    label: 'Platform Services',
    pillText: 'Automation · Control · Security',
    targetId: 'category-07',
    topFill: 'url(#stack-services-top)',
    leftFill: 'url(#stack-services-left)',
    rightFill: 'url(#stack-services-right)',
    strokeColor: '#1D4ED8',
  },
  {
    id: 'integration',
    y0: 210,
    label: 'Integration Layer',
    pillText: 'APIs · Devices · FHIR/HL7',
    targetId: 'category-07',
    topFill: 'url(#stack-int-top)',
    leftFill: 'url(#stack-int-left)',
    rightFill: 'url(#stack-int-right)',
    strokeColor: '#6366F1',
  },
  {
    id: 'data',
    y0: 154,
    label: 'Data & AI Layer',
    targetId: 'category-06',
    topFill: 'url(#stack-data-top)',
    leftFill: 'url(#stack-data-left)',
    rightFill: 'url(#stack-data-right)',
    strokeColor: '#0284C7',
  },
  {
    id: 'app',
    y0: 98,
    label: 'Application Layer',
    pillText: 'Care · RPM · Engage · Insurance · Pharma',
    targetId: 'category-01',
    topFill: 'url(#stack-app-top)',
    leftFill: 'url(#stack-app-left)',
    rightFill: 'url(#stack-app-right)',
    strokeColor: '#158059',
  },
];

const BOTTOM_INFRA_ITEMS = [
  { label: 'Data & AI', icon: Database, href: '#category-06' },
  { label: 'Automation', icon: Settings, href: '#category-03' },
  { label: 'APIs', icon: Code2, href: '#category-07' },
  { label: 'Devices', icon: Smartphone, href: '#category-07' },
  { label: 'Control', icon: ShieldCheck, href: '#category-07' },
  { label: 'FHIR / HL7 ready', icon: FileCode2, href: '#platform-categories' },
  { label: 'Enterprise security', icon: Lock, href: '#platform-categories' },
];

function buildIsometricSlabPaths(y0: number, thickness: number) {
  const cx = 220;
  const W = 166;
  const D = 46;
  const R = 16; // corner chamfer radius factor

  // Top diamond path (rounded vertices)
  const topPath = `
    M ${cx - R} ${y0 - D + 4}
    Q ${cx} ${y0 - D - 2} ${cx + R} ${y0 - D + 4}
    L ${cx + W - R} ${y0 - 4}
    Q ${cx + W + 4} ${y0} ${cx + W - R} ${y0 + 4}
    L ${cx + R} ${y0 + D - 4}
    Q ${cx} ${y0 + D + 2} ${cx - R} ${y0 + D - 4}
    L ${cx - W + R} ${y0 + 4}
    Q ${cx - W - 4} ${y0} ${cx - W + R} ${y0 - 4}
    Z
  `;

  // Left beveled face
  const leftPath = `
    M ${cx - W + 2} ${y0 + 1}
    L ${cx - R} ${y0 + D - 2}
    Q ${cx} ${y0 + D + 2} ${cx} ${y0 + D + 1}
    L ${cx} ${y0 + D + thickness}
    Q ${cx - 4} ${y0 + D + thickness + 1} ${cx - R} ${y0 + D + thickness - 3}
    L ${cx - W + 4} ${y0 + thickness + 2}
    Q ${cx - W - 2} ${y0 + thickness} ${cx - W - 2} ${y0 + thickness - 6}
    L ${cx - W - 2} ${y0 + 5}
    Q ${cx - W - 2} ${y0} ${cx - W + 2} ${y0 + 1}
    Z
  `;

  // Right beveled face
  const rightPath = `
    M ${cx} ${y0 + D + 1}
    Q ${cx + 4} ${y0 + D + 1} ${cx + R} ${y0 + D - 2}
    L ${cx + W - 2} ${y0 + 1}
    Q ${cx + W + 2} ${y0} ${cx + W + 2} ${y0 + 5}
    L ${cx + W + 2} ${y0 + thickness - 6}
    Q ${cx + W + 2} ${y0 + thickness} ${cx + W - 4} ${y0 + thickness + 2}
    L ${cx + R} ${y0 + D + thickness - 3}
    Q ${cx + 4} ${y0 + D + thickness + 1} ${cx} ${y0 + D + thickness}
    Z
  `;

  return { topPath, leftPath, rightPath };
}

export const PlatformArchitectureSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleAnchorScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    const id = targetId.replace(/^#/, '');
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const capPaths = buildIsometricSlabPaths(50, 12);

  return (
    <section
      id="platform-architecture"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4FBF8] via-[#FFFFFF] to-[#F6FCF9] py-16 sm:py-20 lg:py-24 border-b border-[#E2EEE8]"
    >
      {/* Soft Organic Mint Background Accents */}
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full select-none"
      >
        <path
          d="M0 0 L 290 0 C 230 140, 120 210, 0 260 Z"
          fill="#E4F7EE"
          fillOpacity="0.65"
        />
        <path
          d="M 980 760 C 1140 690, 1290 650, 1440 620 L 1440 760 Z"
          fill="#B6EED4"
          fillOpacity="0.55"
        />
        <ellipse
          cx="720"
          cy="420"
          rx="440"
          ry="240"
          fill="#ECFBF4"
          fillOpacity="0.55"
        />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF7F2] border border-[#D4ECE0]">
            <Layers
              className="w-4 h-4 text-[#0F172A] shrink-0"
              strokeWidth={1.85}
            />
            <span className="text-xs sm:text-[13px] font-semibold text-[#0F172A]">
              Platform Architecture
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] leading-[1.12] text-[#0F172A] text-balance">
            A Composable,{' '}
            <span className="text-[#059669]">
              Connected Healthcare Platform
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#334155] leading-[1.68] max-w-2xl mx-auto">
            A modular, interoperable and secure architecture that brings
            together care, remote monitoring, engagement, insurance, pharma,
            data and AI — on a single, unified platform.
          </p>
        </div>

        {/* Main 3-Column Architecture Diagram */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* LEFT 3 DOMAIN CARDS */}
          <div className="lg:col-span-4 relative z-20 space-y-4 sm:space-y-5">
            {LEFT_CARDS.map((card) => {
              const Icon = card.icon;
              const isHighlighted = activeLayer === card.layerTarget;
              return (
                <a
                  key={card.id}
                  href={`#${card.targetCategoryId}`}
                  onClick={(e) => handleAnchorScroll(e, card.targetCategoryId)}
                  onMouseEnter={() => setActiveLayer(card.layerTarget)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group relative flex items-center gap-4 bg-white/95 backdrop-blur-xs border rounded-2xl p-4 sm:p-4.5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-150 ${
                    isHighlighted
                      ? 'border-[#2BC48A] shadow-[0_10px_28px_rgba(43,196,138,0.14)]'
                      : 'border-[#E8EDF2] hover:border-[#2BC48A]'
                  }`}
                >
                  <span
                    className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-105 ${card.iconBg} ${card.iconColor}`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.85} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[15px] font-bold text-[#0F172A]">
                      {card.title}
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed mt-0.5">
                      {card.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CENTRE: CURVED CONNECTORS + ISOMETRIC 3D ARCHITECTURE STACK */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            {/* Desktop Left & Right Curved Green Connection Lines */}
            <svg
              viewBox="0 0 120 340"
              fill="none"
              aria-hidden="true"
              className="hidden lg:block absolute -left-11 top-1/2 -translate-y-1/2 w-14 h-[300px] pointer-events-none z-10"
            >
              <path
                d="M 6 38 C 46 38, 42 170, 90 170"
                stroke="#4ADE80"
                strokeWidth="1.5"
              />
              <path
                d="M 6 170 L 116 170"
                stroke="#4ADE80"
                strokeWidth="1.5"
              />
              <path
                d="M 6 302 C 46 302, 42 170, 90 170"
                stroke="#4ADE80"
                strokeWidth="1.5"
              />
              <circle cx="6" cy="38" r="4" fill="#10B981" />
              <circle cx="6" cy="170" r="4" fill="#10B981" />
              <circle cx="6" cy="302" r="4" fill="#10B981" />
              <circle cx="68" cy="170" r="4.5" fill="#10B981" />
            </svg>

            <svg
              viewBox="0 0 120 340"
              fill="none"
              aria-hidden="true"
              className="hidden lg:block absolute -right-11 top-1/2 -translate-y-1/2 w-14 h-[300px] pointer-events-none z-10"
            >
              <path
                d="M 114 38 C 74 38, 78 170, 30 170"
                stroke="#4ADE80"
                strokeWidth="1.5"
              />
              <path
                d="M 4 170 L 114 170"
                stroke="#4ADE80"
                strokeWidth="1.5"
              />
              <path
                d="M 114 302 C 74 302, 78 170, 30 170"
                stroke="#4ADE80"
                strokeWidth="1.5"
              />
              <circle cx="114" cy="38" r="4" fill="#10B981" />
              <circle cx="114" cy="170" r="4" fill="#10B981" />
              <circle cx="114" cy="302" r="4" fill="#10B981" />
              <circle cx="52" cy="170" r="4.5" fill="#10B981" />
            </svg>

            {/* Isometric 3D Layered Architecture Stack */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[430px] mx-auto"
            >
              <svg
                viewBox="0 0 440 392"
                className="w-full h-auto drop-shadow-[0_18px_32px_rgba(15,23,42,0.12)]"
                role="img"
                aria-label="GOQii HealthEngage composable four-layer platform architecture stack"
              >
                <defs>
                  {/* Top White Cap */}
                  <linearGradient id="stack-cap-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#F1F5F9" />
                  </linearGradient>

                  {/* Layer 1: Application Layer (Emerald Green) */}
                  <linearGradient id="stack-app-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6EE7B7" />
                    <stop offset="100%" stopColor="#2BC48A" />
                  </linearGradient>
                  <linearGradient id="stack-app-left" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                  <linearGradient id="stack-app-right" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>

                  {/* Layer 2: Data & AI Layer (Cyan Blue) */}
                  <linearGradient id="stack-data-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7DD3FC" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                  <linearGradient id="stack-data-left" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#0369A1" />
                  </linearGradient>
                  <linearGradient id="stack-data-right" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>

                  {/* Layer 3: Integration Layer (Periwinkle Violet) */}
                  <linearGradient id="stack-int-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C4B5FD" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="stack-int-left" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5B5CE6" />
                    <stop offset="100%" stopColor="#4338CA" />
                  </linearGradient>
                  <linearGradient id="stack-int-right" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7C7CF8" />
                    <stop offset="100%" stopColor="#A5B4FC" />
                  </linearGradient>

                  {/* Layer 4: Platform Services (Royal Cobalt Blue) */}
                  <linearGradient id="stack-services-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="stack-services-left" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                  <linearGradient id="stack-services-right" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>

                {/* Subtle Concentric Mint Ground Rings */}
                <ellipse
                  cx="220"
                  cy="332"
                  rx="202"
                  ry="48"
                  fill="none"
                  stroke="#A7F3D0"
                  strokeWidth="1.25"
                />
                <ellipse
                  cx="220"
                  cy="332"
                  rx="184"
                  ry="41"
                  fill="none"
                  stroke="#6EE7B7"
                  strokeWidth="1.15"
                  strokeDasharray="4 4"
                />

                {/* Render 4 Isometric Stack Slabs (Bottom-to-Top) */}
                {STACK_LAYERS.map((layer) => {
                  const { topPath, leftPath, rightPath } =
                    buildIsometricSlabPaths(layer.y0, 42);
                  const isLayerActive = activeLayer === layer.id;

                  return (
                    <g
                      key={layer.id}
                      onMouseEnter={() => setActiveLayer(layer.id)}
                      onMouseLeave={() => setActiveLayer(null)}
                      onClick={() => {
                        const el = document.getElementById(layer.targetId);
                        if (el) {
                          el.scrollIntoView({
                            behavior: prefersReducedMotion ? 'auto' : 'smooth',
                          });
                        }
                      }}
                      className="cursor-pointer transition-opacity duration-150"
                      opacity={activeLayer && !isLayerActive ? 0.9 : 1}
                    >
                      {/* Top Face */}
                      <path d={topPath} fill={layer.topFill} />
                      {/* Left Bevel Face */}
                      <path d={leftPath} fill={layer.leftFill} />
                      {/* Right Bevel Face */}
                      <path d={rightPath} fill={layer.rightFill} />

                      {/* Left Face Icon + Layer Label (Aligned to 15.5 deg isometric angle) */}
                      <g transform={`translate(68, ${layer.y0 + 18}) skewY(15.5)`}>
                        <rect
                          x="0"
                          y="0"
                          width="15"
                          height="15"
                          rx="3.5"
                          fill="rgba(255,255,255,0.18)"
                          stroke="rgba(255,255,255,0.65)"
                          strokeWidth="1.1"
                        />
                        <circle cx="5" cy="5.5" r="1.4" fill="#FFFFFF" />
                        <circle cx="10" cy="5.5" r="1.4" fill="#FFFFFF" />
                        <circle cx="5" cy="10" r="1.4" fill="#FFFFFF" />
                        <circle cx="10" cy="10" r="1.4" fill="#FFFFFF" />
                        <text
                          x="22"
                          y="11.5"
                          fill="#FFFFFF"
                          fontSize="12"
                          fontWeight="600"
                          fontFamily="Poppins, sans-serif"
                        >
                          {layer.label}
                        </text>
                      </g>

                      {/* Right Face White Pill Tag (Aligned to -15.5 deg isometric angle) */}
                      {layer.pillText && (
                        <g
                          transform={`translate(230, ${layer.y0 + 57}) skewY(-15.5)`}
                        >
                          <rect
                            x="0"
                            y="0"
                            width="144"
                            height="21"
                            rx="10.5"
                            fill="rgba(255,255,255,0.94)"
                          />
                          <text
                            x="72"
                            y="13.5"
                            textAnchor="middle"
                            fill="#0F172A"
                            fontSize={layer.id === 'app' ? '7.1' : '8.2'}
                            fontWeight="600"
                            fontFamily="Poppins, sans-serif"
                          >
                            {layer.pillText}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* Top Floating White Cap with GOQii HealthEngage Brand */}
                <g>
                  <path
                    d={capPaths.leftPath}
                    fill="#E2E8F0"
                  />
                  <path
                    d={capPaths.rightPath}
                    fill="#CBD5E1"
                  />
                  <path
                    d={capPaths.topPath}
                    fill="url(#stack-cap-top)"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />

                  {/* Crisp GOQii HealthEngage Brand Lockup on Top Cap */}
                  <g transform="translate(136, 35)">
                    <rect x="0" y="2" width="11" height="11" rx="2" fill="#F97316" />
                    <rect x="13" y="2" width="11" height="11" rx="2" fill="#EF4444" />
                    <rect x="0" y="15" width="11" height="11" rx="2" fill="#3B82F6" />
                    <rect x="13" y="15" width="11" height="11" rx="2" fill="#2BC48A" />
                    <text
                      x="32"
                      y="13"
                      fill="#0F172A"
                      fontSize="14"
                      fontWeight="700"
                      fontFamily="Poppins, sans-serif"
                    >
                      GOQii
                    </text>
                    <text
                      x="32"
                      y="27"
                      fill="#0F172A"
                      fontSize="13.5"
                      fontWeight="700"
                      fontFamily="Poppins, sans-serif"
                    >
                      HealthEngage
                    </text>
                  </g>
                </g>
              </svg>
            </motion.div>
          </div>

          {/* RIGHT 3 DOMAIN CARDS */}
          <div className="lg:col-span-4 relative z-20 space-y-4 sm:space-y-5">
            {RIGHT_CARDS.map((card) => {
              const Icon = card.icon;
              const isHighlighted = activeLayer === card.layerTarget;
              return (
                <a
                  key={card.id}
                  href={`#${card.targetCategoryId}`}
                  onClick={(e) => handleAnchorScroll(e, card.targetCategoryId)}
                  onMouseEnter={() => setActiveLayer(card.layerTarget)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group relative flex items-center gap-4 bg-white/95 backdrop-blur-xs border rounded-2xl p-4 sm:p-4.5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-150 ${
                    isHighlighted
                      ? 'border-[#2BC48A] shadow-[0_10px_28px_rgba(43,196,138,0.14)]'
                      : 'border-[#E8EDF2] hover:border-[#2BC48A]'
                  }`}
                >
                  <span
                    className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-105 ${card.iconBg} ${card.iconColor}`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.85} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[15px] font-bold text-[#0F172A]">
                      {card.title}
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed mt-0.5">
                      {card.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Floating White Infrastructure Bar */}
        <div className="relative z-30 mt-10 lg:mt-12 bg-white/95 backdrop-blur-xs border border-[#E8EDF2] rounded-2xl shadow-[0_12px_36px_rgba(15,23,42,0.06)] px-5 py-4 sm:py-5">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-4 gap-y-3 lg:gap-x-0 lg:divide-x lg:divide-[#E2E8F0]">
            {BOTTOM_INFRA_ITEMS.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorScroll(e, item.href)}
                  className={`inline-flex items-center justify-center gap-1.5 xl:gap-2 text-xs xl:text-[13px] font-medium text-[#0F172A] hover:text-[#059669] transition-colors whitespace-nowrap lg:px-2 xl:px-3.5 lg:flex-1 ${
                    idx === 0 ? 'lg:pl-0' : ''
                  } ${idx === BOTTOM_INFRA_ITEMS.length - 1 ? 'lg:pr-0' : ''}`}
                >
                  <ItemIcon
                    className="w-4 h-4 text-[#0F172A] shrink-0"
                    strokeWidth={1.75}
                  />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
