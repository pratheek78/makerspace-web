import Hero from "@/components/hero"
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {FaHome} from 'react-icons/fa';
import { BentoGridSecondDemo } from "@/components/grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 scroll-smooth">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon:<FaHome />}
        ]}/>
        <BentoGridSecondDemo />

      </div>
    </main>
  );
}
