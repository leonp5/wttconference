import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background: ${theme.colors.background};
        }
      `}
    />
  );
}
export default GlobalStyles;
