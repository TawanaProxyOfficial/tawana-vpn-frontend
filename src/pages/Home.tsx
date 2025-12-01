import { useTheme, useLanguage } from '../hooks';
import { PageLayout } from '../components/templates';
import {
  Header,
  HeroSection,
  FeaturesSection,
  InfrastructureSection,
  AIAssistantSection,
  PricingSection,
  WhyUsSection,
  BlogSection,
  FAQSection,
  Footer,
  FloatingElements,
} from '../components/organisms';
import { ScrollRewards, FloatingSupport, ScrollProgress } from '../components/ui';

export function Home() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <PageLayout>
      <ScrollProgress />
      <Header
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
        t={t}
      />
      <main>
        <HeroSection language={language} t={t} />
        <FeaturesSection language={language} t={t} />
        <InfrastructureSection language={language} t={t} />
        <AIAssistantSection language={language} t={t} />
        <PricingSection language={language} t={t} />
        <WhyUsSection language={language} t={t} />
        <BlogSection language={language} t={t} />
        <FAQSection language={language} t={t} />
      </main>
      <Footer language={language} t={t} />
      <FloatingElements language={language} t={t} />
      <ScrollRewards />
      <FloatingSupport />
    </PageLayout>
  );
}
