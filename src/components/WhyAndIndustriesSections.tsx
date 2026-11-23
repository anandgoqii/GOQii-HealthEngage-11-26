import React, { useState } from 'react';
import {
  Brain,
  Building2,
  Check,
  Database,
  HeartPulse,
  Layers,
  Pill,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  Watch,
} from 'lucide-react';
import { INDUSTRY_MEDIA } from '../data/mediaAssets';

interface WhyBenefitItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  renderVisual: () => React.ReactNode;
}

const UnifiedLayersVisual = () => (
  <svg
    viewBox="0 0 132 128"
    fill="none"
    aria-hidden="true"
    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-24 lg:h-24 xl:w-[116px] xl:h-[112px] shrink-0 select-none drop-shadow-[0_10px_14px_rgba(15,23,42,0.08)]"
  >
    <defs>
      <linearGradient id="why-layer-bottom" x1="20" y1="74" x2="112" y2="112" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60B6FF" />
        <stop offset="100%" stopColor="#1D6FE8" />
      </linearGradient>
      <linearGradient id="why-layer-mid" x1="20" y1="50" x2="112" y2="88" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7DEEFF" />
        <stop offset="100%" stopColor="#15BAE6" />
      </linearGradient>
      <linearGradient id="why-layer-top" x1="20" y1="24" x2="112" y2="62" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A9F5BA" />
        <stop offset="100%" stopColor="#2BC48A" />
      </linearGradient>
    </defs>

    {/* Soft Ground Glow */}
    <ellipse cx="66" cy="112" rx="40" ry="8" fill="#BAE6FD" fillOpacity="0.45" />

    {/* Bottom Azure Tile */}
    <path
      d="M66 64 L112 83 C115 84.3 115 88.2 112 89.5 L69.5 107.2 C67.3 108.1 64.7 108.1 62.5 107.2 L20 89.5 C17 88.2 17 84.3 20 83 Z"
      fill="#1558C4"
    />
    <path
      d="M62.5 59.5 C64.7 58.6 67.3 58.6 69.5 59.5 L112 77.2 C115 78.5 115 82.4 112 83.7 L69.5 101.4 C67.3 102.3 64.7 102.3 62.5 101.4 L20 83.7 C17 82.4 17 78.5 20 77.2 Z"
      fill="url(#why-layer-bottom)"
    />

    {/* Middle Cyan Tile */}
    <path
      d="M66 43 L112 62 C115 63.3 115 67.2 112 68.5 L69.5 86.2 C67.3 87.1 64.7 87.1 62.5 86.2 L20 68.5 C17 67.2 17 63.3 20 62 Z"
      fill="#0D96C4"
    />
    <path
      d="M62.5 38.5 C64.7 37.6 67.3 37.6 69.5 38.5 L112 56.2 C115 57.5 115 61.4 112 62.7 L69.5 80.4 C67.3 81.3 64.7 81.3 62.5 80.4 L20 62.7 C17 61.4 17 57.5 20 56.2 Z"
      fill="url(#why-layer-mid)"
    />

    {/* Top Mint Tile */}
    <path
      d="M66 22 L112 41 C115 42.3 115 46.2 112 47.5 L69.5 65.2 C67.3 66.1 64.7 66.1 62.5 65.2 L20 47.5 C17 46.2 17 42.3 20 41 Z"
      fill="#199F6E"
    />
    <path
      d="M62.5 17.5 C64.7 16.6 67.3 16.6 69.5 17.5 L112 35.2 C115 36.5 115 40.4 112 41.7 L69.5 59.4 C67.3 60.3 64.7 60.3 62.5 59.4 L20 41.7 C17 40.4 17 36.5 20 35.2 Z"
      fill="url(#why-layer-top)"
    />
    {/* Subtle Gloss Highlight */}
    <path
      d="M46 27 L66 19.5 L86 27.5 L66 36 Z"
      fill="white"
      fillOpacity="0.24"
    />
  </svg>
);

