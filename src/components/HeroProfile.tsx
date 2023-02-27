import styled from "styled-components";

import { HeroProfileStat, HeroProfileStatKeys } from "@/types";
import { PaperCss } from "@/styles/commonStyles";
import { PixelArrowUp, PixelPlus, PixelMinus } from "@/components/Icons";

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
      <HeroStatList>
        {Object.keys(heroProfile).map((key) => {
          const statKey = key as HeroProfileStatKeys;
          const stat = heroProfile[statKey];
          return (
            <HeroStatField key={key}>
              <p>{statKey}</p>
              <HeroStatButton
                onClick={() => subtractStatValue(statKey)}
                disabled={stat <= 1}
              >
                <PixelMinus />
              </HeroStatButton>
              <p>{stat}</p>
              <HeroStatButton
                onClick={() => addStatValue(statKey)}
                disabled={restStat === 0}
              >
                <PixelPlus />
              </HeroStatButton>
            </HeroStatField>
          );
        })}
      </HeroStatList>
      <HeroProfileAction>
        <p>Available Stat Value : {restStat}</p>
        <HeroProfileSaveButton
          onClick={() => onUpdateHeroStat(heroProfile)}
          disabled={restStat > 0}
        >
          <PixelArrowUp />
        </HeroProfileSaveButton>
      </HeroProfileAction>
    </HeroProfileContainer>
  );
}

const HeroProfileContainer = styled.div`
  position: relative;
  margin: 2rem;
  padding: 2.6rem 2rem;
  height: min(100%, 8rem);

  display: flex;
  justify-content: space-between;

  border-radius: ${({ theme }) => theme.shape.borderRadius};

  font-family: ${({ theme }) => theme.typography.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  font-widget: ${({ theme }) => theme.typography.subtitle.fontWeight};
  color: ${({ theme }) => theme.palette.text.primary};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};

  &::before {
    content: "";
    ${PaperCss}

    background-color: ${({ theme }) => `${theme.palette.secondary}`};
    filter: brightness(110%) saturate(90%);
  }

  > * {
    flex: 1;
  }
`;

const HeroStatList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const HeroStatField = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  text-transform: uppercase;
`;

const HeroStatButton = styled.button`
  width: ${({ theme }) => theme.typography.subtitle.fontSize};
  height: ${({ theme }) => theme.typography.subtitle.fontSize};

  border-radius: 50%;
  border: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const HeroProfileAction = styled.div`
  display: flex;
  place-content: flex-end;
  align-items: flex-end;
  gap: 0.6rem;
`;

const HeroProfileSaveButton = styled.button`
  width: 2.2rem;
  height: 2.2rem;

  border-radius: 50%;

  svg {
    width: 100%;
    height: 100%;
  }
`;
