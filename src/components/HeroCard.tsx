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
        <HeroCardTitle>{hero.name}</HeroCardTitle>
      </HeroCardContainer>
    </Link>
  );
}

const HeroCardContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  padding: 1rem 1.2rem;
  height: 100%;

  display: flex;
  place-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border-color: ${({ theme }) => theme.palette.primary};
  border-width: 2px;
  border-style: solid;

  ${({ isActive, theme }) =>
    PaperMixin("", {
      borderRadius: "unset",
      backgroundColor: isActive
        ? `${theme.palette.primary}; filter: brightness(110%)`
        : "",
    })}

  ${SurfaceMixin()}

  @media (hover: hover) {
    &:hover {
      &::after {
        ${({ theme }) => `background-color: ${theme.palette.action.hover};`};
      }
    }
  }
`;

const HeroCardTitle = styled.h1`
  position: relative;
  margin: auto 0;
  width: clamp(6rem, 45cqw, 10rem);

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
  width: clamp(2.5rem, 42cqw, 5rem);
  height: clamp(2.5rem, 42cqw, 5rem);

  border-radius: 50%;
  border-color: ${({ theme }) => theme.palette.primary};
  border-width: 2px;
  border-style: solid;

  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    border-radius: inherit;
  }
`;
