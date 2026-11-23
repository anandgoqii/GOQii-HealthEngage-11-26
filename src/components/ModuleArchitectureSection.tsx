import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Code2,
  Database,
  FileCode2,
  Layers,
  Lock,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  X,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { MODULE_ARCHITECTURE, SubgroupData } from '../data/platformData';
import {
  CATEGORY_VISUALS,
  getModuleVisual,
  SUBGROUP_VISUALS,
} from '../data/moduleVisuals';
import { HERO_MEDIA, INDUSTRY_MEDIA } from '../data/mediaAssets';
import { SelectedModuleContext } from './ActionModals';

interface ModuleArchitectureSectionProps {
  onSelectModule: (context: SelectedModuleContext) => void;
  isHeaderHidden?: boolean;
}

const LEFT_NAV_PALETTES: Record<
  string,
  { iconBg: string; iconColor: string }
> = {
  'category-01': { iconBg: 'bg-[#E8F8F0]', iconColor: 'text-[#059669]' },
  'category-02': { iconBg: 'bg-[#EBF7FD]', iconColor: 'text-[#0284C7]' },
  'category-03': { iconBg: 'bg-[#F3EEFE]', iconColor: 'text-[#7C3AED]' },
  'category-04': { iconBg: 'bg-[#FEF6E6]', iconColor: 'text-[#D97706]' },
  'category-05': { iconBg: 'bg-[#FEEFEE]', iconColor: 'text-[#E11D48]' },
  'category-06': { iconBg: 'bg-[#EEF2FE]', iconColor: 'text-[#2563EB]' },
  'category-07': { iconBg: 'bg-[#E8F8F0]', iconColor: 'text-[#158059]' },
};

const SUBGROUP_COLUMN_TINTS = [
  {
    card: 'bg-[#F3FBF7] border-[#DCEFE6]',
    headerBg: 'bg-[#E5F6EE]',
    iconCircle: 'bg-white border-[#CBECE0] text-[#059669]',
  },
  {
    card: 'bg-[#F3F9FD] border-[#DCEBF7]',
    headerBg: 'bg-[#E5F2FB]',
    iconCircle: 'bg-white border-[#CBE4F6] text-[#0284C7]',
  },
  {
    card: 'bg-[#F7F4FE] border-[#E7DDFC]',
    headerBg: 'bg-[#EFE8FD]',
    iconCircle: 'bg-white border-[#DDD0FB] text-[#7C3AED]',
  },
  {
    card: 'bg-[#FEF9EE] border-[#F9EBD0]',
    headerBg: 'bg-[#FDF1D6]',
    iconCircle: 'bg-white border-[#F6E1B4] text-[#D97706]',
  },
  {
    card: 'bg-[#FEF4F4] border-[#F9DADA]',
    headerBg: 'bg-[#FDE6E6]',
    iconCircle: 'bg-white border-[#F6CACA] text-[#E11D48]',
  },
  {
    card: 'bg-[#F3F6FE] border-[#DCE4FA]',
    headerBg: 'bg-[#E6ECFD]',
    iconCircle: 'bg-white border-[#CDD9FA] text-[#2563EB]',
  },
];

const CATEGORY_PHOTOS: Record<string, { src: string; alt: string }> = {
  'category-01': { src: HERO_MEDIA.src, alt: HERO_MEDIA.alt },
  'category-02': {
    src: INDUSTRY_MEDIA['hospitals-clinics'].src,
    alt: INDUSTRY_MEDIA['hospitals-clinics'].alt,
  },
  'category-03': {
    src: INDUSTRY_MEDIA.employers.src,
    alt: INDUSTRY_MEDIA.employers.alt,
  },
  'category-04': {
    src: INDUSTRY_MEDIA.insurers.src,
    alt: INDUSTRY_MEDIA.insurers.alt,
  },
  'category-05': {
    src: INDUSTRY_MEDIA.pharma.src,
    alt: INDUSTRY_MEDIA.pharma.alt,
  },
  'category-06': {
    src: INDUSTRY_MEDIA['health-platforms'].src,
    alt: INDUSTRY_MEDIA['health-platforms'].alt,
  },
  'category-07': {
    src: INDUSTRY_MEDIA['health-platforms'].src,
    alt: INDUSTRY_MEDIA['health-platforms'].alt,
  },
};

