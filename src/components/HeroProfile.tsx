import styled, { keyframes } from "styled-components";

import { HeroProfileStat, HeroProfileStatKeys } from "@/types";
import { PaperMixin } from "@/styles/commonStyles";
import { PixelArrowUp, PixelLoader } from "@/components/Icons";
import HeroStatField from "@/components/HeroStatField";

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

      <HeroProfileAction>
        <p>Available Value Points : {isLoading ? 0 : restStatValue}</p>
        <HeroProfileSaveButton
          onClick={() => onUpdateHeroStat(heroProfile)}
          disabled={isLoading || restStatValue > 0}
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

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

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

  > * {
    flex: 1;
  }
`;

const HeroStatList = styled.div`
  position: relative;
  height: max(30cqh, 20rem);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.2rem;
`;

const HeroProfileAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
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
