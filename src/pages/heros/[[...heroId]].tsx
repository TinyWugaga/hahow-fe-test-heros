import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { Hero, HeroProfileStat } from "@/types";
import { fetchHeros, fetchHeroProfile } from "@/services/hero";

import HeroList from "@/components/HeroList";
import HeroCard from "@/components/HeroCard";
import HeroProfile from "@/components/HeroProfile";

export default function HeroProfilePage({
  heros: initialHeros,
  heroId,
  heroProfile,
}: {
  heros: Hero[];
  heroId: string;
  heroProfile: HeroProfileStat;
}) {
  const [heros, setHeros] = useState<Hero[]>(initialHeros);

  useEffect(() => {
    const getHeros = async () => {
      try {
        const newHeros = await fetchHeros();
        setHeros(newHeros);
      } catch (error) {
        console.error(error);
      }
    };
    getHeros();
  }, []);

  return (
    <>
      <HeroList>
        {heros.map((hero) => (
          <HeroCard key={hero.id} hero={hero} isActive={hero.id === heroId} />
        ))}
      </HeroList>
      {heroId && <HeroProfile heroId={heroId} initialProfile={heroProfile} />}
    </>
  );
}

HeroProfilePage.pageTitle = "Heros Profile";

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params = {} } = ctx;
  const heroId = params.heroId?.[0] || "";

  const heros = await fetchHeros();
  const heroProfile = heroId ? await fetchHeroProfile(heroId) : null;

  return { props: { heros, heroId, heroProfile } };
};
