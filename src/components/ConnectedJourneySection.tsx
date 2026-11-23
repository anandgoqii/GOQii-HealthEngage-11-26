import React, { useState } from 'react';
import {
  Activity,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BellRing,
  CheckCircle2,
  ClipboardCheck,
  GitMerge,
  HeartPulse,
  LayoutDashboard,
  Route,
  Stethoscope,
  UserPlus,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { getModuleVisual, type IconComponent } from '../data/moduleVisuals';

interface JourneyStage {
  id: string;
  step: string;
  title: string;
  shortTitle: string;
  icon: IconComponent;
  humanSummary: string;
  platformRole: string;
  modules: { id: string; name: string; categoryId: string }[];
  illustrativeSnapshot: {
    viewTitle: string;
    contextLabel: string;
    entries: { label: string; detail: string; state: string }[];
  };
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'onboarding',
    step: '01',
    title: 'Member onboarding',
    shortTitle: 'Onboarding',
    icon: UserPlus,
    humanSummary:
      'A person joins a care, insurer, pharma support, or employer program through their existing portal or care desk without re-entering basic profile records.',
    platformRole:
      'Configurable cohort enrollment and partner identity sync establish a governed tenant profile.',
    modules: [
      { id: 'integrations', name: 'Integrations', categoryId: 'category-07' },
      { id: 'programmanagement', name: 'ProgramManagement', categoryId: 'category-03' },
      { id: 'crm', name: 'CRM', categoryId: 'category-04' },
    ],
    illustrativeSnapshot: {
      viewTitle: 'Cohort Enrollment Record',
      contextLabel: 'Illustrative · Anonymized',
      entries: [
        { label: 'Program Track', detail: 'Preventive Cardiometabolic', state: 'Configured' },
        { label: 'Identity Sync', detail: 'HRIS / Policyholder ID mapped', state: 'Verified' },
        { label: 'Consent Scope', detail: 'Device & care team permissions', state: 'Authorized' },
      ],
    },
  },
  {
    id: 'assessment',
    step: '02',
    title: 'Health assessment',
    shortTitle: 'Assessment',
    icon: ClipboardCheck,
    humanSummary:
      'Members complete a structured health risk assessment, clinic intake, or optional camera-based screening at home or during an outpatient visit.',
    platformRole:
      'Captures structured clinical documentation, lifestyle baselines, and optional contactless vitals into a shared record.',
    modules: [
      { id: 'wellnexus', name: 'WellNexus', categoryId: 'category-03' },
      { id: 'clinic', name: 'Clinic', categoryId: 'category-01' },
      { id: 'facevitals', name: 'FaceVitals', categoryId: 'category-06' },
    ],
    illustrativeSnapshot: {
      viewTitle: 'Baseline Intake Summary',
      contextLabel: 'Illustrative · Anonymized',
      entries: [
        { label: 'WellNexus HRA', detail: 'Lifestyle & sleep baseline completed', state: 'Recorded' },
        { label: 'FaceVitals', detail: 'Optional camera vitals capture', state: 'Available' },
        { label: 'Clinic OPD', detail: 'Initial clinician consultation note', state: 'Linked' },
      ],
    },
  },
  {
    id: 'monitoring',
    step: '03',
    title: 'Monitoring',
    shortTitle: 'Monitoring',
    icon: Activity,
    humanSummary:
      'Between appointments, connected wearables and home medical devices can share activity, sleep, and vital readings smoothly into the member record.',
    platformRole:
      'Where remote monitoring is enabled, Health Device Hub and RPM normalize incoming device streams against configurable thresholds.',
    modules: [
      { id: 'rpm', name: 'RPM', categoryId: 'category-02' },
      { id: 'rvm', name: 'RVM', categoryId: 'category-02' },
      { id: 'health-device-hub', name: 'Health Device Hub', categoryId: 'category-07' },
    ],
    illustrativeSnapshot: {
      viewTitle: 'Remote Vitals Stream',
      contextLabel: 'Illustrative · Anonymized',
      entries: [
        { label: 'Health Device Hub', detail: 'Wearable & home monitor sync', state: 'Connected' },
        { label: 'RVM Thresholds', detail: 'Custom systolic & resting limits', state: 'Set' },
        { label: 'RPM Cohort View', detail: 'Between-visit trend log', state: 'Active' },
      ],
    },
  },
  {
    id: 'risk-identification',
    step: '04',
    title: 'Risk identification',
    shortTitle: 'Risk Detection',
    icon: AlertCircle,
    humanSummary:
      'When a reading crosses a clinical limit or a member disengages, the right team is alerted early rather than waiting for the next scheduled visit.',
    platformRole:
      'Threshold rules, urgency triage, and optional predictive models help prioritize cases that require timely review.',
    modules: [
      { id: 'triage', name: 'Triage', categoryId: 'category-07' },
      { id: 'rpmc', name: 'RPMC', categoryId: 'category-02' },
      {
        id: 'predictive-intervention-engine',
        name: 'Predictive Intervention Engine',
        categoryId: 'category-03',
      },
    ],
    illustrativeSnapshot: {
      viewTitle: 'Priority Review Queue',
      contextLabel: 'Illustrative · Anonymized',
      entries: [
        { label: 'Threshold Event', detail: 'Elevated morning reading flagged', state: 'Queued' },
        { label: 'Triage Routing', detail: 'Assigned to regional nurse pod', state: 'Escalated' },
        { label: 'Predictive Signal', detail: 'Upcoming drop-off indicator', state: 'Roadmap' },
      ],
    },
  },
  {
    id: 'care-intervention',
    step: '05',
    title: 'Care intervention',
    shortTitle: 'Intervention',
    icon: Stethoscope,
    humanSummary:
      'Clinicians, coaches, and care coordinators collaborate on a clear care plan — adjusting guidance, scheduling specialists, or offering one-on-one support.',
    platformRole:
      'CareCoordinate, MediCareManage, and Coach unify multidisciplinary tasks, referrals, and structured coaching protocols.',
    modules: [
      { id: 'medicaremanage', name: 'MediCareManage', categoryId: 'category-01' },
      { id: 'carecoordinate', name: 'CareCoordinate', categoryId: 'category-01' },
      { id: 'coach', name: 'Coach', categoryId: 'category-01' },
    ],
    illustrativeSnapshot: {
      viewTitle: 'Active Care Plan Coordination',
      contextLabel: 'Illustrative · Anonymized',
      entries: [
        { label: 'MediCareManage', detail: '12-week hypertension & nutrition plan', state: 'In Progress' },
        { label: 'CareCoordinate', detail: 'Dietitian + physician task handoff', state: 'Aligned' },
        { label: 'Coach Protocol', detail: 'Bi-weekly habit check-in scheduled', state: 'Booked' },
      ],
    },
  },
  {
    id: 'follow-up',
    step: '06',
    title: 'Follow-up',
    shortTitle: 'Follow-up',
    icon: BellRing,
    humanSummary:
      'Members receive timely education, nutrition guides, reminders, and human agent support that keep care continuous outside clinic walls.',
    platformRole:
      'Engagement and support modules coordinate outreach, content publishing, disease education, and member feedback.',
    modules: [
      { id: 'smartengage', name: 'SmartEngage', categoryId: 'category-03' },
      { id: 'memberconnectagent', name: 'MemberConnectAgent', categoryId: 'category-01' },
      {
        id: 'patient-education-system',
        name: 'Patient Education System',
        categoryId: 'category-05',
      },
    ],
    illustrativeSnapshot: {
      viewTitle: 'Continuous Outreach & Education',
      contextLabel: 'Illustrative · Anonymized',
      entries: [
        { label: 'SmartEngage', detail: 'Weekly follow-up check-in cadence', state: 'Sent' },
        { label: 'Patient Education', detail: 'Medication & diet guidance pack', state: 'Shared' },
        { label: 'Feedback360', detail: 'Post-consult member feedback form', state: 'Collected' },
      ],
    },
  },
  {
    id: 'progress-tracking',
    step: '07',
    title: 'Progress tracking',
    shortTitle: 'Progress',
    icon: LayoutDashboard,
    humanSummary:
      'Both the individual and care organization see clear longitudinal progress, sustained habits, and program milestones in one place.',
    platformRole:
      'EndToEndData, DashboardManagement, and RewardCore consolidate clinical and participation signals into transparent reporting.',
    modules: [
      { id: 'endtoenddata', name: 'EndToEndData', categoryId: 'category-06' },
      { id: 'dashboardmanagement', name: 'DashboardManagement', categoryId: 'category-07' },
      { id: 'rewardcore', name: 'RewardCore', categoryId: 'category-03' },
    ],
    illustrativeSnapshot: {
      viewTitle: 'Longitudinal Outcomes View',
      contextLabel: 'Illustrative · Anonymized',
      entries: [
        { label: 'EndToEndData', detail: 'Unified clinical & activity history', state: 'Consolidated' },
        { label: 'DashboardManagement', detail: 'Cohort adherence & KPI review', state: 'Tracked' },
        { label: 'RewardCore', detail: 'Auditable milestone ledger', state: 'Updated' },
      ],
    },
  },
];

