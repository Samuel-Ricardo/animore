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
  <div>
    <div>
      <Image />
      <div>
        <div>
          <h2></h2>
          <div>
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
  </div>
);
