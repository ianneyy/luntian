import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="py-6  w-full relative z-99">
      <div className="flex justify-between px-16 items-center">
        <span className="text-4xl title text-gray-100">Luntian</span>
        <div
          className="flex gap-5 p-2 rounded-full 
     bg-white/10 border border-white/20 
     backdrop-blur-md  
     text-white font-semibold text-sm"
        >
          <span className="text-black bg-[#53FBA5] py-2 px-4 rounded-full cursor-pointer">
            Home
          </span>
          <span className=" py-2 px-4 rounded-full cursor-pointer">About</span>
          <span className=" py-2 px-4 rounded-full cursor-pointer">
            Contact
          </span>
        </div>
        <div>
          <Button size="sm" className="gap-2 bg-[#53FBA5]">
            <span className="text-black">Book Now</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
}
