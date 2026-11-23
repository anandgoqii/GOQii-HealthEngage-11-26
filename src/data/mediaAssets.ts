import heroCareConsultation from '../assets/images/hero_care_consultation_1795411939227.jpg';
import industryInsurersAdvisor from '../assets/images/industry_insurers_advisor_1795411939099.jpg';
import industryHospitalsMonitoring from '../assets/images/industry_hospitals_monitoring_1795411939270.jpg';
import industryPharmaSupport from '../assets/images/industry_pharma_support_1795411939626.jpg';
import industryEmployersWellness from '../assets/images/industry_employers_wellness_1795411938882.jpg';
import industryPlatformsArchitects from '../assets/images/industry_platforms_architects_1795411939051.jpg';

export interface MediaAssetSpec {
  src: string;
  alt: string;
  caption: string;
}

export const HERO_MEDIA: MediaAssetSpec = {
  src: heroCareConsultation,
  alt: 'Physician and patient reviewing longitudinal care progress together on a tablet in a sunlit consultation room',
  caption: 'Clinician & member care plan review',
};

export const INDUSTRY_MEDIA: Record<string, MediaAssetSpec> = {
  insurers: {
    src: industryInsurersAdvisor,
    alt: 'Health insurer care advisor supporting a member via video consultation in a bright workspace',
    caption: 'Policyholder care & engagement guidance',
  },
  'hospitals-clinics': {
    src: industryHospitalsMonitoring,
    alt: 'Clinical nurse specialist monitoring patient remote vitals trends in a calm hospital care suite',
    caption: 'Post-discharge RPM & clinical coordination',
  },
  pharma: {
    src: industryPharmaSupport,
    alt: 'Patient support specialist discussing therapy adherence and disease education guides with a patient',
    caption: 'Patient Support Program & therapy guidance',
  },
  employers: {
    src: industryEmployersWellness,
    alt: 'Professionals walking on a sunlit corporate campus checking activity goals on a smartwatch',
    caption: 'Preventive workforce wellbeing & activity tracking',
  },
  'health-platforms': {
    src: industryPlatformsArchitects,
    alt: 'Healthcare technology architects collaborating over wearable devices and API architecture plans',
    caption: 'Composable API & connected device architecture',
  },
};
