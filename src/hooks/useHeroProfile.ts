import { useState, useEffect, useMemo, useCallback } from "react";

import { HeroProfileStat, HeroProfileStatKeys } from "@/types";
import { fetchHeroProfile, updateHeroProfile } from "@/services/hero";

const useHeroProfile = ({
  id,
  initialStat,
}: {
  id: string;
  initialStat: HeroProfileStat;
}) => {
  const [heroProfile, setHeroProfile] = useState<HeroProfileStat>(initialStat);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const totalStatValue = useMemo(
    () => Object.values(initialStat).reduce((acc, current) => acc + current, 0),
    [initialStat]
  );
  const restStatValue = useMemo(() => {
    const currentStat = Object.values(heroProfile).reduce(
      (acc, current) => acc + current,
      0
    );
    return totalStatValue - currentStat;
  }, [totalStatValue, heroProfile]);

  const getHeroProfile = useCallback(async (heroId: string) => {
    try {
      setIsLoading(true);
      const newHeroProfile = await fetchHeroProfile(heroId);
      setIsLoading(false);
      setHeroProfile(newHeroProfile);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, []);

  const validateValues = useCallback(
    (stat: Partial<HeroProfileStat>) => {
      const totalCostValue = Object.entries(stat).reduce(
        (acc, [key, value]) =>
          acc + value - heroProfile[key as HeroProfileStatKeys],
        0
      );

      const everyValueValid = Object.values(stat).every((value) => value > 0);
      console.log({ totalCostValue, restStatValue, everyValueValid });
      return totalCostValue <= restStatValue && everyValueValid;
    },
    [heroProfile, restStatValue]
  );

  const onChangeHeroStat = useCallback(
    (newStat: Partial<HeroProfileStat>) => {
      if (validateValues(newStat)) {
        setHeroProfile((prev) => ({
          ...prev,
          ...newStat,
        }));
      }
    },
    [validateValues]
  );

  const onUpdateHeroStat = useCallback(
    async (newStat: HeroProfileStat) => {
      try {
        if (id && restStatValue === 0) {
          setIsUploading(true);
          const result = await updateHeroProfile(id, newStat);
          result && setIsUploading(false);
        }
      } catch (error) {
        console.error({ updateHeroStatError: error });
        setIsUploading(false);
      }
    },
    [id, restStatValue]
  );

  useEffect(() => {
    if (id) {
      getHeroProfile(id);
    }
  }, [id, getHeroProfile]);

  return {
    isLoading,
    isUploading,

    heroProfile,
    totalStatValue,
    restStatValue,

    onChangeHeroStat,
    onUpdateHeroStat,
  };
};

export default useHeroProfile;
