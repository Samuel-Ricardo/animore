import Image from "next/image";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

export const AnimeCard = ({ anime }: Prop) => (
  <div className="max-w-sm rounded relative w-full">
    <div className="relative w-full h-[37vh]">
      <Image
        src={anime.image.original}
        alt={anime.name}
        fill
        className="rounded-xl"
      />
    </div>
    <div className="py-4 flex flex-col gap-3">
      <div className="flex justify-between items-center gap-1">
        <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
          {anime.name}
        </h2>
        <div className>
          <p></p>
        </div>
      </div>
      <div>
        <div>
          <Image />
          <p></p>
        </div>
        <div>
          <Image />
          <p></p>
        </div>
      </div>
    </div>
  </div>
);
