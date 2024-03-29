import { Hct, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import containerQueriesPlugin from "@tailwindcss/container-queries";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
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
        dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_LIGHT_THEME, 60),
        variant: {
          DEFAULT: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 80),
          dark: hct(PRIMARY_HUE, NEUTRAL_CHROME_DARK_THEME, 30)
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
    },
    extend: {
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        surface: {
          css: {
            "--tw-prose-body": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-headings": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-lead": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-links": theme("colors.primary.DEFAULT"),
            "--tw-prose-bold": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-counters": theme("colors.on.surface.variant.DEFAULT"),
            "--tw-prose-bullets": theme("colors.on.surface.variant.DEFAULT"),
            "--tw-prose-hr": theme("colors.outline.variant.DEFAULT"),
            "--tw-prose-quotes": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-quote-borders": theme("colors.primary.DEFAULT"),
            "--tw-prose-captions": theme("colors.on.surface.variant.DEFAULT"),
            "--tw-prose-code": theme("colors.inverse.on.surface.DEFAULT"),
            "--tw-prose-pre-code": theme("colors.inverse.on.surface.DEFAULT"),
            "--tw-prose-pre-bg": theme("colors.inverse.surface.DEFAULT"),
            "--tw-prose-th-borders": theme("colors.outline.DEFAULT"),
            "--tw-prose-td-borders": theme("colors.outline.variant.DEFAULT"),
            "--tw-prose-invert-body": theme("colors.on.surface.dark"),
            "--tw-prose-invert-headings": theme("colors.on.surface.dark"),
            "--tw-prose-invert-lead": theme("colors.on.surface.dark"),
            "--tw-prose-invert-links": theme("colors.primary.dark"),
            "--tw-prose-invert-bold": theme("colors.on.surface.dark"),
            "--tw-prose-invert-counters": theme("colors.on.surface.variant.dark"),
            "--tw-prose-invert-bullets": theme("colors.on.surface.variant.dark"),
            "--tw-prose-invert-hr": theme("colors.outline.variant.dark"),
            "--tw-prose-invert-quotes": theme("colors.on.surface.dark"),
            "--tw-prose-invert-quote-borders": theme("colors.primary.dark"),
            "--tw-prose-invert-captions": theme("colors.on.surface.variant.dark"),
            "--tw-prose-invert-code": theme("colors.invert.on.surface.dark"),
            "--tw-prose-invert-pre-code": theme("colors.invert.on.surface.dark"),
            "--tw-prose-invert-pre-bg": theme("colors.invert.surface.dark"),
            "--tw-prose-invert-th-borders": theme("colors.outline.dark"),
            "--tw-prose-invert-td-borders": theme("colors.outline.variant.dark")
          }
        }
      })
    }
  },
  plugins: [
    formsPlugin({
      strategy: "base"
    }),
    containerQueriesPlugin,
    aspectRatioPlugin,
    typographyPlugin
  ]
} satisfies Config;
