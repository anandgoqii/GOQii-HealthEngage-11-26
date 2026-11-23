import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Code2,
  HeartPulse,
  Layers,
  LayoutGrid,
  MessageSquare,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroSectionProps {
  onOpenContact: (mode: 'briefing' | 'partnership') => void;
  onOpenSignIn: () => void;
}

const HERO_RIGHT_IMAGE = 'https://appcdn.goqii.com/storeimg/86634_1795419756.png';

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
}) => {
  const [heroImgFailed, setHeroImgFailed] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  const handleExplorePlatform = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById('module-architecture');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#F2FAF6] via-[#F7FCF9] to-[#FFFFFF] border-b border-[#E8EDF2]"
    >
      {/* Subtle Organic Mint Wave Background Accents */}
      <svg
        viewBox="0 0 1440 720"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
      >
        <path
          d="M0 520 C 220 450, 380 560, 620 580 C 900 605, 1180 480, 1440 530 L 1440 720 L 0 720 Z"
          fill="#E4F6EE"
          fillOpacity="0.65"
        />
        <path
          d="M0 610 C 310 560, 560 660, 880 640 C 1150 622, 1300 570, 1440 595 L 1440 720 L 0 720 Z"
          fill="#CFEFE0"
          fillOpacity="0.45"
        />
        <ellipse
          cx="220"
          cy="140"
          rx="320"
          ry="200"
          fill="#E6F7EF"
          fillOpacity="0.55"
        />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-0 pb-10 sm:pb-12">
        {/* Main Two-Column Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start">
          {/* LEFT COLUMN: Messaging, Headline, CTAs */}
          <div className="lg:col-span-5 space-y-5 relative z-20 lg:pr-2 lg:pt-14 lg:pb-8 lg:self-center">
            {/* Soft Mint Brand Kicker Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F6EE] border border-[#CDECE0]">
              <Activity
                className="w-4 h-4 text-[#059669] shrink-0"
                strokeWidth={2}
              />
              <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-[#0F172A]">
                GOQii Health
                <span className="text-[#059669]">Engage</span>
              </span>
            </div>

            {/* Bold Two-Tone Headline */}
            <h1 className="text-[28px] min-[400px]:text-[34px] sm:text-[42px] lg:text-[44px] xl:text-[50px] font-bold tracking-[-0.025em] text-[#0F172A] leading-[1.08] text-balance">
              Connected Healthcare.{' '}
              <span className="block text-[#048C56]">
                One Intelligent Platform.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-[15px] sm:text-base text-[#334155] leading-[1.68] max-w-[50ch] pt-1">
              GOQii HealthEngage connects care, monitoring, engagement,
              insurance, pharma and AI in one flexible platform — built for
              healthcare organisations, insurers and digital health partners.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#module-architecture"
                onClick={handleExplorePlatform}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#009959] hover:bg-[#00824B] active:bg-[#006F3F] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 shadow-[0_8px_20px_rgba(0,153,89,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
              >
                <span>Explore Platform</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150"
                  strokeWidth={2}
                />
              </a>

              <button
                type="button"
                onClick={() => onOpenContact('briefing')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0F172A] bg-white border border-[#CBD5E1] hover:border-[#009959] hover:bg-[#F8FAFB] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009959]"
              >
                <MessageSquare
                  className="w-4 h-4 text-[#0F172A]"
                  strokeWidth={1.75}
                />
                <span>Talk to Us</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Hero Banner Visual (top & right end-to-end bleed for image only) */}
          <div className="lg:col-span-7 relative lg:self-start">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative -mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:mx-0 lg:w-[calc(100%+max(2rem,50vw-608px))] overflow-hidden"
            >
              {!heroImgFailed ? (
                <div className="relative w-full overflow-hidden">
                  <img
                    src={HERO_RIGHT_IMAGE}
                    alt="Connected GOQii HealthEngage ecosystem spanning Care, RPM, Engage, Insurance, Pharma, and AI with multicultural healthcare professionals and the Platform Overview dashboard"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgFailed(true)}
                    className="block w-full h-auto object-cover select-none"
                  />
                  {/* Soft left-edge feathering on desktop where image meets the text column */}
                  <div
                    className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F4FBF8]/70 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <div className="aspect-[16/10] w-full flex flex-col items-center justify-center gap-2.5 bg-[#0F172A] text-white p-8 text-center">
                  <HeartPulse
                    className="w-9 h-9 text-[#2BC48A]"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm font-semibold">
                    GOQii HealthEngage Connected Ecosystem &amp; Platform Overview
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating White Proof Bar */}
        <div className="relative z-30 mt-6 lg:-mt-2 bg-white/95 backdrop-blur-xs border border-[#E8EDF2] rounded-2xl shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8EDF2]">
            {/* Proof Point 1 */}
            <div className="px-4 lg:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <Layers
                className="w-6 h-6 text-[#059669] shrink-0"
                strokeWidth={1.85}
              />
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-[28px] font-bold text-[#0F172A] tabular-nums tracking-tight">
                  7
                </span>
                <span className="text-sm font-medium text-[#334155]">
                  Platform categories
                </span>
              </div>
            </div>

            {/* Proof Point 2 */}
            <div className="px-4 lg:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <LayoutGrid
                className="w-6 h-6 text-[#059669] shrink-0"
                strokeWidth={1.85}
              />
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-[28px] font-bold text-[#0F172A] tabular-nums tracking-tight">
                  60+
                </span>
                <span className="text-sm font-medium text-[#334155]">
                  Modules &amp; services
                </span>
              </div>
            </div>

            {/* Proof Point 3 */}
            <div className="px-4 lg:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <Code2
                className="w-6 h-6 text-[#059669] shrink-0"
                strokeWidth={1.85}
              />
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-[24px] font-bold text-[#0F172A] tracking-tight">
                  FHIR/HL7
                </span>
                <span className="text-sm font-medium text-[#334155]">
                  Standards-ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
