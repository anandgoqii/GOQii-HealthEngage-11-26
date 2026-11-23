import React, { useState } from 'react';
import {
  Activity,
  BarChart3,
  Brain,
  Code2,
  Database,
  FileCode2,
  HeartPulse,
  Layers,
  LayoutDashboard,
  Lock,
  Monitor,
  Pill,
  Settings,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface ApplicationTile {
  id: string;
  label: string;
  modulesLabel: string;
  targetCategoryId: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  tileBg: string;
  tileBorder: string;
  iconBg: string;
  iconColor: string;
}

const APPLICATION_TILES: ApplicationTile[] = [
  {
    id: 'care',
    label: 'Care',
    modulesLabel: '34 modules',
    targetCategoryId: 'category-01',
    icon: HeartPulse,
    tileBg: 'bg-[#E9F8F0] hover:bg-[#DFF4E9]',
    tileBorder: 'border-[#CFEFE0] hover:border-[#2BC48A]',
    iconBg: 'bg-[#D1F5E3]',
    iconColor: 'text-[#059669]',
  },
  {
    id: 'rpm',
    label: 'RPM',
    modulesLabel: '3 modules',
    targetCategoryId: 'category-02',
    icon: Monitor,
    tileBg: 'bg-[#EBF7FD] hover:bg-[#E0F2FB]',
    tileBorder: 'border-[#CFE9F7] hover:border-[#38BDF8]',
    iconBg: 'bg-[#D6EFFB]',
    iconColor: 'text-[#0284C7]',
  },
  {
    id: 'engage',
    label: 'Engage',
    modulesLabel: '29 modules',
    targetCategoryId: 'category-03',
    icon: Users,
    tileBg: 'bg-[#F3EEFE] hover:bg-[#EAE1FD]',
    tileBorder: 'border-[#E2D6FB] hover:border-[#8B5CF6]',
    iconBg: 'bg-[#E5DBFC]',
    iconColor: 'text-[#7C3AED]',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    modulesLabel: '14 modules',
    targetCategoryId: 'category-04',
    icon: ShieldCheck,
    tileBg: 'bg-[#FEF6E6] hover:bg-[#FDF0D4]',
    tileBorder: 'border-[#FAE5B8] hover:border-[#F59E0B]',
    iconBg: 'bg-[#FDEBC5]',
    iconColor: 'text-[#D97706]',
  },
  {
    id: 'pharma',
    label: 'Pharma',
    modulesLabel: '24 modules',
    targetCategoryId: 'category-05',
    icon: Pill,
    tileBg: 'bg-[#FEEFEE] hover:bg-[#FDE4E3]',
    tileBorder: 'border-[#FAD5D3] hover:border-[#FB7185]',
    iconBg: 'bg-[#FDDCDD]',
    iconColor: 'text-[#E11D48]',
  },
  {
    id: 'ai',
    label: 'AI',
    modulesLabel: '26 modules',
    targetCategoryId: 'category-06',
    icon: Brain,
    tileBg: 'bg-[#EEF2FE] hover:bg-[#E2E9FD]',
    tileBorder: 'border-[#D7E0FC] hover:border-[#60A5FA]',
    iconBg: 'bg-[#DDE6FC]',
    iconColor: 'text-[#2563EB]',
  },
];

interface InfrastructureItem {
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  href: string;
}

const INFRASTRUCTURE_ITEMS: InfrastructureItem[] = [
  { label: 'Data & AI', icon: Database, href: '#category-06' },
  { label: 'Automation', icon: Settings, href: '#category-03' },
  { label: 'APIs', icon: Code2, href: '#category-07' },
  { label: 'Devices', icon: Smartphone, href: '#category-07' },
  { label: 'Control', icon: ShieldCheck, href: '#category-07' },
  { label: 'FHIR / HL7 ready', icon: FileCode2, href: '#platform-architecture' },
  { label: 'Enterprise security', icon: Lock, href: '#platform-architecture' },
];

interface EcosystemOrbNode {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  targetCategoryId: string;
  // Coordinates inside 360x340 SVG/absolute canvas
  posClass: string;
}

const ECOSYSTEM_ORB_NODES: EcosystemOrbNode[] = [
  {
    id: 'care',
    label: 'Care Delivery',
    icon: HeartPulse,
    targetCategoryId: 'category-01',
    posClass: 'top-[4%] left-[24%] -translate-x-1/2',
  },
  {
    id: 'rpm',
    label: 'Remote Monitoring',
    icon: Monitor,
    targetCategoryId: 'category-02',
    posClass: 'top-[4%] right-[24%] translate-x-1/2',
  },
  {
    id: 'engage',
    label: 'Member Engagement',
    icon: Users,
    targetCategoryId: 'category-03',
    posClass: 'top-[50%] right-0 -translate-y-1/2',
  },
  {
    id: 'insurance',
    label: 'Insurance Operations',
    icon: ShieldCheck,
    targetCategoryId: 'category-04',
    posClass: 'bottom-[4%] right-[24%] translate-x-1/2',
  },
  {
    id: 'pharma',
    label: 'Pharma Support Programs',
    icon: Pill,
    targetCategoryId: 'category-05',
    posClass: 'bottom-[4%] left-[24%] -translate-x-1/2',
  },
  {
    id: 'ai',
    label: 'AI & Intelligence',
    icon: Brain,
    targetCategoryId: 'category-06',
    posClass: 'top-[50%] left-0 -translate-y-1/2',
  },
];

const DASHBOARD_NAV = [
  { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'members', label: 'Members', icon: Users },
  { id: 'programs', label: 'Programs', icon: Layers },
  { id: 'care', label: 'Care', icon: HeartPulse },
  { id: 'rpm', label: 'RPM', icon: Monitor },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

export const ApplicationLayerSection: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('overview');
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(
    null
  );
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

  return (
    <section
      id="platform-overview"
      className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20 border-b border-[#E8EDF2]"
    >
      {/* Subtle Organic Mint Gradient Sweep behind Centre & Right Areas */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-20 right-[-8%] w-[66%] h-[78%] rounded-[999px]"
          style={{
            background:
              'radial-gradient(ellipse at 55% 48%, rgba(43, 196, 138, 0.13) 0%, rgba(232, 249, 241, 0.72) 48%, rgba(255, 255, 255, 0) 78%)',
          }}
        />
        <div
          className="absolute top-[12%] left-[22%] w-[38%] h-[52%] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(235, 249, 243, 0.85) 0%, rgba(255, 255, 255, 0) 72%)',
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
        {/* ================================================================ */}
        {/* PART A: UPPER AREA — PLATFORM OVERVIEW (3-Part Composition)      */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-[1.04fr_1.18fr_1fr] gap-8 lg:gap-7 items-center">
          {/* LEFT: Platform Introduction & Statistics */}
          <div className="md:col-span-12 xl:col-span-1 space-y-5">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8F0] border border-[#CBECE0]">
              <Activity
                className="w-3.5 h-3.5 text-[#158059] shrink-0"
                strokeWidth={2}
              />
              <span className="text-xs font-semibold text-[#0F172A] tracking-tight">
                GOQii HealthEngage · Platform
              </span>
            </div>

            {/* Bold Two-Tone Headline */}
            <h2 className="text-[28px] sm:text-[34px] xl:text-[35px] font-bold tracking-[-0.025em] leading-[1.12] text-[#0F172A] text-balance">
              A Unified Platform for
              <span className="block text-[#158059] mt-0.5">
                Better Health Outcomes
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-[15px] text-[#334155] leading-[1.68] max-w-[46ch]">
              GOQii HealthEngage brings together care delivery, remote
              monitoring, member engagement, insurance operations, pharma support
              programs, AI, APIs and device interoperability — in a single,
              connected platform.
            </p>

            {/* Three Horizontal Platform Statistics */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#CBD5E1]/70">
              <div className="py-2 sm:py-0 sm:pr-5">
                <div className="text-2xl sm:text-[26px] font-bold text-[#158059] tabular-nums leading-none">
                  7
                </div>
                <div className="text-xs font-medium text-[#0F172A] mt-1.5 leading-snug">
                  Platform categories
                </div>
              </div>

              <div className="py-2 sm:py-0 sm:px-5">
                <div className="text-2xl sm:text-[26px] font-bold text-[#158059] tabular-nums leading-none">
                  60+
                </div>
                <div className="text-xs font-medium text-[#0F172A] mt-1.5 leading-snug">
                  Modules &amp; services
                </div>
              </div>

              <div className="py-2 sm:py-0 sm:pl-5">
                <div className="text-xl sm:text-[22px] font-bold text-[#158059] leading-none whitespace-nowrap">
                  FHIR/HL7
                </div>
                <div className="text-xs font-medium text-[#0F172A] mt-2 leading-snug">
                  Standards-ready
                </div>
              </div>
            </div>
          </div>

          {/* CENTRE: Realistic Product Dashboard Laptop Showcase */}
          <div className="md:col-span-6 xl:col-span-1 flex flex-col items-center">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[460px] mx-auto"
            >
              {/* Laptop Lid & Screen Frame */}
              <div className="relative rounded-t-[14px] rounded-b-[4px] bg-[#0B1220] p-2 border border-[#1E293B] shadow-[0_24px_48px_-14px_rgba(15,23,42,0.28)]">
                {/* Camera Dot */}
                <div className="flex justify-center pb-1" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
                </div>

                {/* Inner Screen */}
                <div className="rounded-[8px] bg-[#F8FAFB] overflow-hidden grid grid-cols-12">
                  {/* Dark Navy Left Sidebar */}
                  <aside className="col-span-4 sm:col-span-3 bg-[#0B1D26] text-white p-2.5 flex flex-col justify-between border-r border-white/10">
                    <div className="space-y-2.5">
                      <div className="pb-2 border-b border-white/10 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded bg-[#2BC48A]/20 flex items-center justify-center shrink-0">
                          <Activity
                            className="w-2.5 h-2.5 text-[#2BC48A]"
                            strokeWidth={2}
                          />
                        </span>
                        <div className="min-w-0 leading-tight">
                          <div className="text-[9.5px] font-bold text-white truncate">
                            GOQii
                          </div>
                          <div className="text-[8px] text-[#2BC48A] truncate">
                            HealthEngage
                          </div>
                        </div>
                      </div>

                      <nav aria-label="Product overview console" className="space-y-0.5">
                        {DASHBOARD_NAV.map((item) => {
                          const NavIcon = item.icon;
                          const isActive = activeNav === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setActiveNav(item.id)}
                              className={`w-full flex items-center gap-1.5 px-1.5 py-1 rounded text-[9px] transition-colors cursor-pointer ${
                                isActive
                                  ? 'bg-[#158059] text-white font-semibold'
                                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              <NavIcon
                                className="w-2.5 h-2.5 shrink-0"
                                strokeWidth={1.85}
                              />
                              <span className="truncate">{item.label}</span>
                            </button>
                          );
                        })}
                      </nav>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[8px] text-slate-400 truncate">
                      Illustrative UI
                    </div>
                  </aside>

                  {/* Main Dashboard Panels */}
                  <div className="col-span-8 sm:col-span-9 p-2.5 sm:p-3 space-y-2.5">
                    {/* Top White App Bar */}
                    <div className="bg-white border border-[#E8EDF2] rounded-md px-2.5 py-1.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <HeartPulse
                          className="w-3 h-3 text-[#158059] shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-[10px] font-semibold text-[#0F172A] truncate">
                          GOQii HealthEngage
                        </span>
                      </div>
                      <span className="text-[8.5px] font-medium text-[#64748B] whitespace-nowrap">
                        Sample View
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-0.5">
                      <span className="text-[11px] font-bold text-[#0F172A]">
                        Platform Overview
                        {activeNav !== 'overview'
                          ? ` · ${DASHBOARD_NAV.find((n) => n.id === activeNav)?.label}`
                          : ''}
                      </span>
                      <span className="text-[9px] font-medium text-[#158059]">
                        Illustrative data
                      </span>
                    </div>

                    {/* Charts Row: Area Trend + Health Indicator Ring */}
                    <div className="grid grid-cols-12 gap-2">
                      {/* Health Analytics Area Chart */}
                      <div className="col-span-7 bg-white border border-[#E8EDF2] rounded-lg p-2">
                        <div className="text-[8.5px] font-medium text-[#64748B] mb-1">
                          Health Analytics
                        </div>
                        <svg
                          viewBox="0 0 160 66"
                          className="w-full h-[54px] overflow-visible"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient
                              id="sec2-area-grad"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#2BC48A"
                                stopOpacity="0.34"
                              />
                              <stop
                                offset="100%"
                                stopColor="#2BC48A"
                                stopOpacity="0.02"
                              />
                            </linearGradient>
                          </defs>
                          {[16, 32, 48].map((y) => (
                            <line
                              key={y}
                              x1="4"
                              y1={y}
                              x2="156"
                              y2={y}
                              stroke="#E8EDF2"
                              strokeWidth="1"
                              strokeDasharray="2 2"
                            />
                          ))}
                          {/* Accent mini bars on right */}
                          {[
                            { x: 118, h: 12 },
                            { x: 126, h: 18 },
                            { x: 134, h: 15 },
                            { x: 142, h: 24 },
                            { x: 150, h: 28 },
                          ].map((b) => (
                            <rect
                              key={b.x}
                              x={b.x}
                              y={58 - b.h}
                              width="4.5"
                              height={b.h}
                              rx="1.5"
                              fill="#158059"
                              fillOpacity="0.75"
                            />
                          ))}
                          <path
                            d="M 4 50 C 26 42, 42 48, 62 34 C 82 22, 102 32, 122 20 C 136 12, 146 10, 155 6 L 155 58 L 4 58 Z"
                            fill="url(#sec2-area-grad)"
                          />
                          <path
                            d="M 4 50 C 26 42, 42 48, 62 34 C 82 22, 102 32, 122 20 C 136 12, 146 10, 155 6"
                            fill="none"
                            stroke="#158059"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Health Indicator Ring */}
                      <div className="col-span-5 bg-white border border-[#E8EDF2] rounded-lg p-2 flex flex-col items-center justify-center">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                          <svg
                            viewBox="0 0 56 56"
                            className="w-full h-full -rotate-90"
                            aria-hidden="true"
                          >
                            <circle
                              cx="28"
                              cy="28"
                              r="22"
                              fill="none"
                              stroke="#E8EDF2"
                              strokeWidth="5.5"
                            />
                            <circle
                              cx="28"
                              cy="28"
                              r="22"
                              fill="none"
                              stroke="#2BC48A"
                              strokeWidth="5.5"
                              strokeLinecap="round"
                              strokeDasharray={2 * Math.PI * 22}
                              strokeDashoffset={2 * Math.PI * 22 * (1 - 0.78)}
                            />
                          </svg>
                          <span className="absolute text-xs font-bold text-[#0F172A] tabular-nums">
                            78%
                          </span>
                        </div>
                        <span className="text-[8px] font-medium text-[#64748B] mt-0.5 text-center">
                          Health Index
                        </span>
                      </div>
                    </div>

                    {/* Member Overview & Health Indicators Row */}
                    <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
                      <div className="bg-white border border-[#E8EDF2] rounded-lg p-1.5 sm:p-2 min-w-0">
                        <div className="flex items-center justify-between gap-0.5">
                          <span className="text-[7.5px] sm:text-[8px] text-[#64748B] truncate">
                            Active Members
                          </span>
                          <Users
                            className="w-2.5 h-2.5 text-[#158059] shrink-0"
                            strokeWidth={2}
                          />
                        </div>
                        <div className="text-[9.5px] sm:text-[11px] font-bold text-[#0F172A] tabular-nums mt-0.5 truncate">
                          128,420
                        </div>
                      </div>

                      <div className="bg-white border border-[#E8EDF2] rounded-lg p-1.5 sm:p-2 min-w-0">
                        <div className="flex items-center justify-between gap-0.5">
                          <span className="text-[7.5px] sm:text-[8px] text-[#64748B] truncate">
                            Programs
                          </span>
                          <Layers
                            className="w-2.5 h-2.5 text-[#158059] shrink-0"
                            strokeWidth={2}
                          />
                        </div>
                        <div className="text-[9.5px] sm:text-[11px] font-bold text-[#0F172A] tabular-nums mt-0.5 truncate">
                          42
                        </div>
                      </div>

                      <div className="bg-white border border-[#E8EDF2] rounded-lg p-1.5 sm:p-2 min-w-0">
                        <div className="flex items-center justify-between gap-0.5">
                          <span className="text-[7.5px] sm:text-[8px] text-[#64748B] truncate">
                            Engagement
                          </span>
                          <BarChart3
                            className="w-2.5 h-2.5 text-[#158059] shrink-0"
                            strokeWidth={2}
                          />
                        </div>
                        <div className="text-[9.5px] sm:text-[11px] font-bold text-[#0F172A] tabular-nums mt-0.5 truncate">
                          76%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Realistic Brushed Silver Laptop Base */}
              <div className="relative mx-0 sm:mx-[-14px]" aria-hidden="true">
                <div className="h-3 rounded-b-xl bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] border-x border-b border-[#94A3B8]/60 shadow-[0_14px_28px_-6px_rgba(15,23,42,0.22)] flex justify-center">
                  <div className="w-16 h-1 rounded-b-sm bg-[#94A3B8]/80" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Circular Connected Healthcare Ecosystem */}
          <div className="md:col-span-6 xl:col-span-1 flex items-center justify-center">
            <div className="relative w-full max-w-[360px] aspect-[360/340] mx-auto">
              {/* Thin Mint-Green Circular Connection Lines & Small Connection Nodes */}
              <svg
                viewBox="0 0 360 340"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {/* Outer Ring */}
                <circle
                  cx="180"
                  cy="170"
                  r="128"
                  stroke="#BCEBD5"
                  strokeWidth="1.25"
                />
                {/* Inner Dashed Ring */}
                <circle
                  cx="180"
                  cy="170"
                  r="98"
                  stroke="#99E3C2"
                  strokeWidth="1.25"
                  strokeDasharray="4 4"
                />
                {/* Radial Spoke Lines to the 6 Capabilities */}
                {[
                  { x: 102, y: 46 },
                  { x: 258, y: 46 },
                  { x: 320, y: 170 },
                  { x: 258, y: 294 },
                  { x: 102, y: 294 },
                  { x: 40, y: 170 },
                ].map((pt, i) => (
                  <g key={i}>
                    <line
                      x1="180"
                      y1="170"
                      x2={pt.x}
                      y2={pt.y}
                      stroke="#D1F3E3"
                      strokeWidth="1.25"
                    />
                    <circle
                      cx={(180 + pt.x) / 2}
                      cy={(170 + pt.y) / 2}
                      r="3"
                      fill="#2BC48A"
                    />
                  </g>
                ))}
                {/* Perimeter Junction Dots */}
                <circle cx="180" cy="42" r="3" fill="#6EE7B7" />
                <circle cx="180" cy="298" r="3" fill="#6EE7B7" />
              </svg>

              {/* Center GOQii HealthEngage Emblem Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[86px] h-[86px] min-[400px]:w-[98px] min-[400px]:h-[98px] sm:w-[112px] sm:h-[112px] rounded-full bg-white border border-[#E2E8F0] shadow-[0_12px_32px_rgba(15,23,42,0.08)] flex flex-col items-center justify-center text-center p-1.5 sm:p-2">
                <div className="grid grid-cols-2 gap-0.5 w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-1.5" aria-hidden="true">
                  <span className="rounded-[2px] bg-[#F97316]" />
                  <span className="rounded-[2px] bg-[#EF4444]" />
                  <span className="rounded-[2px] bg-[#3B82F6]" />
                  <span className="rounded-[2px] bg-[#2BC48A]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#0F172A] leading-tight">
                  GOQii
                </span>
                <span className="text-[9.5px] sm:text-[10.5px] font-semibold text-[#158059] leading-tight">
                  HealthEngage
                </span>
              </div>

              {/* Six Orbiting Capability Nodes */}
              {ECOSYSTEM_ORB_NODES.map((node) => {
                const Icon = node.icon;
                const isSelected = highlightedCategory === node.id;
                return (
                  <a
                    key={node.id}
                    href={`#${node.targetCategoryId}`}
                    onClick={(e) => {
                      setHighlightedCategory(node.id);
                      handleAnchorScroll(e, node.targetCategoryId);
                    }}
                    onMouseEnter={() => setHighlightedCategory(node.id)}
                    onMouseLeave={() => setHighlightedCategory(null)}
                    className={`absolute ${node.posClass} z-20 w-[84px] min-[400px]:w-[96px] sm:w-[110px] rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xs border px-1.5 py-1.5 sm:px-2 sm:py-2 flex flex-col items-center text-center transition-all duration-150 shadow-[0_6px_18px_rgba(15,23,42,0.06)] ${
                      isSelected
                        ? 'border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.18)]'
                        : 'border-[#E8EDF2] hover:border-[#2BC48A]'
                    }`}
                  >
                    <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#ECFDF5] border border-[#CDECE0] flex items-center justify-center text-[#158059] mb-1">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.85} />
                    </span>
                    <span className="text-[9.5px] sm:text-[10.5px] font-semibold text-[#0F172A] leading-tight">
                      {node.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* PART B: LOWER AREA — PLATFORM APPLICATION LAYER & SERVICES       */}
        {/* ================================================================ */}
        <div className="bg-gradient-to-b from-[#F4FBF8] to-[#F8FCFA] border border-[#DFEFE7] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
          {/* Heading Row */}
          <div className="flex items-center gap-3.5 mb-6">
            <span className="w-11 h-11 rounded-full bg-[#DCF5EA] border border-[#BCEBD5] flex items-center justify-center text-[#158059] shrink-0">
              <Monitor className="w-5 h-5" strokeWidth={1.85} />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                Platform Application Layer
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                Modular. Scalable. Composable.
              </p>
            </div>
          </div>

          {/* Six Horizontally Aligned Application Category Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {APPLICATION_TILES.map((tile) => {
              const TileIcon = tile.icon;
              const isHighlighted = highlightedCategory === tile.id;
              return (
                <a
                  key={tile.id}
                  href={`#${tile.targetCategoryId}`}
                  onClick={(e) => handleAnchorScroll(e, tile.targetCategoryId)}
                  className={`group rounded-xl border px-3.5 py-3.5 flex items-center gap-3 transition-all duration-150 ${tile.tileBg} ${tile.tileBorder} ${
                    isHighlighted ? 'ring-2 ring-[#2BC48A]/60' : ''
                  }`}
                >
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-105 ${tile.iconBg} ${tile.iconColor}`}
                  >
                    <TileIcon className="w-4 h-4" strokeWidth={1.85} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-[#0F172A] truncate">
                      {tile.label}
                    </div>
                    <div className="text-xs font-medium text-[#475569] tabular-nums truncate">
                      {tile.modulesLabel}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Horizontal Divider */}
          <div className="border-t border-[#DCECE4] my-6" />

          {/* Platform Services & Infrastructure Row */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">
            {/* Left Heading */}
            <div className="flex items-center gap-3.5 shrink-0">
              <span className="w-11 h-11 rounded-full bg-[#DCF5EA] border border-[#BCEBD5] flex items-center justify-center text-[#158059] shrink-0">
                <Layers className="w-5 h-5" strokeWidth={1.85} />
              </span>
              <div>
                <h4 className="text-base sm:text-[17px] font-bold text-[#0F172A] tracking-tight">
                  Platform Services &amp; Infrastructure
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                  Powering a connected and secure ecosystem.
                </p>
              </div>
            </div>

            {/* Right: Seven Infrastructure Capabilities */}
            <div className="flex flex-wrap xl:flex-nowrap items-center gap-x-4 gap-y-2.5 xl:gap-x-0 xl:divide-x xl:divide-[#D5E4DC]">
              {INFRASTRUCTURE_ITEMS.map((item, idx) => {
                const InfraIcon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleAnchorScroll(e, item.href)}
                    className={`inline-flex items-center gap-1.5 text-xs font-medium text-[#0F172A] hover:text-[#158059] transition-colors whitespace-nowrap xl:pr-3 ${
                      idx === 0 ? 'xl:pl-0' : 'xl:pl-3'
                    }`}
                  >
                    <InfraIcon
                      className="w-3.5 h-3.5 text-[#0F172A] shrink-0"
                      strokeWidth={1.75}
                    />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
