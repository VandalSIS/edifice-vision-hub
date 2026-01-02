import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import CTASection from '@/components/home/CTASection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Megaparc - Imobiliare, Investiții, Dezvoltare | Chișinău, Moldova</title>
        <meta name="description" content="Megaparc - Companie lider în imobiliare și investiții. 30+ ani experiență, 500+ proiecte finalizate în Moldova." />
        <meta name="keywords" content="investiții Moldova, imobiliare Chișinău, investiții imobiliare, companie imobiliare Moldova" />
        <meta property="og:title" content="Megaparc - We Build the Future" />
        <meta property="og:description" content="Investim în viitorul tău. Peste 30 de ani de experiență în imobiliare și investiții." />
        <link rel="canonical" href="https://megaparc.md/" />
      </Helmet>
      <Layout>
        <HeroSlider />
        <ServicesSection />
        <StatsSection />
        <ProjectsPreview />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