export const ConnectedJourneySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const activeStage = JOURNEY_STAGES[activeIndex];
  const ActiveIcon = activeStage.icon;
  const progressPercent = (activeIndex / (JOURNEY_STAGES.length - 1)) * 100;

  return (
    <section
      id="connected-journey"
      className="py-16 sm:py-24 bg-[#F8FAFB] border-b border-[#E8EDF2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7 space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#158059] tracking-wide">
              <Route className="w-4 h-4" strokeWidth={1.75} />
              <span>Connected Health Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-[#0F172A] tracking-tight leading-[1.14] text-balance">
              Healthcare, connected around people at every step.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-2">
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Follow how an individual experience connects across intake, monitoring,
              clinical intervention, and long-term progress.
            </p>
            <p className="text-xs text-[#64748B]">
              Organizations configure and deploy only the stages and modules relevant to their care or wellness model.
            </p>
          </div>
        </div>

        {/* Desktop Horizontal Interactive Journey Rail (lg+) */}
        <div className="hidden lg:block mb-8">
          <div className="relative pt-2 pb-1">
            {/* Background SVG Connector Line */}
            <div
              className="absolute top-[26px] left-[7%] right-[7%] h-[2px] bg-[#E8EDF2]"
              aria-hidden="true"
            >
              <motion.div
                className="h-full bg-[#2BC48A] origin-left"
                initial={false}
                animate={{ width: `${progressPercent}%` }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>

            <div
              role="tablist"
              aria-label="Connected health journey stages"
              className="relative grid grid-cols-7 gap-2"
            >
              {JOURNEY_STAGES.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = idx === activeIndex;
                const isCompleted = idx < activeIndex;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(idx)}
                    className="group flex flex-col items-center text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC48A] rounded-lg py-1"
                  >
                    <span
                      className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors relative z-10 ${
                        isActive
                          ? 'bg-[#0F172A] border-[#0F172A] text-[#2BC48A]'
                          : isCompleted
                          ? 'bg-[#2BC48A] border-[#2BC48A] text-[#0F172A]'
                          : 'bg-white border-[#CBD5E1] text-[#64748B] group-hover:border-[#2BC48A] group-hover:text-[#0F172A]'
                      }`}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                    </span>

                    <span
                      className={`mt-3 text-[11px] font-semibold tabular-nums ${
                        isActive ? 'text-[#158059]' : 'text-[#64748B]'
                      }`}
                    >
                      Stage {stage.step}
                    </span>
                    <span
                      className={`mt-0.5 text-xs font-semibold leading-snug ${
                        isActive
                          ? 'text-[#0F172A]'
                          : 'text-[#64748B] group-hover:text-[#0F172A]'
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Interactive Timeline (< lg) */}
        <div className="lg:hidden mb-8">
          <div className="relative pl-6 space-y-2 before:content-[''] before:absolute before:left-[15px] before:top-4 before:bottom-4 before:w-px before:bg-[#CBD5E1]">
            {JOURNEY_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = idx === activeIndex;
              const isCompleted = idx < activeIndex;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-expanded={isActive}
                  className={`relative w-full text-left flex items-center justify-between gap-3 px-4 py-3 rounded-lg border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#0F172A]'
                      : 'bg-white/70 border-[#E8EDF2] hover:bg-white'
                  }`}
                >
                  <span
                    className={`absolute -left-6 w-8 h-8 rounded-full border flex items-center justify-center ${
                      isActive
                        ? 'bg-[#0F172A] border-[#0F172A] text-[#2BC48A]'
                        : isCompleted
                        ? 'bg-[#2BC48A] border-[#2BC48A] text-[#0F172A]'
                        : 'bg-white border-[#CBD5E1] text-[#64748B]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </span>
                  <div className="pl-3">
                    <span className="text-[11px] font-semibold text-[#158059] tabular-nums">
                      Stage {stage.step}
                    </span>
                    <div className="text-sm font-semibold text-[#0F172A]">
                      {stage.title}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#64748B] whitespace-nowrap">
                    {isActive ? 'Selected' : 'View'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Split Detail Inspector */}
        <motion.div
          key={activeStage.id}
          initial={prefersReducedMotion ? false : { opacity: 0.75, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#E8EDF2] rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E8EDF2]">
            {/* Left Side: Human Experience & Platform Workflow */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-[#0F172A] text-[#2BC48A] flex items-center justify-center shrink-0">
                      <ActiveIcon className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-[#158059] tabular-nums">
                        Stage {activeStage.step} of 07
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
                        {activeStage.title}
                      </h3>
                    </div>
                  </div>

                  {/* Stepper Prev/Next */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex((prev) =>
                          prev === 0 ? JOURNEY_STAGES.length - 1 : prev - 1
                        )
                      }
                      aria-label="Previous journey stage"
                      className="w-9 h-9 rounded-lg border border-[#E8EDF2] hover:border-[#0F172A] flex items-center justify-center text-[#0F172A] transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex((prev) => (prev + 1) % JOURNEY_STAGES.length)
                      }
                      aria-label="Next journey stage"
                      className="w-9 h-9 rounded-lg border border-[#E8EDF2] hover:border-[#0F172A] flex items-center justify-center text-[#0F172A] transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#E8EDF2]">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A]">
                      <HeartPulse className="w-3.5 h-3.5 text-[#158059]" strokeWidth={1.75} />
                      <span>Human experience</span>
                    </div>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {activeStage.humanSummary}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A]">
                      <GitMerge className="w-3.5 h-3.5 text-[#158059]" strokeWidth={1.75} />
                      <span>Configurable platform workflow</span>
                    </div>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {activeStage.platformRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* Relevant Existing Modules */}
              <div className="pt-4 border-t border-[#E8EDF2] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-[#64748B] mr-1">
                    Supporting modules:
                  </span>
                  {activeStage.modules.map((mod) => {
                    const modVis = getModuleVisual(mod.id);
                    const ModIcon = modVis.icon;
                    return (
                      <a
                        key={mod.id}
                        href={`#${mod.categoryId}`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#F8FAFB] hover:bg-white border border-[#E8EDF2] hover:border-[#2BC48A] text-xs font-semibold text-[#0F172A] transition-colors whitespace-nowrap"
                      >
                        <ModIcon
                          className={`w-3.5 h-3.5 ${modVis.theme.textAccent}`}
                          strokeWidth={1.75}
                        />
                        <span>{mod.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side: Illustrative Interface Preview for Stage */}
            <div className="lg:col-span-5 bg-[#0B1220] text-white p-6 sm:p-8 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-white/10">
                  <span className="text-xs font-semibold text-[#2BC48A]">
                    {activeStage.illustrativeSnapshot.viewTitle}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {activeStage.illustrativeSnapshot.contextLabel}
                  </span>
                </div>

                <div className="mt-4 divide-y divide-white/10 border border-white/10 rounded-lg bg-white/[0.03]">
                  {activeStage.illustrativeSnapshot.entries.map((entry) => (
                    <div
                      key={entry.label}
                      className="px-4 py-3 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white truncate">
                          {entry.label}
                        </div>
                        <div className="text-[11px] text-slate-300 truncate mt-0.5">
                          {entry.detail}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2BC48A] whitespace-nowrap shrink-0">
                        <CheckCircle2 className="w-3 h-3" strokeWidth={1.75} />
                        {entry.state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
                <span className="text-slate-400">
                  Stage {activeStage.step} module capabilities
                </span>
                <a
                  href={`#${activeStage.modules[0].categoryId}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#2BC48A] hover:text-white transition-colors whitespace-nowrap"
                >
                  Explore in directory
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