const ScalableApiVisual = () => (
  <div
    aria-hidden="true"
    className="w-[112px] sm:w-[132px] lg:w-[116px] xl:w-[136px] shrink-0 flex flex-col items-center select-none pt-1"
  >
    {/* API Cloud */}
    <div className="relative">
      <svg viewBox="0 0 112 58" className="w-[104px] h-[54px]" fill="none">
        <path
          d="M27 48 H85 C95.5 48 103 40.8 103 31.8 C103 23.6 96.4 16.8 87.9 16 C84.4 7.7 75.7 2 65.4 2 C53.4 2 43.4 9.7 41 20.1 C38.8 19.3 36.4 18.9 33.9 18.9 C23.4 18.9 15 26.8 15 36.5 C15 43 20.2 48 27 48 Z"
          fill="#F4FCF8"
          stroke="#1BA36E"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <text
          x="59"
          y="33"
          textAnchor="middle"
          fill="#0F8255"
          fontSize="15"
          fontWeight="700"
          fontFamily="Poppins, sans-serif"
          letterSpacing="0.03em"
        >
          API
        </text>
      </svg>
    </div>

    {/* Dashed Connector Tree */}
    <svg viewBox="0 0 120 22" className="w-full h-[20px] -mt-1" fill="none">
      <line x1="60" y1="0" x2="60" y2="21" stroke="#68D3A8" strokeWidth="1.5" strokeDasharray="3 2.5" />
      <path d="M22 21 V11 H98 V21" stroke="#68D3A8" strokeWidth="1.5" strokeDasharray="3 2.5" />
    </svg>

    {/* 3 Endpoints: Device, Clinical Heart, Database */}
    <div className="grid grid-cols-3 gap-1.5 w-full">
      <div className="h-9 rounded-lg bg-[#F5FBF8] border border-[#D3EDE0] flex items-center justify-center text-[#059669] shadow-2xs">
        <Watch className="w-4 h-4" strokeWidth={1.8} />
      </div>
      <div className="h-9 rounded-lg bg-[#F5FBF8] border border-[#D3EDE0] flex items-center justify-center text-[#059669] shadow-2xs">
        <HeartPulse className="w-4 h-4" strokeWidth={1.8} />
      </div>
      <div className="h-9 rounded-lg bg-[#F5FBF8] border border-[#D3EDE0] flex items-center justify-center text-[#059669] shadow-2xs">
        <Database className="w-4 h-4" strokeWidth={1.8} />
      </div>
    </div>
  </div>
);

