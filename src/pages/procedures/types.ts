import { LucideIcon } from 'lucide-react';

export interface ProcedureBenefit {
  key: string;
  icon: LucideIcon;
}

export interface ProcedureStep {
  key: string;
}

export interface ProcedureFAQ {
  key: string;
}

export interface ProcedurePageProps {
  title: string;
  description: string;
  benefits: ProcedureBenefit[];
  steps: ProcedureStep[];
  faqs: ProcedureFAQ[];
}
