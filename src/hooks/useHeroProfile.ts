import { useState, useEffect, useMemo, useCallback } from "react";

import { HeroProfileStat } from "@/types";
import { fetchHeroProfile, updateHeroProfile } from "@/services/hero";

const useHeroProfile = ({
  id,
  initialStat,
}: {
  id: string | number;
  initialStat: HeroProfileStat;
}) => {
  const [heroProfile, setHeroProfile] = useState<HeroProfileStat>(initialStat);

  const totalStat = useMemo(
    () => Object.values(initialStat).reduce((acc, current) => acc + current, 0),
    [initialStat]
  );
  const restStat = useMemo(() => {
    const currentStat = Object.values(heroProfile).reduce(
      (acc, current) => acc + current,
      0
    );
    return totalStat - currentStat;
  }, [totalStat, heroProfile]);

  const getHeroProfile = useCallback(async (heroId: string | number) => {
    try {
      const newHeroProfile = await fetchHeroProfile(heroId);
      setHeroProfile(newHeroProfile);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onChangeHeroStat = useCallback((newStat: Partial<HeroProfileStat>) => {
    setHeroProfile((prev) => ({
      ...prev,
      ...newStat,
    }));
  }, []);

  const onUpdateHeroStat = useCallback(
    async (newStat: HeroProfileStat) => {
      try {
        if (id && restStat === 0) {
          await updateHeroProfile(id, newStat);
          await getHeroProfile(id);
        }
      } catch (error) {
        console.error({ updateHeroStatError: error });
      }
    },
    [id, restStat, getHeroProfile]
  );

  useEffect(() => {
    if (id) {
      getHeroProfile(id);
    }
  }, [id, getHeroProfile]);

  return {
    heroProfile,
    totalStat,
    restStat,
    onChangeHeroStat,
    onUpdateHeroStat,
  };
};

export default useHeroProfile;
