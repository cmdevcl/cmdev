import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Dashboard />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
