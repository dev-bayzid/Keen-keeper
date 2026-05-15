import Link from "next/link";

import { ChartLine, Clock3, House } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm max-w-full">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link href="/">
            <p className="text-2xl">
              <span className="font-bold">Keen</span>
              <span className="text-[#244D3F]">Keeper</span>
            </p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <ul className="flex justify-between gap-8">
              <Link href="/">
                <button className="flex gap-1 items-center">
                  <House className="w-3.75 h-3.75"></House> Home
                </button>
              </Link>
              <Link href="/timeline">
                <button className="flex gap-1 items-center">
                  <Clock3 className="w-3.75 h-3.75"></Clock3> Timeline
                </button>
              </Link>
              <Link href="/stats">
                <button className="flex gap-1 items-center">
                  <ChartLine className="w-3.75 h-3.75"></ChartLine> Stats
                </button>
              </Link>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
