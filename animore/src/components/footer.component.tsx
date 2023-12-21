import Image from "next/image";

export const Footer = () => (
  <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
    <p className="text-base font-bold text-white">
      @2023 EpicAnimeVault | Samuel Ricardo
    </p>
    <Image />
    <div>
      <Image />
      <Image />
      <Image />
    </div>
  </footer>
);
