import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-white p-10">
      <nav className="space-y-3">
        <nav className="space-y-2">
          <h1 className="font-bold text-6xl">KeenKeeper</h1>
          <p className="text-gray-100">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </nav>
        <div>
          <p className="font-bold">Social Links</p>
        </div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            ></Image>
          </a>
          <a>
            <Image
              src="/facebook.png"
              alt="Instagram"
              width={30}
              height={30}
            ></Image>
          </a>
          <a>
            <Image
              src="/twitter.png"
              alt="Instagram"
              width={30}
              height={30}
            ></Image>
          </a>
        </div>
      </nav>
      {/* <hr className="w-full"/> */}
      <div className="flex justify-between gap-60 text-gray-300 font-extralight border-t border-green-800">
        <div className="py-2">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div>
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
