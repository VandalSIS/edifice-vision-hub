import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import TeamSection from '@/components/home/TeamSection';
import GeographySection from '@/components/home/GeographySection';
import CompaniesSection from '@/components/home/CompaniesSection';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import CTASection from '@/components/home/CTASection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Megaparc - IMC Group | Investiții, Imobiliare, Dezvoltare | Moldova</title>
        <meta name="description" content="IMC Group - 16 companii, 980+ angajați, prezență în 4 continente. Lider în investiții și dezvoltare imobiliară în Moldova și Europa." />
        <meta name="keywords" content="IMC Group, Megaparc, investiții Moldova, imobiliare Chișinău, investiții internaționale, dezvoltare imobiliară, companii Moldova" />
        <meta property="og:title" content="Megaparc - Investim în Viitorul Tău" />
        <meta property="og:description" content="IMC Group - 16 companii, 980+ angajați, prezență globală în 15+ țări pe 4 continente." />
        <link rel="canonical" href="https://megaparc.md/" />
      </Helmet>
      <Layout>
        <HeroSlider />
        <ServicesSection />
        <StatsSection />
        <TeamSection />
        <GeographySection />
        <CompaniesSection />
        <ProjectsPreview />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
