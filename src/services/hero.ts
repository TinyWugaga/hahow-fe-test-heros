import { HeroProfileStat } from "@/types";

export const fetchHeros = async () => {
  try {
    const response = await fetch("https://hahow-recruit.herokuapp.com/heroes", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error({ fetchHerosError: error });
  }
};

export const fetchHeroProfile = async (id: string) => {
  try {
    const response = await fetch(
      `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error({ fetchHerosError: error });
  }
};

export const updateHeroProfile = async (
  id: string,
  profile: HeroProfileStat
) => {
  try {
    const response = await fetch(
      `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(profile),
      }
    );
    return await response.text();
  } catch (error) {
    console.error({ updateHeroProfileError: error });
  }
};
