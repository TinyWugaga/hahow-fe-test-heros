import styled from "styled-components";

import { SurfaceMixin, PaperMixin } from "@/styles/commonStyles";
import { PixelArrowUp } from "@/components/Icons";

export default function HeroStatSaveButton({
  onClick,
  isDisabled = false,
}: {
  onClick: () => void;
  isDisabled: boolean;
}) {
  return (
    <ButtonContainer onClick={onClick} disabled={isDisabled}>
      <PixelArrowUp width="100%" height="100%" />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  position: relative;
  width: 3.6rem;
  height: 3.6rem;

  background-color: transparent;

  border-radius: 50%;
  border-color: rgba(0, 0, 0, 0.67);
  border-width: 3px;
  border-style: solid;
  color: rgba(0, 0, 0, 0.87);

  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:active,
  &[disabled] {
    box-shadow: unset;
  }

  ${({ theme }) =>
    PaperMixin("filter: brightness(110%);", {
      borderRadius: "unset",
      backgroundColor: theme.palette.secondary,
    })}

  ${SurfaceMixin()}

  &[disabled] {
    border-color: ${({ theme }) => theme.palette.text.disable};
    color: ${({ theme }) => theme.palette.text.disable};
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
`;
