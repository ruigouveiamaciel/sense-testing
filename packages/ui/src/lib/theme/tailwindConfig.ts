import { Hct, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import type { Config } from "tailwindcss";

function hexToHue(hex: string) {
  return Hct.fromInt(argbFromHex(hex)).hue;
}

function hct(hue: number, chroma: number, tone: number): string {
  return hexFromArgb(Hct.from(hue, chroma, tone).toInt());
}

const PRIMARY = "#ef4b59";
const ERROR = "#ff0000";

const PRIMARY_HUE = hexToHue(PRIMARY);
const ERROR_HUE = hexToHue(ERROR);

const PRIMARY_CHROME_LIGHT_THEME = 40;
const PRIMARY_CHROME_DARK_THEME = 20;
const NEUTRAL_CHROME_LIGHT_THEME = 5;
const NEUTRAL_CHROME_DARK_THEME = 5;

export default {
  content: [],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: {
        DEFAULT: hct(PRIMARY_HUE, PRIMARY_CHROME_LIGHT_THEME, 40),
        dark: hct(PRIMARY_HUE, PRIMARY_CHROME_DARK_THEME, 80),
        container: {
          DEFAULT: hct(PRIMARY_HUE, PRIMARY_CHROME_LIGHT_THEME, 90),
          dark: hct(PRIMARY_HUE, PRIMARY_CHROME_DARK_THEME, 30)
        }
      },
      error: {
        DEFAULT: hct(ERROR_HUE, PRIMARY_CHROME_LIGHT_THEME, 40),
        dark: hct(ERROR_HUE, PRIMARY_CHROME_DARK_THEME, 80),
        container: {
          DEFAULT: hct(ERROR_HUE, PRIMARY_CHROME_LIGHT_THEME, 90),
          dark: hct(ERROR_HUE, PRIMARY_CHROME_DARK_THEME, 30)
        }
      },
      surface: {
        DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 98),
        dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 6),
        variant: {
          DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 90),
          dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 30)
        },
        container: {
          highest: {
            DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 90),
            dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 22)
          },
          high: {
            DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 92),
            dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 17)
          },
          DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 94),
          dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 12),
          low: {
            DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 96),
            dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 10)
          },
          lowest: {
            DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 100),
            dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 4)
          }
        }
      },
      outline: {
        DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 50),
        variant: {
          DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 80)
        }
      },
      on: {
        primary: {
          DEFAULT: hct(PRIMARY_HUE, PRIMARY_CHROME_LIGHT_THEME, 100),
          dark: hct(PRIMARY_HUE, PRIMARY_CHROME_DARK_THEME, 20),
          container: {
            DEFAULT: hct(PRIMARY_HUE, PRIMARY_CHROME_LIGHT_THEME, 10),
            dark: hct(PRIMARY_HUE, PRIMARY_CHROME_DARK_THEME, 90)
          }
        },
        error: {
          DEFAULT: hct(ERROR_HUE, PRIMARY_CHROME_LIGHT_THEME, 100),
          dark: hct(ERROR_HUE, PRIMARY_CHROME_DARK_THEME, 20),
          container: {
            DEFAULT: hct(ERROR_HUE, PRIMARY_CHROME_LIGHT_THEME, 10),
            dark: hct(ERROR_HUE, PRIMARY_CHROME_DARK_THEME, 90)
          }
        },
        surface: {
          DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 10),
          dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 90),
          variant: {
            DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 30),
            dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 80)
          }
        }
      },
      inverse: {
        primary: {
          DEFAULT: hct(PRIMARY_HUE, PRIMARY_CHROME_LIGHT_THEME, 80),
          dark: hct(PRIMARY_HUE, PRIMARY_CHROME_DARK_THEME, 40)
        },
        surface: {
          DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 20),
          dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 90)
        },
        on: {
          surface: {
            DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 95),
            dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 20)
          }
        }
      }
    }
  }
} satisfies Config;
