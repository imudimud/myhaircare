import React from 'react';
import { Diamond, CheckCircle2, Clock, Star } from 'lucide-react';
import ProcedureLayout from './ProcedureLayout';

const benefits = [
  {
    key: 'naturalResults',
    icon: Star
  },
  {
    key: 'minimalScarring',
    icon: Diamond
  },
  {
    key: 'fasterRecovery',
    icon: Clock
  },
  {
    key: 'highDensity',
    icon: CheckCircle2
  }
];

const steps = [
  {
    key: 'extraction',
  },
  {
    key: 'preparation',
  },
  {
    key: 'implantation',
  },
  {
    key: 'aftercare',
  }
];

const faqs = [
  {
    key: 'sapphireBlade',
  },
  {
    key: 'recovery',
  },
  {
    key: 'results',
  },
  {
    key: 'difference',
  }
];

export default function SapphireFue() {
  return (
    <ProcedureLayout
      namespace="procedures.sapphireFue"
      title="Sapphire FUE Hair Transplant"
      description="Advanced hair transplantation using sapphire blades for more precise, natural-looking results with minimal scarring."
      benefits={benefits}
      steps={steps}
      faqs={faqs}
    />
  );
}
