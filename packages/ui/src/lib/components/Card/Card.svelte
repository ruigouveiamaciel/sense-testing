<script lang="ts">
  import { containerHeightToBackground } from "./../../theme/commonMaps.ts";
  import { ContainerHeight } from "./../../theme/types.ts";
  import { twMerge } from "tailwind-merge";

  export let disabled: boolean = false;
  export let variant: "filled" | "outlined" | "elevated";
  export let height: ContainerHeight;

  let backgroundStyles: string | undefined;

  $: switch (variant) {
    case "elevated":
      backgroundStyles = twMerge(containerHeightToBackground[height], "shadow-elevation-1");
      break;
    case "filled":
      backgroundStyles = twMerge(containerHeightToBackground[height]);
      break;
    case "outlined":
      backgroundStyles = twMerge("bg-surface border-1 border-outline-variant");
      break;
    default:
      backgroundStyles = undefined;
  }

  const { class: className, ...restProps } = $$restProps;
</script>

<div
  class={twMerge(
    "text-on-surface group overflow-hidden rounded-md",
    backgroundStyles,
    disabled && "opacity-disabled pointer-events-none",
    className
  )}
  {...restProps}
>
  <slot />
</div>