const BOTTOM_FOUNDATION_ITEMS = [
  { label: 'Data & AI', icon: Database, targetId: 'category-06' },
  { label: 'Automation', icon: Settings, targetId: 'category-03' },
  { label: 'APIs', icon: Code2, targetId: 'category-07' },
  { label: 'Devices', icon: Smartphone, targetId: 'category-07' },
  { label: 'Control', icon: ShieldCheck, targetId: 'category-07' },
  { label: 'FHIR / HL7 ready', icon: FileCode2, targetId: 'category-07' },
  { label: 'Enterprise security', icon: Lock, targetId: 'category-07' },
];

function getSubgroupGridClass(count: number): string {
  if (count === 1) return 'grid-cols-1';
  if (count === 2) return 'grid-cols-1 md:grid-cols-2';
  if (count === 3 || count === 6) return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3';
  return 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4';
}

export const ModuleArchitectureSection: React.FC<
  ModuleArchitectureSectionProps
> = ({ onSelectModule, isHeaderHidden = false }) => {
  const [activeCategoryId, setActiveCategoryId] =
    useState<string>('category-01');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [photoFailed, setPhotoFailed] = useState<Record<string, boolean>>({});
  const prefersReducedMotion = useReducedMotion();

  // Sync deep-links (#category-01 .. #category-07) from anywhere on the page
  useEffect(() => {
    const syncFromHash = (hash: string) => {
      const clean = hash.replace(/^#/, '');
      if (MODULE_ARCHITECTURE.some((c) => c.id === clean)) {
        setActiveCategoryId(clean);
        const container = document.getElementById('module-architecture');
        if (container) {
          container.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
          });
        }
      }
    };

    if (window.location.hash) {
      syncFromHash(window.location.hash);
    }

    const onHashChange = () => syncFromHash(window.location.hash);
    const onDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a');
      const href = target?.getAttribute('href');
      if (href && href.startsWith('#category-')) {
        const catId = href.slice(1);
        if (MODULE_ARCHITECTURE.some((c) => c.id === catId)) {
          e.preventDefault();
          setActiveCategoryId(catId);
          setSearchQuery('');
          const container = document.getElementById('module-architecture');
          if (container) {
            container.scrollIntoView({
              behavior: prefersReducedMotion ? 'auto' : 'smooth',
            });
          }
        }
      }
    };

    window.addEventListener('hashchange', onHashChange);
    document.addEventListener('click', onDocumentClick);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', onDocumentClick);
    };
  }, [prefersReducedMotion]);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const activeCategory =
    MODULE_ARCHITECTURE.find((c) => c.id === activeCategoryId) ||
    MODULE_ARCHITECTURE[0];

  const activeCategoryModuleCount = activeCategory.subgroups.reduce(
    (sum, sg) => sum + sg.modules.length,
    0
  );

  // When searching, search across ALL 61 modules across all 7 categories
  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const results: {
      category: (typeof MODULE_ARCHITECTURE)[number];
      subgroup: SubgroupData;
      modules: SubgroupData['modules'];
    }[] = [];

    MODULE_ARCHITECTURE.forEach((cat) => {
      cat.subgroups.forEach((sg) => {
        const matched = sg.modules.filter(
          (m) =>
            m.name.toLowerCase().includes(normalizedQuery) ||
            m.description.toLowerCase().includes(normalizedQuery) ||
            sg.name.toLowerCase().includes(normalizedQuery) ||
            cat.title.toLowerCase().includes(normalizedQuery)
        );
        if (matched.length > 0) {
          results.push({ category: cat, subgroup: sg, modules: matched });
        }
      });
    });

    return results;
  }, [isSearching, normalizedQuery]);

  const activeCatVisual = CATEGORY_VISUALS[activeCategory.id];
  const ActiveCatIcon = activeCatVisual?.icon || Layers;
  const activeCatPalette =
    LEFT_NAV_PALETTES[activeCategory.id] || LEFT_NAV_PALETTES['category-01'];
  const activePhoto = CATEGORY_PHOTOS[activeCategory.id] || CATEGORY_PHOTOS['category-01'];

  const handleSelectCategory = (catId: string) => {
    setActiveCategoryId(catId);
    setSearchQuery('');
  };

  return (
    <section
      id="module-architecture"
      className="relative overflow-clip bg-gradient-to-b from-[#F3FBF7] via-[#F8FCFA] to-[#FFFFFF] py-16 sm:py-20 lg:py-24 border-b border-[#E2EEE8]"
    >
      {/* Hidden anchor targets for #platform-categories and #category-01..#category-07 compatibility */}
      <div className="sr-only" aria-hidden="true">
        <span id="platform-categories" />
        {MODULE_ARCHITECTURE.map((cat) => (
          <span key={`anchor-${cat.id}`} id={cat.id} />
        ))}
      </div>

      {/* Subtle Organic Mint Waves */}
      <svg
        viewBox="0 0 1440 820"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full select-none"
      >
        <path
          d="M0 0 L 280 0 C 210 140, 110 220, 0 280 Z"
          fill="#D9F4E7"
          fillOpacity="0.65"
        />
        <path
          d="M 1020 820 C 1180 760, 1320 715, 1440 690 L 1440 820 Z"
          fill="#BCEFD7"
          fillOpacity="0.55"
        />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF7F2] border border-[#D4ECE0]">
            <Layers
              className="w-4 h-4 text-[#0F172A] shrink-0"
              strokeWidth={1.85}
            />
            <span className="text-xs sm:text-[13px] font-semibold text-[#0F172A]">
              Complete Module
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] leading-[1.12] text-[#0F172A] text-balance">
            A Complete, End-to-End
            <span className="block text-[#059669]">Health Platform</span>
          </h2>

          <p className="text-sm sm:text-base text-[#334155] leading-[1.68] max-w-2xl mx-auto">
            A modular architecture with 60+ modules across seven integrated
            categories, designed for scale, interoperability and enterprise
            needs.
          </p>
        </div>

        {/* Master-Detail Layout: Left 7 Categories + Right Category & Subgroup/Module Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          {/* LEFT RAIL: All 7 Platform Categories (sticky while scrolling tall right panel) */}
          <div
            role="tablist"
            aria-label="Platform module categories"
            className={`lg:col-span-4 xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 lg:sticky lg:self-start lg:max-h-[calc(100dvh-2rem)] lg:overflow-y-auto lg:p-1 lg:-m-1 no-scrollbar transition-[top] duration-200 ease-out ${
              isHeaderHidden ? 'lg:top-6' : 'lg:top-[88px]'
            }`}
          >
            {MODULE_ARCHITECTURE.map((cat) => {
              const isSelected = !isSearching && cat.id === activeCategory.id;
              const CatIcon = CATEGORY_VISUALS[cat.id]?.icon || Layers;
              const palette =
                LEFT_NAV_PALETTES[cat.id] || LEFT_NAV_PALETTES['category-01'];
              const moduleCount = cat.subgroups.reduce(
                (sum, sg) => sum + sg.modules.length,
                0
              );

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`group w-full text-left rounded-2xl border px-3.5 py-3 flex items-center justify-between gap-2.5 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669] ${
                    isSelected
                      ? 'bg-[#008C54] border-[#008C54] text-white shadow-[0_10px_24px_rgba(0,140,84,0.22)]'
                      : 'bg-white border-[#E5ECF2] text-[#0F172A] hover:border-[#2BC48A] shadow-[0_4px_14px_rgba(15,23,42,0.03)]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-white/15 text-white'
                          : `${palette.iconBg} ${palette.iconColor}`
                      }`}
                    >
                      <CatIcon className="w-5 h-5" strokeWidth={1.85} />
                    </span>
                    <span
                      className={`text-xs sm:text-[13px] font-semibold leading-snug line-clamp-2 ${
                        isSelected ? 'text-white' : 'text-[#0F172A]'
                      }`}
                    >
                      {cat.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="text-right leading-tight">
                      <div
                        className={`text-sm font-bold tabular-nums ${
                          isSelected ? 'text-white' : 'text-[#059669]'
                        }`}
                      >
                        {moduleCount}
                      </div>
                      <div
                        className={`text-[10px] font-medium ${
                          isSelected ? 'text-white/85' : 'text-[#64748B]'
                        }`}
                      >
                        {moduleCount === 1 ? 'Module' : 'Modules'}
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? 'text-white translate-x-0.5'
                          : 'text-[#94A3B8] group-hover:text-[#059669]'
                      }`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT PANEL: Active Category Header + All Subgroups & All Modules */}
          <div className="lg:col-span-8 xl:col-span-9 bg-white border border-[#E2EAEF] rounded-3xl shadow-[0_14px_38px_rgba(15,23,42,0.05)] overflow-hidden">
            {/* Top Active Category Summary Banner */}
            <div className="relative border-b border-[#E8EDF2] px-5 sm:px-7 py-5 sm:py-6 overflow-hidden">
              {/* Softly Feathered Category Photo on Far-Right (md+) */}
              {!isSearching && !photoFailed[activeCategory.id] && (
                <div
                  className="hidden md:block absolute inset-y-0 right-0 w-[230px] pointer-events-none select-none overflow-hidden"
                  aria-hidden="true"
                >
                  <img
                    src={activePhoto.src}
                    alt=""
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setPhotoFailed((prev) => ({
                        ...prev,
                        [activeCategory.id]: true,
                      }))
                    }
                    className="w-full h-full object-cover object-center opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
                </div>
              )}

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 md:pr-44">
                <div className="flex items-start gap-4 min-w-0">
                  <span
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 ${activeCatPalette.iconBg} ${activeCatPalette.iconColor}`}
                  >
                    <ActiveCatIcon className="w-6 h-6" strokeWidth={1.85} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-[#059669] tabular-nums">
                      {isSearching
                        ? 'Search across all 7 categories'
                        : activeCategory.number}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                      {isSearching
                        ? `Matching Modules (${searchResults.reduce(
                            (acc, r) => acc + r.modules.length,
                            0
                          )})`
                        : activeCategory.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-1 max-w-xl">
                      {isSearching
                        ? 'Showing matching modules across every category and subgroup. Click any module to inspect details.'
                        : activeCategory.description}
                    </p>
                  </div>
                </div>

                {/* Module & Subgroup KPI Counters */}
                {!isSearching && (
                  <div className="flex items-center divide-x divide-[#E2E8F0] shrink-0">
                    <div className="pr-5">
                      <div className="text-2xl sm:text-3xl font-bold text-[#059669] tabular-nums leading-none">
                        {activeCategoryModuleCount}
                      </div>
                      <div className="text-xs font-medium text-[#0F172A] mt-1">
                        {activeCategoryModuleCount === 1 ? 'Module' : 'Modules'}
                      </div>
                    </div>
                    <div className="pl-5">
                      <div className="text-2xl sm:text-3xl font-bold text-[#0F172A] tabular-nums leading-none">
                        {activeCategory.subgroups.length}
                      </div>
                      <div className="text-xs font-medium text-[#0F172A] mt-1">
                        {activeCategory.subgroups.length === 1
                          ? 'Subgroup'
                          : 'Subgroups'}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Subgroups & Modules Header + Compact Search */}
            <div className="px-5 sm:px-7 pt-5 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                <Layers
                  className="w-4 h-4 text-[#0F172A] shrink-0"
                  strokeWidth={1.85}
                />
                <span>
                  {isSearching
                    ? 'Search Results across All Modules'
                    : 'Subgroups & Modules'}
                </span>
              </div>

              <div className="relative w-full sm:w-72">
                <label htmlFor="module-arch-search" className="sr-only">
                  Search all 61 modules
                </label>
                <Search
                  className="w-3.5 h-3.5 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  strokeWidth={1.75}
                />
                <input
                  id="module-arch-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search all 61 modules..."
                  className="w-full pl-8 pr-8 py-1.5 text-xs bg-[#F8FAFB] border border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:bg-white focus:border-[#2BC48A] transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </button>
                )}
              </div>
            </div>

            {/* Body: All Subgroups & All Modules Grid */}
            <div className="px-5 sm:px-7 pb-7">
              {isSearching ? (
                searchResults.length === 0 ? (
                  <div className="border border-[#E8EDF2] rounded-2xl p-8 text-center space-y-2.5 bg-[#F8FAFB]">
                    <p className="text-sm font-semibold text-[#0F172A]">
                      No modules matched &ldquo;{searchQuery}&rdquo;
                    </p>
                    <p className="text-xs text-[#64748B]">
                      Try searching MediCareManage, RPM, SmartEngage, WellNexus,
                      CRM, MediGenie, or API Center.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="px-4 py-1.5 text-xs font-semibold text-white bg-[#008C54] hover:bg-[#007446] rounded-lg transition-colors cursor-pointer"
                    >
                      Reset search
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {searchResults.map(({ category, subgroup, modules }, idx) => {
                      const tint =
                        SUBGROUP_COLUMN_TINTS[
                          idx % SUBGROUP_COLUMN_TINTS.length
                        ];
                      const sgVis = SUBGROUP_VISUALS[subgroup.id];
                      const SgIcon = sgVis?.icon || Layers;

                      return (
                        <div
                          key={`${category.id}-${subgroup.id}`}
                          className={`rounded-2xl border overflow-hidden flex flex-col ${tint.card}`}
                        >
                          <div
                            className={`px-3.5 py-3 flex items-center gap-2.5 ${tint.headerBg}`}
                          >
                            <span
                              className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${tint.iconCircle}`}
                            >
                              <SgIcon className="w-4 h-4" strokeWidth={1.85} />
                            </span>
                            <div className="min-w-0">
                              <div className="text-[10px] font-semibold text-[#475569] truncate">
                                {category.shortLabel}
                              </div>
                              <div className="text-xs sm:text-[13px] font-bold text-[#0F172A] truncate">
                                {subgroup.name}
                              </div>
                            </div>
                          </div>

                          <div className="p-2.5 space-y-2 flex-1">
                            {modules.map((mod) => {
                              const modVis = getModuleVisual(
                                mod.id,
                                subgroup.id
                              );
                              const ModIcon = modVis.icon;
                              return (
                                <button
                                  key={mod.id}
                                  type="button"
                                  onClick={() =>
                                    onSelectModule({
                                      module: mod,
                                      categoryId: category.id,
                                      categoryNumber: category.number,
                                      categoryTitle: category.title,
                                      subgroupId: subgroup.id,
                                      subgroupName: subgroup.name,
                                    })
                                  }
                                  className="group w-full text-left bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-xl px-3 py-2.5 flex items-start justify-between gap-2 transition-all duration-150 cursor-pointer shadow-[0_2px_6px_rgba(15,23,42,0.02)]"
                                >
                                  <div className="flex items-start gap-2.5 min-w-0">
                                    <span
                                      className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${modVis.theme.iconBox}`}
                                    >
                                      <ModIcon
                                        className="w-3.5 h-3.5"
                                        strokeWidth={1.75}
                                      />
                                    </span>
                                    <div className="min-w-0">
                                      <div className="text-xs font-semibold text-[#0F172A] group-hover:text-[#059669] transition-colors truncate">
                                        {mod.name}
                                      </div>
                                      <div className="text-[11px] text-[#64748B] line-clamp-2 leading-snug mt-0.5">
                                        {mod.description}
                                      </div>
                                      {mod.comingSoon && (
                                        <span className="inline-block text-[10px] font-semibold text-[#059669] mt-1">
                                          Coming Soon
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <ArrowUpRight
                                    className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#059669] shrink-0 mt-1"
                                    strokeWidth={1.75}
                                  />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )
              ) : (
                <motion.div
                  key={activeCategory.id}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0.75, y: 4 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid gap-3.5 sm:gap-4 ${getSubgroupGridClass(
                    activeCategory.subgroups.length
                  )}`}
                >
                  {activeCategory.subgroups.map((subgroup, sgIdx) => {
                    const tint =
                      SUBGROUP_COLUMN_TINTS[
                        sgIdx % SUBGROUP_COLUMN_TINTS.length
                      ];
                    const sgVis = SUBGROUP_VISUALS[subgroup.id];
                    const SgIcon = sgVis?.icon || ActiveCatIcon;
                    const singleSubgroup =
                      activeCategory.subgroups.length === 1;

                    return (
                      <div
                        key={subgroup.id}
                        className={`rounded-2xl border overflow-hidden flex flex-col ${tint.card}`}
                      >
                        {/* Pastel Subgroup Header */}
                        <div
                          className={`px-3.5 py-3 flex items-center gap-2.5 ${tint.headerBg}`}
                        >
                          <span
                            className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${tint.iconCircle}`}
                          >
                            <SgIcon className="w-4 h-4" strokeWidth={1.85} />
                          </span>
                          <div className="min-w-0">
                            <h4 className="text-[13px] font-bold text-[#0F172A] leading-tight truncate">
                              {subgroup.name}
                            </h4>
                            <div className="text-[11px] font-medium text-[#475569] tabular-nums mt-0.5">
                              {subgroup.modules.length}{' '}
                              {subgroup.modules.length === 1
                                ? 'Module'
                                : 'Modules'}
                            </div>
                          </div>
                        </div>

                        {/* All Modules inside this Subgroup */}
                        <div
                          className={`p-2.5 flex-1 ${
                            singleSubgroup && subgroup.modules.length > 1
                              ? 'grid grid-cols-1 md:grid-cols-3 gap-2.5'
                              : 'space-y-2'
                          }`}
                        >
                          {subgroup.modules.map((mod) => {
                            const modVis = getModuleVisual(mod.id, subgroup.id);
                            const ModIcon = modVis.icon;

                            return (
                              <button
                                key={mod.id}
                                type="button"
                                onClick={() =>
                                  onSelectModule({
                                    module: mod,
                                    categoryId: activeCategory.id,
                                    categoryNumber: activeCategory.number,
                                    categoryTitle: activeCategory.title,
                                    subgroupId: subgroup.id,
                                    subgroupName: subgroup.name,
                                  })
                                }
                                className="group w-full text-left bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-xl px-3 py-2.5 flex items-start justify-between gap-2 transition-all duration-150 cursor-pointer shadow-[0_2px_6px_rgba(15,23,42,0.02)] hover:shadow-[0_6px_16px_rgba(15,23,42,0.05)]"
                              >
                                <div className="flex items-start gap-2.5 min-w-0">
                                  <span
                                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${modVis.theme.iconBox}`}
                                  >
                                    <ModIcon
                                      className="w-3.5 h-3.5"
                                      strokeWidth={1.75}
                                    />
                                  </span>
                                  <div className="min-w-0">
                                    <div className="text-xs font-semibold text-[#0F172A] group-hover:text-[#059669] transition-colors leading-snug">
                                      {mod.name}
                                    </div>
                                    <p className="text-[11px] text-[#64748B] leading-snug mt-0.5 line-clamp-2">
                                      {mod.description}
                                    </p>
                                    {mod.comingSoon && (
                                      <span className="inline-block text-[10px] font-semibold text-[#059669] mt-1">
                                        Coming Soon
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <ArrowUpRight
                                  className="w-3.5 h-3.5 text-[#CBD5E1] group-hover:text-[#059669] shrink-0 mt-1 transition-colors"
                                  strokeWidth={1.75}
                                  aria-hidden="true"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Floating Foundation & Platform Services Bar */}
        <div className="relative z-20 mt-8 lg:mt-10 bg-white/95 backdrop-blur-xs border border-[#E8EDF2] rounded-2xl shadow-[0_12px_36px_rgba(15,23,42,0.06)] px-5 py-4 sm:py-5">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">
            <div className="flex items-center gap-3 shrink-0">
              <span className="w-10 h-10 rounded-full bg-[#DCF5EA] border border-[#BCEBD5] flex items-center justify-center text-[#059669] shrink-0">
                <Layers className="w-5 h-5" strokeWidth={1.85} />
              </span>
              <div className="text-sm sm:text-[15px] font-bold text-[#0F172A] leading-tight">
                Foundation &amp;
                <span className="block">Platform Services</span>
              </div>
            </div>

            <div className="flex flex-wrap xl:flex-nowrap items-center gap-x-4 gap-y-3 xl:gap-x-0 xl:divide-x xl:divide-[#E2E8F0]">
              {BOTTOM_FOUNDATION_ITEMS.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleSelectCategory(item.targetId)}
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#0F172A] hover:text-[#059669] transition-colors whitespace-nowrap xl:pr-3.5 cursor-pointer ${
                      idx === 0 ? 'xl:pl-0' : 'xl:pl-3.5'
                    }`}
                  >
                    <ItemIcon
                      className="w-4 h-4 text-[#0F172A] shrink-0"
                      strokeWidth={1.75}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
