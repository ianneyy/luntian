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
      <div className="absolute top-0 w-full">
       <Header />
      </div>

      <section id="home">
        <Hero />
      </section>
    </div>
  );
}
