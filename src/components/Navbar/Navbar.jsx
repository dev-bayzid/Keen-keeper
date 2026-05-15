import Link from "next/link";
import Image from "next/image";
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
              <Link href="/" className="flex gap-1 items-center">
                <House className="w-[15px] h-[15px]"></House> Home
              </Link>
              <Link href="/timeline" className="flex gap-1 items-center">
                <Clock3 className="w-[15px] h-[15px]"></Clock3> Timeline
              </Link>
              <Link href="/stats" className="flex gap-1 items-center">
                <ChartLine className="w-[15px] h-[15px]"></ChartLine> Stats
              </Link>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
