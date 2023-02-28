import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { Hero } from "@/types";
import { SurfaceMixin, PaperMixin } from "@/styles/commonStyles";

export default function HeroCard({
  hero,
  isActive,
}: {
  hero: Hero;
  isActive: boolean;
}) {
  return (
    <HeroCardContainer isActive={isActive}>
      <Link href={`/heros/${hero.id}`}>
        <HeroCardWrapper isActive={isActive}>
          <HeroCardAvatar>
            <Image
              alt={`hero_${hero.id}`}
              src={hero.image}
              quality={100}
              width={700}
              height={475}
              priority
            />
          </HeroCardAvatar>
          <HeroCardTitle>{hero.name}</HeroCardTitle>
        </HeroCardWrapper>
      </Link>
    </HeroCardContainer>
  );
}

const HeroCardContainer = styled.div<{ isActive: boolean }>`
  --border-color: ${({ isActive, theme }) =>
    isActive ? "rgb(255, 255, 255)" : theme.palette.text.primary};
  --text-color: ${({ isActive, theme }) =>
    isActive ? "rgb(255, 255, 255)" : theme.palette.text.primary};

  position: relative;
  height: 100%;
  width: calc(25cqw - 1rem);

  @media screen and (max-width: 768px) {
    width: calc(50cqw - 0.5rem);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border-color: var(--border-color);
  border-width: 3px;
  border-style: solid;
  overflow: hidden;

  container-type: inline-size;

  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:active {
    box-shadow: unset;
  }
`;

const HeroCardWrapper = styled.div<{ isActive: boolean }>`
  padding: 1rem 1.2rem;

  display: flex;
  place-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  ${({ isActive, theme }) =>
    PaperMixin("", {
      borderRadius: "unset",
      backgroundColor: isActive
        ? `${theme.palette.primary}; filter: brightness(80%)`
        : "",
    })}

  ${SurfaceMixin()}

  @media (hover: hover) {
    &:hover {
      &::after {
        background-color: ${({ theme }) => theme.palette.action.hover};
        filter: brightness(80%);
      }
    }
  }
`;

const HeroCardTitle = styled.h1`
  position: relative;
  margin: auto 0;
  width: 100%;

  font-family: ${({ theme }) => theme.typography.title.fontFamily};
  font-size: clamp(
    1rem,
    18cqw,
    ${({ theme }) => theme.typography.title.fontSize}
  );
  color: var(--text-color);
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  text-align: center;
`;

const HeroCardAvatar = styled.div`
  position: relative;
  inset: 0;
  margin: auto;
  width: clamp(2.5rem, 42cqw, 5rem);
  height: clamp(2.5rem, 42cqw, 5rem);

  border-radius: 50%;
  border-color: var(--border-color);
  border-width: 3px;
  border-style: solid;

  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    border-radius: inherit;
  }
`;
