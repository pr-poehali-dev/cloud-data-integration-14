import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import DayTimeline from "@/components/DayTimeline";
import Promo from "@/components/Promo";
import Personalization from "@/components/Personalization";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <DayTimeline />
      <Promo />
      <Personalization />
      <Footer />
    </main>
  );
};

export default Index;
