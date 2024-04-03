import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import containerQueriesPlugin from "@tailwindcss/container-queries";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    colors: {
      primary: {
        DEFAULT: "rgb(var(--color-primary))",
        container: {
          DEFAULT: "rgb(var(--color-primary-container))"
        }
      },
      error: {
        DEFAULT: "rgb(var(--color-error))",
        container: {
          DEFAULT: "rgb(var(--color-error-container))"
        }
      },
      surface: {
        DEFAULT: "rgb(var(--color-surface))",
        variant: {
          DEFAULT: "rgb(var(--color-surface-variant))"
        },
        container: {
          highest: {
            DEFAULT: "rgb(var(--color-surface-container-highest))"
          },
          high: {
            DEFAULT: "rgb(var(--color-surface-container-high))"
          },
          DEFAULT: "rgb(var(--color-surface-container))",
          low: {
            DEFAULT: "rgb(var(--color-surface-container-low))"
          },
          lowest: {
            DEFAULT: "rgb(var(--color-surface-container-lowest))"
          }
        }
      },
      outline: {
        DEFAULT: "rgb(var(--color-outline))",
        variant: {
          DEFAULT: "rgb(var(--color-outline-variant))"
        }
      },
      on: {
        primary: {
          DEFAULT: "rgb(var(--color-on-primary))",
          container: {
            DEFAULT: "rgb(var(--color-on-primary-container))"
          }
        },
        error: {
          DEFAULT: "rgb(var(--color-on-error))",
          container: {
            DEFAULT: "rgb(var(--color-on-error-container))"
          }
        },
        surface: {
          DEFAULT: "rgb(var(--color-on-surface))",
          variant: {
            DEFAULT: "rgb(var(--color-on-surface-variant))"
          }
        }
      },
      inverse: {
        primary: {
          DEFAULT: "rgb(var(--color-inverse-primary))"
        },
        surface: {
          DEFAULT: "rgb(var(--color-inverse-surface))"
        },
        on: {
          surface: {
            DEFAULT: "rgb(var(--color-inverse-on-surface))"
          }
        }
      }
    },
    animation: {
      none: "none"
    },
    aspectRatio: {
      auto: "auto"
    },
    borderRadius: {
      none: "0px",
      sm: "2px",
      md: "4px",
      lg: "6px",
      xl: "8px",
      full: "9999px"
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px"
    },
    boxShadow: {
      none: "none"
    },
    dropShadow: {
      none: "0 0 #0000"
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      serif: ["ui-serif", "serif"],
      mono: ["ui-monospace", "monospace"]
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      md: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    },
    maxHeight: ({ theme }) => ({
      ...theme("spacing"),
      none: "none",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      ...theme("spacing"),
      none: "none",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...breakpoints(theme("screens"))
    }),
    minHeight: ({ theme }) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    minWidth: ({ theme }) => ({
      ...theme("spacing"),
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    ringColor: ({ theme }) => ({
      DEFAULT: theme("colors.primary.DEFAULT"),
      ...theme("colors")
    }),
    ringOpacity: ({ theme }) => ({
      DEFAULT: "1",
      ...theme("opacity")
    }),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px"
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px"
    },
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px"
    },
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    spacing: {
      px: "1px",
      0: "0px",
      ...(Array.from({ length: 256 }, (_, i) => i + 1).reduce(
        (acc, i) => ({
          ...acc,
          [i]: `${i * 0.25}rem`
        }),
        {}
      ) satisfies Record<string, string>)
    },
    textDecorationThickness: {
      auto: "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px"
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
            "--tw-prose-invert-body": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-invert-headings": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-invert-lead": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-invert-links": theme("colors.primary.DEFAULT"),
            "--tw-prose-invert-bold": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-invert-counters": theme("colors.on.surface.variant.DEFAULT"),
            "--tw-prose-invert-bullets": theme("colors.on.surface.variant.DEFAULT"),
            "--tw-prose-invert-hr": theme("colors.outline.variant.DEFAULT"),
            "--tw-prose-invert-quotes": theme("colors.on.surface.DEFAULT"),
            "--tw-prose-invert-quote-borders": theme("colors.primary.DEFAULT"),
            "--tw-prose-invert-captions": theme("colors.on.surface.variant.DEFAULT"),
            "--tw-prose-invert-code": theme("colors.invert.on.surface.DEFAULT"),
            "--tw-prose-invert-pre-code": theme("colors.invert.on.surface.DEFAULT"),
            "--tw-prose-invert-pre-bg": theme("colors.invert.surface.DEFAULT"),
            "--tw-prose-invert-th-borders": theme("colors.outline.DEFAULT"),
            "--tw-prose-invert-td-borders": theme("colors.outline.variant.DEFAULT")
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
