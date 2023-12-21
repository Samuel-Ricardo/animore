import Image from "next/image";

export const Footer = () => (
  <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
    <p className="text-base font-bold text-white">
      @2023 EpicAnimeVault | Samuel Ricardo
    </p>
    <Image
      src="./logo.svg"
      alt="logo"
      width={47}
      height={44}
      className="object-contain"
    />
    <div className="flec items-center gap-6">
      <Image
        src="./tiktok.svg"
        alt="tiktok logo"
        width={19}
        height={19}
        className="object-contain"
      />
      <Image
        src="./instagram.svg"
        alt="instagram logo"
        width={19}
        height={19}
        className="object-contain"
      />
      <Image
        src="./twitter.svg"
        alt="twitter logo"
        width={19}
        height={19}
        className="object-contain"
      />
    </div>
  </footer>
);
