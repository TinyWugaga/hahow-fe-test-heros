import styled, { keyframes, css } from "styled-components";

import { SurfaceMixin, PaperMixin } from "@/styles/commonStyles";
import { PixelArrowUp } from "@/components/Icons";

export default function HeroStatSaveButton({
  onClick,
  isDisabled = false,
  isActive = false,
}: {
  onClick: () => void;
  isDisabled: boolean;
  isActive: boolean;
}) {
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={isDisabled}
      isActive={isActive}
    >
      <PixelArrowUp width="100%" height="100%" />
    </ButtonContainer>
  );
}

const borderSpinningKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ActiveButtonStyle = css`
  &[disabled],
  &:not([disabled]) {
    color: ${({ theme }) => theme.palette.primary};
  }
  &[disabled]::before,
  &:not([disabled])::before {
    border-color: ${({ theme }) =>
      `transparent transparent ${theme.palette.primary}`};
    background-color: ${({ theme }) => theme.palette.action.hover};
    animation: ${borderSpinningKeyframe} 1.8s infinite linear;
  }
`;

const ButtonContainer = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 4rem;
  height: 4rem;

  background-color: transparent;
  border-radius: 50%;
  border: none;
  color: rgba(0, 0, 0, 0.87);

  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:active,
  &[disabled] {
    box-shadow: unset;
  }

  transition: all 0.3s ease-in-out;

  ${({ theme }) =>
    PaperMixin(
      `filter: brightness(110%);
      border-color: rgba(0, 0, 0, 0.67);
      border-width: 4px;
      border-style: solid;
    `,
      {
        backgroundColor: theme.palette.secondary,
      }
    )}

  ${SurfaceMixin()}
  
  &[disabled] {
    color: ${({ theme }) => theme.palette.text.disable};
    &::before {
      border-color: ${({ theme }) => theme.palette.text.disable};
    }
    &::after {
      background-color: ${({ theme }) => theme.palette.action.disabled};
      filter: brightness(50%);
    }
  }

  @media (hover: hover) {
    &:hover:not([disabled]):after {
      background-color: ${({ theme }) => theme.palette.action.hover};
    }
  }

  ${({ isActive }) => isActive && ActiveButtonStyle}
`;
