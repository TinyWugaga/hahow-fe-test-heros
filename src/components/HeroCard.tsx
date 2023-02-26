import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { Hero } from "@/types";
import { SurfaceCss } from "@/styles/commonStyles";

export default function HeroCard({
  hero,
  isActive,
}: {
  hero: Hero;
  isActive: boolean;
}) {
  return (
    <Link href={`/heros/${hero.id}`}>
      <HeroCardContainer isActive={isActive}>
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
        <HeroCardImageTitle>{hero.name}</HeroCardImageTitle>
      </HeroCardContainer>
    </Link>
  );
}

const HeroCardContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  padding: 0.6rem 1.2rem;
  height: 100%;

  display: flex;
  place-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border-color: ${({ theme }) => theme.palette.primary};
  border-width: 2px;
  border-style: solid;

  background-color: ${({ isActive, theme }) =>
    isActive
      ? `${theme.palette.primary}; filter: brightness(110%)`
      : "transparent"};

  &::after {
    content: "";
    ${SurfaceCss}
  }

  @media (hover: hover) {
    &:hover {
      &::after {
        ${({ theme }) => `background-color: ${theme.palette.action.hover};`};
      }
    }
  }
`;

const HeroCardImageTitle = styled.h1`
  position: relative;
  margin: calc(5cqh - 1rem) 0;
  width: clamp(6rem, 50cqw, 10rem);

  font-family: ${({ theme }) => theme.typography.title.fontFamily};
  font-size: clamp(
    1rem,
    calc(0.1 * 100cqw),
    ${({ theme }) => theme.typography.title.fontSize}
  );
  color: ${({ theme }) => theme.palette.text.primary};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  text-align: center;
`;

const HeroCardAvatar = styled.div`
  position: relative;
  inset: 0;
  margin: auto;
  width: clamp(2rem, 50cqw, 4rem);
  height: clamp(2rem, 50cqw, 4rem);

  border-radius: 50%;
  border-color: ${({ theme }) => theme.palette.primary};
  border-width: 2px;
  border-style: solid;

  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;

    border-radius: inherit;
  }
`;
