import "styled-components";

declare module "styled-components" {
  export type SurfaceAction =
    | "active"
    | "hover"
    | "selected"
    | "disabled"
    | "focus";
  export type Typography =
    | "fontFamily"
    | "fontWeight"
    | "fontSize"
    | "lineHeight"
    | "letterSpacing";
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      yellow: string;
      brown: string;
      text: {
        primary: string;
        secondary: string;
        disable: string;
      };
      background: {
        paper: string;
        surface: string;
      };
      action: {
        [key in SurfaceAction]: string;
      };
    };
    shape: {
      borderRadius: string;
    };
    typography: {
      [key: string]: Record<Typography, string>;
    };
  }
}