const AiLaptopVisual = () => (
  <div
    aria-hidden="true"
    className="w-[124px] sm:w-[144px] lg:w-[126px] xl:w-[152px] shrink-0 select-none self-end pt-2"
  >
    <div className="relative">
      {/* Screen Shell */}
      <div className="rounded-t-lg border-[2.5px] border-[#1E293B] bg-white overflow-hidden shadow-[0_8px_18px_rgba(15,23,42,0.12)]">
        {/* Top Browser Bar */}
        <div className="h-3 bg-[#F1F5F9] border-b border-[#E2E8F0] px-1.5 flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <span className="w-1 h-1 rounded-full bg-[#2BC48A]" />
            <span className="text-[5px] font-bold text-[#0F172A]">GOQii HealthEngage</span>
          </div>
          <span className="text-[4.5px] font-medium text-[#64748B]">Overview</span>
        </div>

        {/* Mini Dashboard Canvas */}
        <div className="grid grid-cols-12 h-[66px]">
          {/* Dark Navy Sidebar */}
          <div className="col-span-3 bg-[#0C2B27] p-1 space-y-1">
            <div className="h-1.5 rounded-[2px] bg-[#2BC48A]" />
            <div className="h-1 rounded-[2px] bg-white/25 w-4/5" />
            <div className="h-1 rounded-[2px] bg-white/20 w-3/4" />
            <div className="h-1 rounded-[2px] bg-white/20 w-4/5" />
            <div className="h-1 rounded-[2px] bg-white/15 w-2/3" />
          </div>

          {/* Analytics Body */}
          <div className="col-span-9 p-1.5 bg-[#FAFCFB] flex flex-col justify-between">
            <div className="flex items-center justify-between gap-1">
              {/* Green Area Chart */}
              <div className="flex-1 bg-white border border-[#E2E8F0] rounded p-1 h-[36px] flex flex-col justify-between">
                <span className="text-[5px] font-semibold text-[#0F172A] leading-none">
                  Platform Overview
                </span>
                <svg viewBox="0 0 60 20" className="w-full h-5" fill="none">
                  <defs>
                    <linearGradient id="why-laptop-area" x1="0" y1="0" x2="0" y2="20" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2BC48A" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#2BC48A" stopOpacity="0.03" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M1 17 Q 14 14, 24 11 T 42 7 T 59 2 V19 H1 Z"
                    fill="url(#why-laptop-area)"
                  />
                  <path
                    d="M1 17 Q 14 14, 24 11 T 42 7 T 59 2"
                    stroke="#059669"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 78 Score Ring */}
              <div className="w-8 h-[36px] bg-white border border-[#E2E8F0] rounded flex flex-col items-center justify-center shrink-0">
                <div className="w-5 h-5 rounded-full border-[2.5px] border-[#059669] border-t-[#D1FAE5] flex items-center justify-center">
                  <span className="text-[5.5px] font-bold text-[#0F172A] tabular-nums">78</span>
                </div>
                <span className="text-[4px] text-[#64748B] mt-0.5">Score</span>
              </div>
            </div>

            {/* Bottom Mini Bars */}
            <div className="grid grid-cols-3 gap-1">
              <div className="h-3 rounded-[2px] bg-[#E8F8F0] border border-[#CBECE0]" />
              <div className="h-3 rounded-[2px] bg-[#E8F8F0] border border-[#CBECE0]" />
              <div className="h-3 rounded-[2px] bg-[#E8F8F0] border border-[#CBECE0]" />
            </div>
          </div>
        </div>
      </div>

      {/* Silver Laptop Base */}
      <div className="h-2 bg-gradient-to-b from-[#CBD5E1] to-[#94A3B8] rounded-b-md -mx-1.5 relative flex items-center justify-center shadow-sm">
        <div className="w-6 h-0.5 rounded-full bg-[#64748B]/50" />
      </div>
    </div>
  </div>
);

const MemberPhoneVisual = () => (
  <div
    aria-hidden="true"
    className="w-[82px] sm:w-[92px] lg:w-[84px] xl:w-[98px] shrink-0 select-none flex justify-center self-end -mb-1"
  >
    <div className="w-[84px] rounded-[16px] border-[3px] border-[#1E293B] bg-white shadow-[0_10px_22px_rgba(15,23,42,0.14)] overflow-hidden transform rotate-[6deg]">
      {/* Notch */}
      <div className="pt-1 pb-0.5 flex justify-center bg-[#F8FAFC]">
        <div className="w-7 h-1 rounded-full bg-[#1E293B]" />
      </div>

      {/* App Content */}
      <div className="px-2 pt-1 pb-2 text-center space-y-1.5">
        <div className="text-[6.5px] font-bold text-[#0F172A]">My Health</div>

        {/* 10,000 Steps Ring */}
        <div className="mx-auto w-12 h-12 rounded-full border-[3.5px] border-[#059669] border-l-[#D1FAE5] flex flex-col items-center justify-center bg-[#F5FBF8]">
          <span className="text-[8.5px] font-bold text-[#0F172A] leading-none tabular-nums">
            10,000
          </span>
          <span className="text-[5px] text-[#059669] font-semibold mt-0.5">Steps</span>
        </div>

        {/* Mini Daily Progress Bars */}
        <div className="flex items-end justify-center gap-1 h-4 pt-0.5">
          <span className="w-1.5 h-2 rounded-t-[1.5px] bg-[#A7F3D0]" />
          <span className="w-1.5 h-3 rounded-t-[1.5px] bg-[#6EE7B7]" />
          <span className="w-1.5 h-2.5 rounded-t-[1.5px] bg-[#34D399]" />
          <span className="w-1.5 h-4 rounded-t-[1.5px] bg-[#059669]" />
          <span className="w-1.5 h-3.5 rounded-t-[1.5px] bg-[#10B981]" />
          <span className="w-1.5 h-4 rounded-t-[1.5px] bg-[#059669]" />
        </div>
      </div>
    </div>
  </div>
);

