import { css } from "styled-components";

export const SurfaceCss = css`
  pointer-events: none;
  position: absolute;
  z-index: 0;
  inset: 0px;
`;

export const SurfaceMixin = (
  content: string = "",
  options: {
    borderRadius?: string;
    backgroundColor?: string;
  } = {}
) => css`
  &::after {
    content: "";
    ${SurfaceCss}
    ${content}

    border-radius: ${options.borderRadius || "inherit"};
    background-color: ${options.backgroundColor || "transparent"};
  }
`;

export const PaperCss = css`
  pointer-events: none;
  position: absolute;
  z-index: -1;
  inset: 0px;
  border-radius: inherit;
`;

export const PaperMixin = (
  content: string = "",
  options: {
    borderRadius?: string;
    backgroundColor?: string;
  } = {}
) => css`
  &::before {
    content: "";
    ${PaperCss}
    ${content}

    border-radius: ${options.borderRadius || "inherit"};
    background-color: ${options.backgroundColor || "transparent"};
  }
`;
