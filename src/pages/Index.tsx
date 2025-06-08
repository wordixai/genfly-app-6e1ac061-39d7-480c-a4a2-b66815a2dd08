import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsGrid from "../components/StatsGrid";
import GetStartedSteps from "../components/GetStartedSteps";
import FeatureCards from "../components/FeatureCards";
import TopApps from "../components/TopApps";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="tabular-nums">
        <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
          <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
            <HeroSection />
            
            <div className="flex flex-col gap-8 md:gap-12">
              <StatsGrid />
            </div>

            <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
              <GetStartedSteps />
            </div>

            <div className="space-y-4 md:space-y-8">
              <FeatureCards />
            </div>

            <TopApps />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;