import styled from "styled-components";

import { HeroProfileStat, HeroProfileStatKeys } from "@/types";
import useHeroProfile from "@/hooks/useHeroProfile";

const DEFAULT_STAT = {
  str: 0,
  int: 0,
  agi: 0,
  luk: 0,
};

export default function HeroProfile({
  heroId,
  initialProfile = DEFAULT_STAT,
}: {
  heroId: string;
  initialProfile: HeroProfileStat;
}) {
  const { heroProfile, restStat, onChangeHeroStat, onUpdateHeroStat } =
    useHeroProfile({
      id: heroId,
      initialStat: initialProfile,
    });

  const addStatValue = (statKey: HeroProfileStatKeys) => {
    if (restStat > 0) {
      onChangeHeroStat({
        [statKey]: heroProfile[statKey] + 1,
      });
    }
  };

  const subtractStatValue = (statKey: HeroProfileStatKeys) => {
    if (heroProfile[statKey] > 1) {
      onChangeHeroStat({
        [statKey]: heroProfile[statKey] - 1,
      });
    }
  };

  return (
    <HeroProfileContainer>
      {Object.keys(heroProfile).map((key) => {
        const statKey = key as HeroProfileStatKeys;
        const stat = heroProfile[statKey];
        return (
          <HeroProfileField key={key}>
            <button
              onClick={() => subtractStatValue(statKey)}
              disabled={stat <= 1}
            >
              {` - `}
            </button>
            <p>{statKey}:</p>
            <p>{stat}</p>
            <button
              onClick={() => addStatValue(statKey)}
              disabled={restStat === 0}
            >
              {` + `}
            </button>
          </HeroProfileField>
        );
      })}
      <div>
        <p>Stat</p>
        <p>{restStat}</p>
        <button
          onClick={() => onUpdateHeroStat(heroProfile)}
          disabled={restStat > 0}
        >
          {` Save `}
        </button>
      </div>
    </HeroProfileContainer>
  );
}

const HeroProfileContainer = styled.div`
  position: relative;
  margin: 1rem 2rem;
  padding: 3rem 2rem;
  height: min(100%, 8rem);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border-color: ${({ theme }) => theme.palette.primary};
  border-width: 2px;
  border-style: solid;
`;

const HeroProfileField = styled.div`
  display: flex;
`;
