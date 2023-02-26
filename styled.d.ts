// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export type SurfaceAction =
    | "active"
    | "hover"
    | "selected"
    | "disabled"
    | "focus";
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
  }
}
