import { PhoneCall, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
// import BlurText from "../BlurText";
import ShinyText from "../ShinyText";
import { AnimatedGroup } from "./animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

function Hero() {
  return (
    <div className="w-full px-6 lg:px-0 ">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent z-10"></div> */}

      {/* <img
        src="../img/hundred-island.jpg"
        className="absolute top-0 left-0 opacity-90 z-[-1] w-full max-h-screen object-cover"
        alt=""
      /> */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.4)_0%,transparent_60%)] blur-3xl"></div>
      <div className="container   relative z-40">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="flex  gap-8 mt-10 lg:mt-0 py-20 lg:py-40 items-center justify-center flex-col">
            <div>
              <div
                className="gap-4 py-2 px-4  rounded-full 
     bg-white/10 border border-white/20 
     backdrop-blur-md  
     text-white font-semibold text-xs lg:textsm flex items-center"
              >
                <span>
                  <ShinyText
                    text="Alaminos, Pangasinan"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </span>
                <MapPin className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex gap-4 flex-col">
              {/* <span className="text-[#53FBA5]">Luntian Travel and Tour</span> */}

              <h1 className="text-5xl lg:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                <span className="text-[#53FBA5]">Luntian Travel and Tour</span>
              </h1>

              <p className="text-md lg:text-xl leading-relaxed tracking-tight text-gray-400 max-w-2xl text-center">
                Experience the Philippines' hidden gem through sustainable
                ecotourism. Explore pristine natural parks, vibrant coastal
                ecosystems, and authentic community-based adventures in
                Pangasinan Province.
              </p>
            </div>

            <div className="flex flex-row gap-3">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4  bg-[#53FBA5] text-black">
                Book Now <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-1 flex-wrap justify-evenly text-xs text-white gap-6 mt-3">
              <div
                className="rounded-full bg-white/10 py-2 px-3
     backdrop-blur-md  "
              >
                <span>100% Eco-Friendly</span>
              </div>
              <div
                className="rounded-full bg-white/10 py-2 px-3
     backdrop-blur-md  "
              >
                <span>Community-Based</span>
              </div>
              <div
                className="rounded-full bg-white/10 py-2 px-3
     backdrop-blur-md  "
              >
                <span>Award-Winning Tours</span>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}

export { Hero };
