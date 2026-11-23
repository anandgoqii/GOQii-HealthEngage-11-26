import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { PLATFORM_CATEGORIES } from '../data/platformData';
import {
  CATEGORY_VISUALS,
  MODULE_COLOR_THEMES,
} from '../data/moduleVisuals';
import { CategoryInterfacePreview } from './PlatformInterfacePreviews';

export const PlatformCategoriesSection: React.FC = () => {
  const cat02 = PLATFORM_CATEGORIES[1];
  const cat05 = PLATFORM_CATEGORIES[4];

  const renderCategoryHeaderBlock = (
    cat: (typeof PLATFORM_CATEGORIES)[number],
    dark = false
  ) => {
    const vis = CATEGORY_VISUALS[cat.id];
    const CatIcon = vis?.icon || Layers;
    const theme = MODULE_COLOR_THEMES[vis?.color || 'emerald'];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className={`w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 ${theme.iconBox}`}
          >
            <CatIcon className="w-5 h-5" strokeWidth={1.75} />
          </span>
          <div className="space-y-0.5 tabular-nums">
            <div
              className={`text-xs font-semibold ${
                dark ? 'text-[#2BC48A]' : 'text-[#158059]'
              }`}
            >
              {cat.number}
            </div>
            <div
              className={`text-xs font-medium ${
                dark ? 'text-slate-300' : 'text-[#64748B]'
              }`}
            >
              {cat.moduleCountLabel} · {cat.subgroupCountLabel}
            </div>
          </div>
        </div>

        <h3
          className={`text-2xl sm:text-[28px] font-semibold tracking-tight leading-snug ${
            dark ? 'text-white' : 'text-[#0F172A]'
          }`}
        >
          {cat.title}
        </h3>

        <p
          className={`text-sm sm:text-base leading-relaxed ${
            dark ? 'text-slate-300' : 'text-[#64748B]'
          }`}
        >
          {cat.description}
        </p>

        <div className="pt-1">
          <a
            href={`#${cat.id}`}
            className={`group inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap transition-colors ${
              dark
                ? 'text-[#2BC48A] hover:text-white'
                : 'text-[#158059] hover:text-[#0F172A]'
            }`}
          >
            <span>Explore {cat.shortLabel} modules</span>
            <ArrowUpRight
              className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              strokeWidth={1.75}
            />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section
      id="platform-categories"
      className="bg-white border-b border-[#E8EDF2]"
    >
      {/* 02 · Remote Monitoring & Vitals (Full-Width Dark Telemetry Band: Visual Left + Editorial Right) */}
      <div
        id={`showcase-${cat02.id}`}
        className="py-14 sm:py-20 bg-[#0B1220] text-white border-b border-white/10"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 bg-white text-[#0F172A] rounded-xl p-5 sm:p-6 border border-white/15">
            <CategoryInterfacePreview categoryId={cat02.id} />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            {renderCategoryHeaderBlock(cat02, true)}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2BC48A]" strokeWidth={1.75} />
                <span>RPM · RVM · RPMC clinical cohort command</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2BC48A]" strokeWidth={1.75} />
                <span>Custom vital reading limits &amp; threshold escalation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 05 · Pharma & Patient Support Ecosystem */}
      <div
        id={`showcase-${cat05.id}`}
        className="py-14 sm:py-20 bg-[#F8FAFB] border-b border-[#E8EDF2]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            {renderCategoryHeaderBlock(cat05, false)}
          </div>
          <div className="lg:col-span-7 bg-white border border-[#E8EDF2] rounded-xl p-5 sm:p-6">
            <CategoryInterfacePreview categoryId={cat05.id} />
          </div>
        </div>
      </div>
    </section>
  );
};
