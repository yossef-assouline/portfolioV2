import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-[#121212] text-white">
      
          
            <div className="absolute top-[10%] left-[30%] w-[40rem] h-[40rem] bg-green-300/30 rounded-full bubble-1 blur-[10rem]" />
            <div className="absolute top-[40%] left-[40%] w-[40rem] h-[40rem] bg-blue-500/30 rounded-full bubble-2 blur-[10rem]" />
            <div className="absolute bottom-[10%] left-[20%] w-[40rem] h-[40rem] bg-purple-500/30 rounded-full bubble-3 blur-[10rem]" />
            <div className="absolute top-[90%] left-[30%] w-[50rem] h-[50rem] bg-green-500/30 rounded-full bubble-3 blur-[10rem]" />
          
        
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
