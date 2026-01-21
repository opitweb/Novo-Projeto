// Exemplo de como estruturar a Index.tsx para SEO
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import BenefitsSection from '../components/home/BenefitsSection';
import CTASection from '../components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BenefitsSection /> {/* Foque em: Ética, Rigor e Resultados */}
      <ServicesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
