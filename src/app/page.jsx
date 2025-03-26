import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollUpButton } from "./components/ScrollUpButton";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-[#121212] text-white overflow-x-hidden">
        {/* Background bubbles with smaller mobile sizes */}
        <div className="absolute top-[10%] left-[5%] sm:left-[30%] w-[15rem] sm:w-[40rem] h-[15rem] sm:h-[40rem] bg-green-300/30 rounded-full bubble-1 blur-[10rem] overflow-hidden" />
        <div className="absolute top-[40%] left-[5%] sm:left-[40%] w-[15rem] sm:w-[40rem] h-[15rem] sm:h-[40rem] bg-blue-500/30 rounded-full bubble-2 blur-[10rem] overflow-hidden" />
        <div className="absolute bottom-[10%] left-[5%] sm:left-[20%] w-[15rem] sm:w-[40rem] h-[15rem] sm:h-[40rem] bg-purple-500/30 rounded-full bubble-3 blur-[10rem] overflow-hidden" />
        <div className="absolute top-[90%] left-[5%] sm:left-[30%] w-[20rem] sm:w-[50rem] h-[20rem] sm:h-[50rem] bg-green-500/30 rounded-full bubble-3 blur-[10rem] overflow-hidden" />
        
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
        <ScrollUpButton />
      </main>
    </>
  );
}
