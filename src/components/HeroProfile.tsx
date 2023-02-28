import { useMemo } from "react";
import styled, { keyframes } from "styled-components";

import { HeroProfileStat, HeroProfileStatKeys } from "@/types";
import { PaperMixin } from "@/styles/commonStyles";
import { PixelLoader } from "@/components/Icons";
import { HeroCharacter } from "@/components/HeroCharacter";
import HeroStatField from "@/components/HeroStatField";
import HeroStatSaveButton from "@/components/HeroStatSaveButton";

import useHeroProfile from "@/hooks/useHeroProfile";
import { DEFAULT_STAT, HERO_CHARACTER } from "@/hooks/constants";

export default function HeroProfile({
  heroId,
  initialProfile = DEFAULT_STAT,
}: {
  heroId: string;
  initialProfile: HeroProfileStat;
}) {
  const {
    heroProfile,
    restStatValue,
    totalStatValue,
    onChangeHeroStat,
    onUpdateHeroStat,
    isLoading,
  } = useHeroProfile({
    id: heroId,
    initialStat: initialProfile,
  });

  const Character = useMemo(() => HERO_CHARACTER[heroId], [heroId]);

  return (
    <HeroProfileContainer>
      <HeroStatList>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          Object.keys(heroProfile).map((key) => {
            const statKey = key as HeroProfileStatKeys;
            const stat = heroProfile[statKey];
            return (
              <HeroStatField
                key={key}
                name={statKey}
                value={stat}
                profile={heroProfile}
                restStatValue={restStatValue}
                totalStatValue={totalStatValue}
                onChange={onChangeHeroStat}
              />
            );
          })
        )}
      </HeroStatList>

      <HeroProfileToolbar>
        <HeroProfileText>
          剩餘能力值 : {isLoading ? 0 : restStatValue}
        </HeroProfileText>
        <HeroCharacter>
          <Character viewBox="96 96 320 320" />
        </HeroCharacter>
        <HeroStatSaveButton
          onClick={() => onUpdateHeroStat(heroProfile)}
          isDisabled={isLoading || restStatValue > 0}
        />
      </HeroProfileToolbar>
    </HeroProfileContainer>
  );
}

const HeroProfileContainer = styled.div`
  position: relative;
  margin: 2rem;
  padding: 2.6rem 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.8rem;

  container-type: inline-size;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  border-radius: ${({ theme }) => theme.shape.borderRadius};

  font-family: ${({ theme }) => theme.typography.subtitle.fontFamily};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
  color: ${({ theme }) => theme.palette.text.primary};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};

  ${({ theme }) =>
    PaperMixin("filter: brightness(110%) saturate(90%);", {
      backgroundColor: theme.palette.secondary,
    })}
`;
const HeroStatList = styled.div`
  flex: 1;

  position: relative;
  width: 100%;
  height: max(30cqh, 20rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
`;

const HeroProfileToolbar = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.6rem;
`;

const loadingKeyframe = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(90deg) scale(1.2);
  }
  50% {
    transform: rotate(180deg) scale(1);
  }
  75% {
    transform: rotate(270deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const LoadingSpinner = styled(PixelLoader)`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 3em;
  height: 3em;

  filter: opacity(80%);

  animation: ${loadingKeyframe} 6s infinite linear;
`;

const HeroProfileText = styled.p`
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
`;
