import { DareDevil, Thor, IronMan, Hulk } from "@/components/HeroCharacter";

export const DEFAULT_STAT = {
  str: 0,
  int: 0,
  agi: 0,
  luk: 0,
};

export const HERO_CHARACTER: Record<string, any> = {
  "1": DareDevil,
  "2": Thor,
  "3": IronMan,
  "4": Hulk,
};
