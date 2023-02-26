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
        <HeroCardImageTitle>{hero.name}</HeroCardImageTitle>
        <HeroCardImageContainer>
          <Image
            alt={`hero_${hero.id}`}
            src={hero.image}
            quality={100}
            width={700}
            height={475}
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              height: "auto",
            }}
            priority
          />
        </HeroCardImageContainer>
      </HeroCardContainer>
    </Link>
  );
}

const HeroCardContainer = styled.div<{ isActive: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;

  border-radius: ${({ theme }) => theme.shape.borderRadius};
  background-color: ${({ theme }) => theme.palette.primary};

  ${({ isActive, theme }) =>
    isActive &&
    `&::after {
    content: '';
    background-color: ${theme.palette.action.active};
    ${SurfaceCss}
  }`};
`;

const HeroCardImageTitle = styled.h1``;

const HeroCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
