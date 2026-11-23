import React, { useState } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  Handshake,
  Layers,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import { BrandMark } from './BrandMark';
import { INDUSTRY_MEDIA } from '../data/mediaAssets';
import type { PageRoute } from './GovernancePages';

interface EnterpriseCtaAndFooterProps {
  onOpenContact: (mode: 'briefing' | 'partnership') => void;
  onOpenSignIn: () => void;
}

interface FooterProps extends EnterpriseCtaAndFooterProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
}

const FOOTER_LOGO_URL = 'https://appcdn.goqii.com/storeimg/20485_1795073815.png';

export const EnterpriseCtaSection: React.FC<EnterpriseCtaAndFooterProps> = ({
  onOpenContact,
}) => {
  const [photoFailed, setPhotoFailed] = useState(false);
  const partnershipMedia = INDUSTRY_MEDIA['health-platforms'];

  return (
    <section
      id="enterprise-cta"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4FBF8] via-[#F9FCFB] to-[#FFFFFF] py-16 sm:py-20 lg:py-24 border-b border-[#DCECE4]"
    >
      {/* Subtle Top-Right & Bottom Organic Mint Waves */}
      <svg
        viewBox="0 0 1440 580"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full select-none"
      >
        <defs>
          <linearGradient id="cta-wave-top" x1="0" y1="450" x2="1440" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94ECC2" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#C9F6E0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8DE7BD" stopOpacity="0.68" />
          </linearGradient>
          <linearGradient id="cta-wave-bottom" x1="0" y1="490" x2="1440" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7DE3B4" stopOpacity="0.72" />
            <stop offset="55%" stopColor="#B8F2D6" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#6CDCA9" stopOpacity="0.78" />
          </linearGradient>
        </defs>

        <path
          d="M0 510 C220 455, 430 505, 660 515 C920 526, 1170 430, 1440 420 L1440 580 L0 580 Z"
          fill="url(#cta-wave-top)"
        />
        <path
          d="M0 535 C270 485, 510 548, 820 528 C1080 512, 1270 462, 1440 468 L1440 580 L0 580 Z"
          fill="url(#cta-wave-bottom)"
        />
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Editorial CTA Content */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7F7EF] border border-[#CFECE0]">
              <Handshake className="w-4 h-4 text-[#059669]" strokeWidth={1.85} />
              <span className="text-xs sm:text-[13px] font-semibold text-[#0F172A]">
                Enterprise &amp; Partnerships
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.025em] leading-[1.1] text-[#0F172A] text-balance">
              Let’s Build Healthier{' '}
              <span className="block text-[#059669]">Populations Together</span>
            </h2>

            <p className="text-sm sm:text-base text-[#334155] leading-[1.68] max-w-lg">
              Explore how GOQii HealthEngage can power your health, care and
              engagement programmes — at scale, with measurable impact.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onOpenContact('briefing')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-sm font-semibold text-white bg-[#008C54] hover:bg-[#007446] active:bg-[#00613A] rounded-xl transition-colors sm:whitespace-nowrap cursor-pointer shadow-[0_10px_24px_rgba(0,140,84,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008C54]"
              >
                <span>Talk to Our Enterprise Team</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0"
                  strokeWidth={2}
                />
              </button>

              <button
                type="button"
                onClick={() => onOpenContact('partnership')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-3.5 text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F3FBF7] border border-[#2BC48A] rounded-xl transition-colors text-center sm:whitespace-nowrap cursor-pointer shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
              >
                Explore Partnership Opportunities
              </button>
            </div>

            {/* Bottom 3-Column Proof Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-0 sm:divide-x sm:divide-[#D5E2DC]">
              <div className="inline-flex items-center gap-2 sm:pr-5 text-xs sm:text-[13px] font-semibold text-[#0F172A]">
                <Rocket className="w-4 h-4 text-[#059669] shrink-0" strokeWidth={1.85} />
                <span>Deploy at Scale</span>
              </div>
              <div className="inline-flex items-center gap-2 sm:px-5 text-xs sm:text-[13px] font-semibold text-[#0F172A]">
                <Layers className="w-4 h-4 text-[#059669] shrink-0" strokeWidth={1.85} />
                <span>Integrate Easily</span>
              </div>
              <div className="inline-flex items-center gap-2 sm:pl-5 text-xs sm:text-[13px] font-semibold text-[#0F172A]">
                <TrendingUp className="w-4 h-4 text-[#059669] shrink-0" strokeWidth={1.85} />
                <span>Drive Measurable Outcomes</span>
              </div>
            </div>
          </div>

          {/* Right Circular Partnership Visual + Floating Interactive Cards */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-square flex items-center justify-center">
              {/* Outer Soft Luminous Mint Halo Ring */}
              <div
                aria-hidden="true"
                className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#BCEFD7]/55 via-[#E4F9EE]/40 to-transparent blur-[1px]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full border border-[#9BE7C4]/70"
              />

              {/* Circular Executive Photo */}
              <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden border-4 border-white shadow-[0_22px_50px_rgba(15,23,42,0.12)] bg-[#0F172A]">
                {!photoFailed ? (
                  <img
                    src={partnershipMedia.src}
                    alt={partnershipMedia.alt}
                    referrerPolicy="no-referrer"
                    onError={() => setPhotoFailed(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0F172A] to-[#134E3A] text-white p-6">
                    <Handshake className="w-10 h-10 text-[#2BC48A]" strokeWidth={1.75} />
                    <span className="text-sm font-semibold text-center">
                      Enterprise &amp; Partner Ecosystem
                    </span>
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-black/5"
                />
              </div>

              {/* Luminous Green Accent Orb on Lower-Left Orbital Arc */}
              <div
                aria-hidden="true"
                className="absolute left-[11%] bottom-[16%] w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#B5F7D4] via-[#34D399] to-[#059669] shadow-[0_0_24px_rgba(43,196,138,0.55)] border border-white/80"
              />

              {/* Floating Pill 1: For Enterprises (Top-Right) */}
              <button
                type="button"
                onClick={() => onOpenContact('briefing')}
                className="group absolute top-[6%] right-0 lg:right-[-2%] bg-white/95 backdrop-blur-xs border border-[#E4ECEF] hover:border-[#2BC48A] rounded-full px-3.5 py-2 sm:px-5 sm:py-3 shadow-[0_14px_34px_rgba(15,23,42,0.10)] flex items-center gap-2.5 sm:gap-3 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8F8F0] text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.85} />
                </span>
                <div className="text-left">
                  <div className="text-[10px] sm:text-[11px] font-medium text-[#64748B] leading-tight">
                    For
                  </div>
                  <div className="text-xs sm:text-[15px] font-bold text-[#0F172A] leading-tight">
                    Enterprises
                  </div>
                  <span
                    aria-hidden="true"
                    className="block mt-1 w-7 sm:w-8 h-[2.5px] rounded-full bg-[#2BC48A]"
                  />
                </div>
              </button>

              {/* Floating Pill 2: For Partners (Lower-Right) */}
              <button
                type="button"
                onClick={() => onOpenContact('partnership')}
                className="group absolute bottom-[15%] right-0 lg:right-[-4%] bg-white/95 backdrop-blur-xs border border-[#E4ECEF] hover:border-[#2BC48A] rounded-full px-3.5 py-2 sm:px-5 sm:py-3 shadow-[0_14px_34px_rgba(15,23,42,0.10)] flex items-center gap-2.5 sm:gap-3 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8F8F0] text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                  <Handshake className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.85} />
                </span>
                <div className="text-left">
                  <div className="text-[10px] sm:text-[11px] font-medium text-[#64748B] leading-tight">
                    For
                  </div>
                  <div className="text-xs sm:text-[15px] font-bold text-[#0F172A] leading-tight">
                    Partners
                  </div>
                  <span
                    aria-hidden="true"
                    className="block mt-1 w-7 sm:w-8 h-[2.5px] rounded-full bg-[#2BC48A]"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FOOTER_PLATFORM_LINKS = [
  { label: 'Care', href: '#category-01' },
  { label: 'Remote Monitoring', href: '#category-02' },
  { label: 'Engagement', href: '#category-03' },
  { label: 'Insurance', href: '#category-04' },
  { label: 'Pharma', href: '#category-05' },
  { label: 'Data & AI', href: '#category-06' },
  { label: 'Platform & Ecosystem', href: '#category-07' },
];

const FOOTER_INDUSTRY_LINKS = [
  { label: 'Employers', href: '#industries' },
  { label: 'Hospitals & Clinics', href: '#industries' },
  { label: 'Insurers', href: '#industries' },
  { label: 'Pharma', href: '#industries' },
  { label: 'Digital Partners', href: '#industries' },
];

const FOOTER_RESOURCE_LINKS: {
  label: string;
  href: string;
  route?: PageRoute;
}[] = [
  { label: 'Case Studies', href: '#why-goqii-healthengage' },
  { label: 'Whitepapers', href: '/trust', route: 'trust' },
  { label: 'Blogs', href: '/trust', route: 'trust' },
  { label: 'Product Docs', href: '#module-architecture' },
  { label: 'API & Integration', href: '#category-07' },
  { label: 'Support', href: '/contact', route: 'contact' },
];

const FOOTER_COMPANY_LINKS: {
  label: string;
  href: string;
  route?: PageRoute;
}[] = [
  { label: 'About GOQii', href: '#platform-overview' },
  { label: 'Leadership', href: '/trust', route: 'trust' },
  { label: 'News & Media', href: '/trust', route: 'trust' },
  { label: 'Careers', href: '/contact', route: 'contact' },
  { label: 'Contact Us', href: '/contact', route: 'contact' },
];

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  currentPage,
  onNavigate,
}) => {
  const [footerLogoFailed, setFooterLogoFailed] = useState(false);

  const handleAnchorLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash?: string
  ) => {
    if (currentPage !== 'home') {
      e.preventDefault();
      onNavigate('home', hash);
    }
  };

  const handleRouteLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: PageRoute
  ) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#04181F] via-[#062426] to-[#041A1D] text-slate-200 pt-14 pb-8 sm:pt-16 sm:pb-10">
      {/* Subtle Top & Bottom Emerald Aurora Curves */}
      <svg
        viewBox="0 0 1440 420"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full select-none"
      >
        <defs>
          <radialGradient id="footer-glow-tl" cx="22%" cy="0%" r="48%">
            <stop offset="0%" stopColor="#1DB878" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#04181F" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="footer-glow-tr" cx="92%" cy="0%" r="45%">
            <stop offset="0%" stopColor="#2BC48A" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#041A1D" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="footer-wave-bottom" x1="0" y1="360" x2="1440" y2="420" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#12684B" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0A3A2E" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#189B69" stopOpacity="0.52" />
          </linearGradient>
        </defs>
        <rect width="1440" height="420" fill="url(#footer-glow-tl)" />
        <rect width="1440" height="420" fill="url(#footer-glow-tr)" />
        <path
          d="M0 375 C280 345, 560 400, 920 392 C1180 386, 1340 350, 1440 340 L1440 420 L0 420 Z"
          fill="url(#footer-wave-bottom)"
        />
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 pb-10 border-b border-[#1D6A4E]/60 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-3 space-y-5 lg:pr-6 lg:border-r lg:border-[#1D6A4E]/55">
            <a
              href="#top"
              onClick={(e) => handleAnchorLink(e)}
              aria-label="GOQii HealthEngage Home"
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A] rounded"
            >
              {footerLogoFailed ? (
                <BrandMark variant="dark" />
              ) : (
                <img
                  src={FOOTER_LOGO_URL}
                  alt="GOQii HealthEngage"
                  referrerPolicy="no-referrer"
                  onError={() => setFooterLogoFailed(true)}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              )}
            </a>

            <p className="text-[13px] sm:text-sm text-slate-200/90 leading-[1.6] max-w-[250px]">
              The Enterprise Platform for Preventive, Connected and Personalised
              Healthcare
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/goqii"
                target="_blank"
                rel="noreferrer"
                aria-label="GOQii on LinkedIn"
                className="w-9 h-9 rounded-full border border-[#2BC48A]/55 bg-[#092C27]/70 hover:bg-[#2BC48A] text-white hover:text-[#04181F] flex items-center justify-center transition-colors"
              >
                <span className="text-xs font-bold leading-none">in</span>
              </a>
              <a
                href="https://www.youtube.com/@GOQii"
                target="_blank"
                rel="noreferrer"
                aria-label="GOQii on YouTube"
                className="w-9 h-9 rounded-full border border-[#2BC48A]/55 bg-[#092C27]/70 hover:bg-[#2BC48A] text-white hover:text-[#04181F] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15.2V8.8L15.6 12 10 15.2Z" />
                </svg>
              </a>
              <a
                href="https://x.com/GOQii"
                target="_blank"
                rel="noreferrer"
                aria-label="GOQii on X"
                className="w-9 h-9 rounded-full border border-[#2BC48A]/55 bg-[#092C27]/70 hover:bg-[#2BC48A] text-white hover:text-[#04181F] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M18.2 3h3l-6.6 7.5L22.4 21h-6.1l-4.8-6.2L6 21H3l7-8L2.6 3h6.2l4.3 5.7L18.2 3Zm-1.1 16.2h1.7L7.9 4.7H6.1l11 14.5Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/goqiilife"
                target="_blank"
                rel="noreferrer"
                aria-label="GOQii on Instagram"
                className="w-9 h-9 rounded-full border border-[#2BC48A]/55 bg-[#092C27]/70 hover:bg-[#2BC48A] text-white hover:text-[#04181F] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="3.8" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4 Navigation Columns */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:px-4">
            {/* Platform */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Platform
              </h3>
              <ul className="space-y-2 text-[13px]">
                {FOOTER_PLATFORM_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorLink(e, item.href)}
                      className="text-slate-300/90 hover:text-[#2BC48A] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Industries
              </h3>
              <ul className="space-y-2 text-[13px]">
                {FOOTER_INDUSTRY_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorLink(e, item.href)}
                      className="text-slate-300/90 hover:text-[#2BC48A] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Resources
              </h3>
              <ul className="space-y-2 text-[13px]">
                {FOOTER_RESOURCE_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) =>
                        item.route
                          ? handleRouteLink(e, item.route)
                          : handleAnchorLink(e, item.href)
                      }
                      className="text-slate-300/90 hover:text-[#2BC48A] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Company
              </h3>
              <ul className="space-y-2 text-[13px]">
                {FOOTER_COMPANY_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) =>
                        item.route
                          ? handleRouteLink(e, item.route)
                          : handleAnchorLink(e, item.href)
                      }
                      className="text-slate-300/90 hover:text-[#2BC48A] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right "Let's Connect" Card */}
          <div className="md:col-span-12 lg:col-span-3 lg:pl-6 lg:border-l lg:border-[#1D6A4E]/55">
            <div className="max-w-md lg:max-w-none rounded-2xl border border-[#2BC48A]/45 bg-[#09382F]/65 backdrop-blur-xs p-5 sm:p-6 space-y-4 shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
              <div className="flex items-center gap-2.5">
                <CalendarCheck
                  className="w-6 h-6 text-[#2BC48A] shrink-0"
                  strokeWidth={1.85}
                />
                <span className="text-lg font-bold text-white tracking-tight">
                  Let’s Connect
                </span>
              </div>

              <p className="text-[13px] text-slate-200/90 leading-relaxed">
                Explore how HealthEngage can work for your organization.
              </p>

              <button
                type="button"
                onClick={() => onOpenContact('briefing')}
                className="group w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#ECFDF5] text-[#059669] text-[13px] sm:text-sm font-bold transition-colors cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2BC48A]"
              >
                <span>Request a Briefing</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright, Legal Links & Compliance Badges */}
        <div className="pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 text-xs text-slate-200/90">
          <p className="whitespace-nowrap">
            © {new Date().getFullYear()} GOQii. All rights reserved.
          </p>

          {/* Legal Links */}
          <nav
            aria-label="Legal and compliance links"
            className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-0 sm:divide-x sm:divide-[#2BC48A]/35"
          >
            <a
              href="/privacy"
              onClick={(e) => handleRouteLink(e, 'privacy')}
              className="sm:pr-3.5 hover:text-[#2BC48A] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/trust"
              onClick={(e) => handleRouteLink(e, 'trust')}
              className="sm:px-3.5 hover:text-[#2BC48A] transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="/security"
              onClick={(e) => handleRouteLink(e, 'security')}
              className="sm:px-3.5 hover:text-[#2BC48A] transition-colors"
            >
              Security
            </a>
            <a
              href="/trust"
              onClick={(e) => handleRouteLink(e, 'trust')}
              className="sm:pl-3.5 hover:text-[#2BC48A] transition-colors"
            >
              Compliance
            </a>
          </nav>

          {/* HIPAA, SOC 2 Type II, ISO 27001 Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-0 sm:divide-x sm:divide-white/20">
            {/* HIPAA Compliant */}
            <div className="flex items-center gap-2 sm:pr-4">
              <svg viewBox="0 0 28 32" className="w-6 h-7 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M14 2L25 6.5V15C25 22 20 27.5 14 30C8 27.5 3 22 3 15V6.5L14 2Z" />
                <path d="M14 8V22" strokeLinecap="round" />
                <path d="M10.5 12C12 10.5 16 10.5 17.5 12C18.5 13 10.5 15 11.5 16.5C12.5 17.8 16.5 17.8 16.5 19" strokeLinecap="round" />
              </svg>
              <div className="leading-tight">
                <div className="text-xs font-bold text-white">HIPAA</div>
                <div className="text-[11px] text-slate-300">Compliant</div>
              </div>
            </div>

            {/* SOC 2 Type II */}
            <div className="flex items-center gap-2 sm:px-4">
              <ShieldCheck className="w-6 h-6 text-white shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <div className="leading-tight">
                <div className="text-xs font-bold text-white">SOC 2</div>
                <div className="text-[11px] text-slate-300">Type II</div>
              </div>
            </div>

            {/* ISO 27001 */}
            <div className="flex items-center gap-2 sm:pl-4">
              <div className="w-7 h-7 rounded-full border border-white/80 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                ISO
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-white">ISO</div>
                <div className="text-[11px] text-slate-300 tabular-nums">27001</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
