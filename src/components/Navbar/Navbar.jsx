"use client";

import Link from "next/link";
import { ChartLine, Clock3, House } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-base-100 shadow-sm w-full">
      <div className="navbar container mx-auto px-4">
        <div className="flex-1">
          <Link href="/">
            <p className="text-xl md:text-2xl">
              <span className="font-bold">Keen</span>
              <span className="text-[#244D3F]">Keeper</span>
            </p>
          </Link>
        </div>

        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href="/"
                className={`flex items-center gap-2 ${
                  pathName === "/" ? "text-[#244D3F] font-bold" : ""
                }`}
              >
                <House className="w-4 h-4" />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/timeline"
                className={`flex items-center gap-2 ${
                  pathName === "/timeline" ? "text-[#244D3F] font-bold" : ""
                }`}
              >
                <Clock3 className="w-4 h-4" />
                Timeline
              </Link>
            </li>

            <li>
              <Link
                href="/stats"
                className={`flex items-center gap-2 ${
                  pathName === "/stats" ? "text-[#244D3F] font-bold" : ""
                }`}
              >
                <ChartLine className="w-4 h-4" />
                Stats
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 text-gray-500 font-semibold">
            <li>
              <Link
                href="/"
                className={`flex gap-2 items-center px-3 py-2 rounded-md transition ${
                  pathName === "/"
                    ? "bg-[#244D3F] text-white"
                    : "hover:bg-base-200"
                }`}
              >
                <House className="w-4 h-4" />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/timeline"
                className={`flex gap-2 items-center px-3 py-2 rounded-md transition ${
                  pathName === "/timeline"
                    ? "bg-[#244D3F] text-white"
                    : "hover:bg-base-200"
                }`}
              >
                <Clock3 className="w-4 h-4" />
                Timeline
              </Link>
            </li>

            <li>
              <Link
                href="/stats"
                className={`flex gap-2 items-center px-3 py-2 rounded-md transition ${
                  pathName === "/stats"
                    ? "bg-[#244D3F] text-white"
                    : "hover:bg-base-200"
                }`}
              >
                <ChartLine className="w-4 h-4" />
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
