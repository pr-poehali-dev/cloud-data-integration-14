import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Directions from "@/components/Directions";
import FoodSection from "@/components/FoodSection";
import ShopSection from "@/components/ShopSection";
import CoursesSection from "@/components/CoursesSection";
import TrustBlock from "@/components/TrustBlock";
import SeversStory from "@/components/SeversStory";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Directions />
      <FoodSection />
      <ShopSection />
      <CoursesSection />
      <TrustBlock />
      <SeversStory />
      <FinalCTA />
    </main>
  );
};

export default Index;
