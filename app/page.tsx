import CasesStatic from "@/components/CasesStatic";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import RevealController from "@/components/RevealController";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CasesStatic />
        <HowWeWork />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
