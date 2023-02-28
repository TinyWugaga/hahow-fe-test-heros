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
    <HeroCardContainer>
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

const HeroCardContainer = styled.div`
  position: relative;
  padding: 1rem 1.2rem;
  height: 100%;
  width: calc(25cqw - 1rem);

  @media screen and (max-width: 768px) {
    width: calc(50cqw - 0.5rem);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border-color: ${({ theme }) => theme.palette.primary};
  border-width: 3px;
  border-style: solid;

  container-type: inline-size;
`;

const HeroCardWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  place-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  ${({ isActive, theme }) =>
    PaperMixin("", {
      borderRadius: "unset",
      backgroundColor: isActive ? `${theme.palette.primary}` : "",
    })}

  ${SurfaceMixin()}

  @media (hover: hover) {
    &:hover {
      &::after {
        ${({ theme }) =>
          `background-color: ${theme.palette.action.hover}; filter: brightness(90%);`};
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
