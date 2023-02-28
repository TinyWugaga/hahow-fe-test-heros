import { useMemo } from "react";
import styled from "styled-components";

import { HeroProfileStat, HeroProfileStatKeys } from "@/types";
import { SurfaceMixin } from "@/styles/commonStyles";
import { PixelPlus, PixelMinus } from "@/components/Icons";

export default function HeroStatField({
  name,
  value,
  profile,
  restStatValue,
  totalStatValue,
  onChange,
}: {
  name: HeroProfileStatKeys;
  value: number;
  profile: HeroProfileStat;
  restStatValue: number;
  totalStatValue: number;
  onChange: (newStat: Partial<HeroProfileStat>) => void;
}) {
  const statValuePercentage = useMemo(
    () => Math.floor((1 - value / totalStatValue) * 100),
    [value, totalStatValue]
  );

  const addStatValue = (name: HeroProfileStatKeys) =>
    onChange({
      [name]: profile[name] + 1,
    });

  const subtractStatValue = (name: HeroProfileStatKeys) =>
    onChange({
      [name]: profile[name] - 1,
    });

  return (
    <HeroStatFieldWrapper>
      <HeroStatLabel>{name}</HeroStatLabel>
      <HeroStatToolbar>
        <HeroStatButton
          onClick={() => subtractStatValue(name)}
          disabled={value <= 1}
        >
          <PixelMinus />
        </HeroStatButton>
        <HeroStatValueBar statValuePercentage={statValuePercentage} />
        <HeroStatValueText>{value}</HeroStatValueText>
        <HeroStatButton
          onClick={() => addStatValue(name)}
          disabled={restStatValue === 0}
        >
          <PixelPlus />
        </HeroStatButton>
      </HeroStatToolbar>
    </HeroStatFieldWrapper>
  );
}

const HeroStatFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  text-transform: uppercase;
`;

const HeroStatLabel = styled.label`
  padding: 0 2rem;
  width: 100%;
  color: rgba(0, 0, 0, 0.67);
  text-align: left;
`;

const HeroStatToolbar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const HeroStatValueBar = styled.div<{ statValuePercentage: number }>`
  position: relative;
  width: max(100%, 12rem);
  height: 0.8rem;
  border-radius: ${({ theme }) => theme.shape.borderRadius};

  background-color: ${({ theme }) => theme.palette.background.surface};
  filter: opacity(90%);

  ${({ theme, statValuePercentage }) =>
    SurfaceMixin(
      `clip-path: inset(0 ${statValuePercentage || 100}% 0 0);
    transition: clip-path 0.4s ease-out;`,
      {
        backgroundColor: theme.palette.primary,
      }
    )};
`;

const HeroStatValueText = styled.p`
  width: 1rem;
  font-size: 1rem;
`;

const HeroStatButton = styled.button`
  position: relative;
  padding: 0.6rem;

  border-radius: 50%;
  border: none;

  svg {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 1em;
    height: 1em;
  }
`;
