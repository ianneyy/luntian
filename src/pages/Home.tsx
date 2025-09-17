import { Hero } from "@/components/ui/animated-hero";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   // NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   // NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
import Header from "@/components/ui/header";
export default function Home() {
  return (
    <div>
      <div className="absolute top-0 w-full bg-[#0F1913]">
        <Header />
      </div>

      <section id="home" className="bg-[#0F1913]">
        <Hero />
      </section>
    </div>
  );
}
