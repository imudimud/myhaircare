import React from 'react';
import { Star, Diamond, Clock, CheckCircle2 } from 'lucide-react';
import ProcedureLayout from './ProcedureLayout';
import { useTranslation } from '../../hooks/useTranslation';
import { SEOHelmet } from '../../components/SEOHelmet';
import Layout from '../../components/layout/Layout';
import { generateMedicalProcedureSchema, generateFAQSchema } from '../../utils/schemaMarkup';

const benefits = [
  {
    key: 'precision',
    icon: Diamond
  },
  {
    key: 'natural',
    icon: Star
  },
  {
    key: 'recovery',
    icon: Clock
  },
  {
    key: 'density',
    icon: CheckCircle2
  }
];

const steps = [
  {
    key: 'consultation'
  },
  {
    key: 'extraction'
  },
  {
    key: 'implantation'
  },
  {
    key: 'aftercare'
  }
];

const faqs = [
  {
    key: 'whatIsDHI'
  },
  {
    key: 'benefits'
  },
  {
    key: 'recovery'
  },
  {
    key: 'results'
  }
];

export default function DHI() {
  const { t } = useTranslation();
  const namespace = 'procedures.dhi';

  const schemaMarkup = {
    medicalProcedure: generateMedicalProcedureSchema({
      name: t(`${namespace}.title`),
      description: t(`${namespace}.description`),
      procedureType: 'DHI Hair Transplant',
      benefits: [
        t(`${namespace}.benefits.1`),
        t(`${namespace}.benefits.2`),
        t(`${namespace}.benefits.3`)
      ],
      risks: [
        t(`${namespace}.risks.1`),
        t(`${namespace}.risks.2`),
        t(`${namespace}.risks.3`)
      ],
      preparation: [
        t(`${namespace}.preparation.1`),
        t(`${namespace}.preparation.2`),
        t(`${namespace}.preparation.3`)
      ],
      recovery: [
        t(`${namespace}.recovery.1`),
        t(`${namespace}.recovery.2`),
        t(`${namespace}.recovery.3`)
      ]
    }),
    faq: generateFAQSchema(
      faqs.map(faq => ({
        question: t(`${namespace}.faq.${faq.key}.question`),
        answer: t(`${namespace}.faq.${faq.key}.answer`)
      }))
    )
  };

  return (
    <Layout heroBackground="/images/procedures/dhi-hero.jpg">
      <SEOHelmet
        title={t(`${namespace}.seo.title`)}
        description={t(`${namespace}.seo.description`)}
        schema={[schemaMarkup.medicalProcedure, schemaMarkup.faq]}
      />
      <ProcedureLayout
        namespace={namespace}
        title={t(`${namespace}.title`)}
        description={t(`${namespace}.description`)}
        benefits={benefits}
        steps={steps}
        faqs={faqs}
      />
    </Layout>
  );
}
