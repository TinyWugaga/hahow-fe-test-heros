import styled from "styled-components";

export { default as DareDevil } from "./DareDevil";
export { default as Thor } from "./Thor";
export { default as IronMan } from "./IronMan";
export { default as Hulk } from "./Hulk";

export const HeroCharacter = styled.div`
  position: relative;
  width: min(100%, 16rem);
  height: min(100%, 16rem);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