const SecurityShieldVisual = () => (
  <svg
    viewBox="0 0 116 116"
    fill="none"
    aria-hidden="true"
    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[88px] lg:h-[88px] xl:w-[104px] xl:h-[104px] shrink-0 select-none"
  >
    <defs>
      <linearGradient id="why-shield-main" x1="28" y1="22" x2="88" y2="96" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#65E4A3" />
        <stop offset="55%" stopColor="#1DB878" />
        <stop offset="100%" stopColor="#097D4F" />
      </linearGradient>
    </defs>

    {/* Soft Concentric Halo Shields */}
    <path
      d="M58 10 L98 25 V54 C98 79 81 98 58 108 C35 98 18 79 18 54 V25 L58 10 Z"
      fill="#DCF5E8"
      fillOpacity="0.65"
    />
    <path
      d="M58 16 L90 28 V53 C90 74 76 90 58 99 C40 90 26 74 26 53 V28 L58 16 Z"
      fill="#BCECD4"
      fillOpacity="0.7"
    />

    {/* Core Glossy Green Shield */}
    <path
      d="M58 22 L83 31.5 V52.5 C83 69.5 72 83 58 90.5 C44 83 33 69.5 33 52.5 V31.5 L58 22 Z"
      fill="url(#why-shield-main)"
    />
    {/* Gloss Left Highlight */}
    <path
      d="M58 22 L33 31.5 V52.5 C33 69.5 44 83 58 90.5 V22 Z"
      fill="white"
      fillOpacity="0.14"
    />

    {/* White Lock Body + Shackle */}
    <path
      d="M51.5 51 V46.5 C51.5 42.9 54.4 40 58 40 C61.6 40 64.5 42.9 64.5 46.5 V51"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <rect x="47.5" y="50.5" width="21" height="16.5" rx="3.5" fill="white" />
    <circle cx="58" cy="57.5" r="2" fill="#097D4F" />
    <path d="M58 58.5 V62" stroke="#097D4F" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const OutcomesChartVisual = () => (
  <svg
    viewBox="0 0 132 104"
    fill="none"
    aria-hidden="true"
    className="w-[104px] sm:w-[120px] lg:w-[108px] xl:w-[128px] shrink-0 select-none self-end"
  >
    <defs>
      <linearGradient id="why-bar-grad" x1="0" y1="24" x2="0" y2="96" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#94ECC0" />
        <stop offset="50%" stopColor="#2BC48A" />
        <stop offset="100%" stopColor="#097D4F" />
      </linearGradient>
    </defs>

    {/* Subtle Floor Shadow */}
    <ellipse cx="68" cy="95" rx="54" ry="5" fill="#D1FAE5" fillOpacity="0.65" />

    {/* 5 Rising Bars */}
    <rect x="14" y="76" width="15" height="17" rx="3" fill="#B9F0D6" />
    <rect x="35" y="65" width="15" height="28" rx="3" fill="#82E3B5" />
    <rect x="56" y="52" width="15" height="41" rx="3" fill="#46D39A" />
    <rect x="77" y="38" width="15" height="55" rx="3" fill="url(#why-bar-grad)" />
    <rect x="98" y="23" width="16" height="70" rx="3" fill="#0A8A58" />

    {/* Rising Trajectory Arrow */}
    <path
      d="M18 65 Q 64 46, 108 11"
      stroke="#059669"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M99 10 L110 9.5 L108.5 20.5"
      stroke="#059669"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WHY_BENEFIT_CARDS: WhyBenefitItem[] = [
  {
    id: 'unified-modular',
    title: 'Unified & Modular',
    description:
      'A single, composable platform across care, remote, engagement, insurance, pharma and AI.',
    href: '#platform-architecture',
    icon: Target,
    renderVisual: () => <UnifiedLayersVisual />,
  },
  {
    id: 'scalable-interoperable',
    title: 'Scalable & Interoperable',
    description:
      'Built for enterprise scale with open APIs, device interoperability and FHIR/HL7 standards.',
    href: '#category-07',
    icon: TrendingUp,
    renderVisual: () => <ScalableApiVisual />,
  },
  {
    id: 'ai-powered-data-driven',
    title: 'AI-Powered & Data-Driven',
    description:
      'Turn health data into real-time insights, risk prediction and personalised interventions.',
    href: '#category-06',
    icon: Brain,
    renderVisual: () => <AiLaptopVisual />,
  },
  {
    id: 'member-centric-engagement',
    title: 'Member-Centric Engagement',
    description:
      'Drive lasting behaviour change with coaching, programs, challenges and personalised journeys.',
    href: '#category-03',
    icon: Users,
    renderVisual: () => <MemberPhoneVisual />,
  },
  {
    id: 'secure-compliant',
    title: 'Secure & Compliant',
    description:
      'Enterprise-grade security with data privacy, consent management and regulatory readiness.',
    href: '#platform-overview',
    icon: ShieldCheck,
    renderVisual: () => <SecurityShieldVisual />,
  },
  {
    id: 'measurable-outcomes',
    title: 'Measurable Outcomes',
    description:
      'Deliver better population health, higher program participation and a stronger ROI.',
    href: '#module-architecture',
    icon: TrendingUp,
    renderVisual: () => <OutcomesChartVisual />,
  },
];

export const WhyGoqiiSection: React.FC = () => {
  return (
    <section
      id="why-goqii-healthengage"
      className="relative overflow-hidden bg-gradient-to-b from-[#F1FBF6] via-[#F7FCFA] to-[#F2FBF7] py-16 sm:py-20 lg:py-24 border-b border-[#DCECE4]"
    >
      {/* Subtle Organic Mint Wave Background */}
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full select-none"
      >
        <path
          d="M0 0 L340 0 C250 110, 125 145, 0 165 Z"
          fill="#D4F3E4"
          fillOpacity="0.7"
        />
        <path
          d="M1120 0 L1440 0 V210 C1310 155, 1215 80, 1120 0 Z"
          fill="#D4F3E4"
          fillOpacity="0.6"
        />
        <path
          d="M0 725 C280 690, 560 715, 860 735 C1120 752, 1300 715, 1440 685 L1440 760 L0 760 Z"
          fill="#BCEFD7"
          fillOpacity="0.75"
        />
        <path
          d="M0 742 C320 715, 680 748, 1020 726 C1210 714, 1340 732, 1440 718 L1440 760 L0 760 Z"
          fill="#9AE8C4"
          fillOpacity="0.65"
        />
      </svg>

      {/* Subtle Top-Left Dot Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-4 w-32 h-20 opacity-35 [background-image:radial-gradient(#2BC48A_1.5px,transparent_1.5px)] [background-size:14px_14px]"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F7EE] border border-[#CDECE0]">
            <Star className="w-4 h-4 text-[#059669]" strokeWidth={2} />
            <span className="text-xs sm:text-[13px] font-semibold text-[#0F172A]">
              Why GOQii HealthEngage
            </span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-[-0.025em] leading-[1.12] text-[#0F172A] text-balance">
            Why GOQii <span className="text-[#059669]">HealthEngage</span>
          </h2>

          <p className="text-sm sm:text-base text-[#334155] leading-[1.68] max-w-2xl mx-auto">
            A proven, enterprise-grade platform that combines care, technology
            and intelligence to deliver measurable health outcomes at scale.
          </p>
        </div>

        {/* Benefits Cards: Horizontal Snap Carousel on Mobile, 3x2 Grid on Tablet/Desktop */}
        <div className="flex items-center justify-end gap-1.5 text-[11px] font-medium text-[#64748B] mb-2.5 md:hidden">
          <span>Swipe to explore</span>
          <span aria-hidden="true">→</span>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-pl-4 sm:scroll-pl-6 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 pb-4 md:pb-0 no-scrollbar">
          {WHY_BENEFIT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={card.href}
                className="group relative shrink-0 w-[85%] min-[420px]:w-[78%] sm:w-[60%] md:w-auto snap-start bg-white rounded-2xl border border-[#E4ECEF] hover:border-[#2BC48A] shadow-[0_12px_32px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_38px_rgba(5,150,105,0.10)] p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
              >
                {/* Card Top Header: Mint Square Icon + Title */}
                <div className="flex items-center gap-3 mb-3.5">
                  <span className="w-10 h-10 rounded-xl bg-[#E8F8F0] border border-[#D2EFE1] text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[#059669] group-hover:text-white group-hover:border-[#059669] transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1.85} />
                  </span>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0F172A] leading-snug group-hover:text-[#059669] transition-colors">
                    {card.title}
                  </h3>
                </div>

                {/* Card Body: Left Description + Right Bespoke Visual */}
                <div className="flex flex-col min-[360px]:flex-row items-end justify-between gap-3 flex-1">
                  <p className="text-[13px] sm:text-sm text-[#334155] leading-[1.62] self-start pt-0.5 min-w-0 flex-1">
                    {card.description}
                  </p>
                  {card.renderVisual()}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface IndustriesSectionProps {
  onSelectIndustry: (industryTitle: string) => void;
}

interface IndustryPathCard {
  id: string;
  mediaKey: string;
  title: string;
  industryBriefingTitle: string;
  description: string;
  highlights: string[];
  iconBg: string;
  iconColor: string;
  checklistBg: string;
  checklistBorder: string;
  renderIcon: () => React.ReactNode;
}

const HospitalCrossIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.85}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

const INDUSTRY_PATH_CARDS: IndustryPathCard[] = [
  {
    id: 'employers',
    mediaKey: 'employers',
    title: 'Employers',
    industryBriefingTitle: 'Employers',
    description:
      'Healthier, more resilient workforces with measurable business impact.',
    highlights: [
      'Workforce health programs',
      'Risk & population insights',
      'Engagement & habit change',
    ],
    iconBg: 'bg-[#E9F9F1]',
    iconColor: 'text-[#059669]',
    checklistBg: 'bg-[#EFFAF4]',
    checklistBorder: 'border-[#DCEFE6]',
    renderIcon: () => <Users className="w-6 h-6" strokeWidth={1.85} />,
  },
  {
    id: 'hospitals-clinics',
    mediaKey: 'hospitals-clinics',
    title: 'Hospitals & Health Systems',
    industryBriefingTitle: 'Hospitals & Health Systems',
    description:
      'Extend care beyond hospital walls with connected, continuous care.',
    highlights: [
      'Care coordination & follow-up',
      'Remote monitoring (RPM)',
      'Better outcomes & adherence',
    ],
    iconBg: 'bg-[#EBF7FD]',
    iconColor: 'text-[#0EA5E9]',
    checklistBg: 'bg-[#F0F9FE]',
    checklistBorder: 'border-[#DCEEF9]',
    renderIcon: () => <HospitalCrossIcon />,
  },
  {
    id: 'insurers',
    mediaKey: 'insurers',
    title: 'Insurers',
    industryBriefingTitle: 'Insurers',
    description:
      'Drive risk reduction, better member outcomes and operational efficiency.',
    highlights: [
      'Preventive health programs',
      'Member engagement at scale',
      'Claims and cost optimisation',
    ],
    iconBg: 'bg-[#FEF6E6]',
    iconColor: 'text-[#EAB308]',
    checklistBg: 'bg-[#FEF9EC]',
    checklistBorder: 'border-[#F7EBCB]',
    renderIcon: () => <ShieldCheck className="w-6 h-6" strokeWidth={1.85} />,
  },
  {
    id: 'pharma',
    mediaKey: 'pharma',
    title: 'Pharma',
    industryBriefingTitle: 'Pharma',
    description:
      'Power patient support programs with real-world engagement and insights.',
    highlights: [
      'Patient support & adherence',
      'Therapy management',
      'Real-world program insights',
    ],
    iconBg: 'bg-[#FEEFF1]',
    iconColor: 'text-[#F43F5E]',
    checklistBg: 'bg-[#FEF4F5]',
    checklistBorder: 'border-[#F9DDE1]',
    renderIcon: () => <Pill className="w-6 h-6" strokeWidth={1.85} />,
  },
  {
    id: 'health-platforms',
    mediaKey: 'health-platforms',
    title: 'Digital Health Partners',
    industryBriefingTitle: 'Digital Health Partners',
    description:
      'Build, integrate and scale solutions on a secure, API-first health platform.',
    highlights: [
      'APIs & interoperability',
      'Device & data integration',
      'Scalable, white-labelled options',
    ],
    iconBg: 'bg-[#F3EEFE]',
    iconColor: 'text-[#7C3AED]',
    checklistBg: 'bg-[#F6F3FE]',
    checklistBorder: 'border-[#E6DDFC]',
    renderIcon: () => <Layers className="w-6 h-6" strokeWidth={1.85} />,
  },
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustry,
}) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4FBF8] via-[#F9FCFB] to-[#F2FAF6] py-16 sm:py-20 lg:py-24 border-b border-[#DCECE4]"
    >
      {/* Subtle Organic Mint Wave Accents */}
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full select-none"
      >
        <path
          d="M0 0 L320 0 C220 115, 110 145, 0 165 Z"
          fill="#D4F3E4"
          fillOpacity="0.65"
        />
        <path
          d="M0 715 C280 680, 560 725, 860 735 C1120 742, 1300 712, 1440 682 L1440 760 L0 760 Z"
          fill="#BCEFD7"
          fillOpacity="0.7"
        />
        <path
          d="M0 738 C320 710, 680 745, 1020 725 C1210 714, 1340 730, 1440 716 L1440 760 L0 760 Z"
          fill="#9AE8C4"
          fillOpacity="0.6"
        />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F7EE] border border-[#CDECE0]">
            <Building2 className="w-4 h-4 text-[#0F172A]" strokeWidth={1.85} />
            <span className="text-xs sm:text-[13px] font-semibold text-[#0F172A]">
              Industries
            </span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-[-0.025em] leading-[1.12] text-[#0F172A] text-balance">
            One Platform.{' '}
            <span className="text-[#059669]">Five Enterprise Contexts.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#334155] leading-[1.68] max-w-2xl mx-auto">
            A flexible, interoperable platform that adapts to the unique health,
            operational and engagement needs of different industries.
          </p>
        </div>

        {/* 5 Vertical Enterprise Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-5 items-stretch">
          {INDUSTRY_PATH_CARDS.map((card) => {
            const media = INDUSTRY_MEDIA[card.mediaKey];
            const imgFailed = !!failedImages[card.id];

            return (
              <button
                key={card.id}
                type="button"
                onClick={() => onSelectIndustry(card.industryBriefingTitle)}
                aria-label={`Request briefing for ${card.title}`}
                className="group text-left bg-white rounded-2xl border border-[#E4ECEF] hover:border-[#2BC48A] shadow-[0_12px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_38px_rgba(5,150,105,0.12)] overflow-hidden flex flex-col transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
              >
                {/* Top Photo Banner */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#0F172A] shrink-0">
                  {media && !imgFailed ? (
                    <img
                      src={media.src}
                      alt={media.alt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({
                          ...prev,
                          [card.id]: true,
                        }))
                      }
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E3A34] text-white/80">
                      {card.renderIcon()}
                    </div>
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/25 to-transparent"
                  />
                </div>

                {/* Card Content Body */}
                <div className="p-4 pt-0 flex-1 flex flex-col">
                  {/* Overlapping Left Icon + White-Zone Title Row */}
                  <div className="relative z-10 flex items-start gap-2.5 pt-2.5 mb-3">
                    <span
                      className={`-mt-8 w-12 h-12 rounded-xl border-2 border-white shadow-[0_6px_14px_rgba(15,23,42,0.08)] flex items-center justify-center shrink-0 ${card.iconBg} ${card.iconColor}`}
                    >
                      {card.renderIcon()}
                    </span>
                    <h3 className="text-[15px] xl:text-[15.5px] font-bold text-[#0F172A] leading-[1.22] min-h-[38px] flex items-center group-hover:text-[#059669] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-[#334155] leading-[1.58] mb-4">
                    {card.description}
                  </p>

                  {/* Tinted Bottom Highlights Box */}
                  <div
                    className={`mt-auto rounded-xl border px-3.5 py-3 ${card.checklistBg} ${card.checklistBorder}`}
                  >
                    <ul className="space-y-2">
                      {card.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs font-medium text-[#0F172A] leading-snug"
                        >
                          <Check
                            className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5"
                            strokeWidth={2.4}
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
