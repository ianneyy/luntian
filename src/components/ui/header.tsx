import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "/" },
];

export default function Header() {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <div className="py-6  w-full relative z-99">
      <div data-state={menuState && "active"} className="flex px-10 lg:px-16 ">
        <div className="flex lg:hidden justify-between w-full">
          <span className="text-4xl title text-gray-100">Luntian</span>
          <button
            onClick={() => setMenuState(!menuState)}
            aria-label={menuState == true ? "Close Menu" : "Open Menu"}
            data-state={menuState ? "active" : "inactive"}
            className="group relative z-[60] -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white"
          >
            <Menu
              className={`m-auto size-6 duration-200 transition-all ${
                menuState
                  ? "rotate-180 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 m-auto size-6 duration-200 transition-all ${
                menuState
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-180 scale-0 opacity-0"
              }`}
            />
          </button>
        </div>

        <div className="hidden lg:flex justify-between w-full items-center">
          <span className="text-4xl title text-gray-100">Luntian</span>

          <div
            className=" gap-5 py-3 px-2 rounded-full 
                bg-white/10 border border-white/20 
                backdrop-blur-md  
                text-white font-semibold text-sm "
          >
            <span className="text-black bg-[#53FBA5] py-2 px-4 rounded-full cursor-pointer">
              Home
            </span>
            <span className=" py-2 px-4 rounded-full cursor-pointer">
              About
            </span>
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

        <div
          className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden ${
            menuState ? "block" : "hidden"
          }`}
        >
          <div className="absolute top-20 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 min-w-[300px] z-100">
            <ul className="space-y-6 ">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <span
                    className="text-white  visited:text-white block duration-150 text-lg font-medium"
                    onClick={() => setMenuState(false)}
                  >
                    <span>{item.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <Menu className="h-6 w-6 block lg:hidden text-white" /> */}
      </div>
    </div>
  );
}
