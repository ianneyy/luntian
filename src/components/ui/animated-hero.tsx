import { PhoneCall, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent z-10"></div>

      <img
        src="../img/hundred-island.jpg"
        className="absolute top-0 left-0 opacity-90 z-[-1] w-full max-h-screen object-cover"
        alt=""
      />
      <div className="container mx-auto  relative z-99">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <span
              className="gap-4 py-2 px-4  rounded-full 
     bg-white/10 border border-white/20 
     backdrop-blur-md  
     text-white font-semibold text-sm"
            >
              Read our launch article
            </span>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-[#53FBA5]">Luntian Travel and Tour</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-400 max-w-2xl text-center">
              Experience the Philippines' hidden gem through sustainable
              ecotourism. Explore pristine natural parks, vibrant coastal
              ecosystems, and authentic community-based adventures in Pangasinan
              Province.
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
        </div>
      </div>
    </div>
  );
}

export { Hero };
