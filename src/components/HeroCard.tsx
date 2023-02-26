import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { Hero } from "@/types";

export default function HeroCard({ hero }: { hero: Hero }) {
  return (
    <Link href={`/heros/${hero.id}`}>
      <HeroCardContainer>
        <p>{hero.name}</p>
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

const HeroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
