export interface Hero {
  id: string;
  name: string;
  image: string;
}

export type HeroProfileStatKeys = "str" | "int" | "agi" | "luk";

export type HeroProfileStat = {
  [statKey in HeroProfileStatKeys]: number;
};
