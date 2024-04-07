<script lang="ts">
  import { Hct, argbFromHex } from "@material/material-color-utilities";

  function hexToHue(hex: string) {
    return Hct.fromInt(argbFromHex(hex)).hue;
  }

  function hct(hue: number, chroma: number, tone: number): string {
    const argb = Hct.from(hue, chroma, tone).toInt();
    const r = (argb >> 16) & 0xff;
    const g = (argb >> 8) & 0xff;
    const b = argb & 0xff;

    return `${r} ${g} ${b}`;
  }

  const PRIMARY_COLOR = "#EF4B59";
  const ERROR_COLOR = "#ff0000";

  const PRIMARY_HUE = hexToHue(PRIMARY_COLOR);
  const ERROR_HUE = hexToHue(ERROR_COLOR);

  const PRIMARY_CHROME_LIGHT_THEME = 40;
  const PRIMARY_CHROME_DARK_THEME = 20;
  const NEUTRAL_CHROME_LIGHT_THEME = 5;
  const NEUTRAL_CHROME_DARK_THEME = 5;

  function generateLightPalette(hue: number) {
    return `
      --color-primary: ${hct(hue, PRIMARY_CHROME_LIGHT_THEME, 40)};
      --color-primary-container: ${hct(hue, PRIMARY_CHROME_LIGHT_THEME, 90)};
      --color-error: ${hct(ERROR_HUE, PRIMARY_CHROME_LIGHT_THEME, 40)};
      --color-error-container: ${hct(ERROR_HUE, PRIMARY_CHROME_LIGHT_THEME, 90)};
      --color-surface: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 98)};
      --color-surface-variant: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 90)};
      --color-surface-container-highest: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 90)};
      --color-surface-container-high: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 92)};
      --color-surface-container: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 94)};
      --color-surface-container-low: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 96)};
      --color-surface-container-lowest: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 100)};
      --color-outline: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 50)};
      --color-outline-variant: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 80)};
      --color-on-primary: ${hct(hue, PRIMARY_CHROME_LIGHT_THEME, 100)};
      --color-on-primary-container: ${hct(hue, PRIMARY_CHROME_LIGHT_THEME, 10)};
      --color-on-error: ${hct(ERROR_HUE, PRIMARY_CHROME_LIGHT_THEME, 100)};
      --color-on-error-container: ${hct(ERROR_HUE, PRIMARY_CHROME_LIGHT_THEME, 10)};
      --color-on-surface: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 10)};
      --color-on-surface-variant: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 30)};
      --color-inverse-primary: ${hct(hue, PRIMARY_CHROME_LIGHT_THEME, 80)};
      --color-inverse-surface: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 20)};
      --color-inverse-on-surface: ${hct(hue, NEUTRAL_CHROME_LIGHT_THEME, 95)};
    `;
  }

  function generateDarkPalette(hue: number) {
    return `
      --color-primary: ${hct(hue, PRIMARY_CHROME_DARK_THEME, 80)};
      --color-primary-container: ${hct(hue, PRIMARY_CHROME_DARK_THEME, 30)};
      --color-error: ${hct(ERROR_HUE, PRIMARY_CHROME_DARK_THEME, 80)};
      --color-error-container: ${hct(ERROR_HUE, PRIMARY_CHROME_DARK_THEME, 30)};
      --color-surface: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 6)};
      --color-surface-variant: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 30)};
      --color-surface-container-highest: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 22)};
      --color-surface-container-high: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 17)};
      --color-surface-container: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 12)};
      --color-surface-container-low: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 10)};
      --color-surface-container-lowest: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 4)};
      --color-outline: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 60)};
      --color-outline-variant: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 30)};
      --color-on-primary: ${hct(hue, PRIMARY_CHROME_DARK_THEME, 20)};
      --color-on-primary-container: ${hct(hue, PRIMARY_CHROME_DARK_THEME, 90)};
      --color-on-error: ${hct(ERROR_HUE, PRIMARY_CHROME_DARK_THEME, 20)};
      --color-on-error-container: ${hct(ERROR_HUE, PRIMARY_CHROME_DARK_THEME, 90)};
      --color-on-surface: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 90)};
      --color-on-surface-variant: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 80)};
      --color-inverse-primary: ${hct(hue, PRIMARY_CHROME_DARK_THEME, 40)};
      --color-inverse-surface: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 90)};
      --color-inverse-on-surface: ${hct(hue, NEUTRAL_CHROME_DARK_THEME, 20)};
    `;
  }
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html `
    <${""}style>
      :root {
        ${generateLightPalette(PRIMARY_HUE)}
      }
      @media (prefers-color-scheme: dark) {
        :root {
          ${generateDarkPalette(PRIMARY_HUE)}
        }
      }
    <${""}/style>
  `}
</svelte:head>
