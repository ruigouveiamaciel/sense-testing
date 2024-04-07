<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let variant: "filled" | "outlined" | "elevated";
  export let disabled: boolean = false;

  let backgroundStyles: string | undefined;

  $: switch (variant) {
    case "filled":
      backgroundStyles = twMerge("bg-surface-container-highest");
      break;
    case "outlined":
      backgroundStyles = twMerge("bg-surface border-1 border-outline-variant");
      break;
    default:
      backgroundStyles = undefined;
  }
</script>

<div
  class={twMerge(
    "text-on-surface overflow-hidden rounded-md",
    backgroundStyles,
    disabled && "opacity-disabled pointer-events-none select-none",
    $$restProps.class
  )}
>
  <slot />
</div>
