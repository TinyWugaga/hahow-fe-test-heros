import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function HeroList({ children }: PropsWithChildren) {
  return <HeroListContainer>{children}</HeroListContainer>;
}

const HeroListContainer = styled.div`
  padding: 3rem 2rem 4rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  > * {
    position: relative;
    flex: 1;
    width: min(22%, 12rem);

    @media screen and (max-width: 630px) {
      width: min(50%, 12rem);
    }
  }
`;
