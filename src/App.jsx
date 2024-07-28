import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Technologies from "./components/technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="container m-auto px-8">
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}