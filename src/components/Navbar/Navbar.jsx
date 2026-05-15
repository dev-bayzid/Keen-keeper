"use client";

import Link from "next/link";
import { ChartLine, Clock3, House } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
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
          <ul className="menu menu-horizontal px-1 flex justify-between gap-8 text-gray-500 font-semibold">
            <Link
              href="/"
              className={`flex gap-1 items-center px-2 py-2 rounded-sm ${
                pathName === "/" ? "bg-[#244D3F] text-white" : ""
              }`}
            >
              <House className="w-3.75 h-3.75" /> Home
            </Link>

            <Link
              href="/timeline"
              className={`flex gap-1 items-center px-2 py-2 rounded-sm ${
                pathName === "/timeline" ? "bg-[#244D3F] text-white" : ""
              }`}
            >
              <Clock3 className="w-3.75 h-3.75" /> Timeline
            </Link>

            <Link
              href="/stats"
              className={`flex gap-1 items-center px-2 py-2 rounded-sm ${
                pathName === "/stats" ? "bg-[#244D3F] text-white" : ""
              }`}
            >
              <ChartLine className="w-3.75 h-3.75" /> Stats
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
