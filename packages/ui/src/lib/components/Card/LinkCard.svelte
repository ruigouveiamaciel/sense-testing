<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let href: string;

  const { class: restClassNames, ...restProps } = $$restProps;
</script>

<a
  {href}
  class={twMerge(
    "text-on-surface bg-surface-container-low shadow-elevation-1 group relative block overflow-hidden rounded-md",
    "hover:shadow-elevation-3 active:shadow-elevation-1 transition",
    restClassNames
  )}
  {...restProps}
>
  <div
    class="bg-on-surface group-hover:opacity-hover absolute left-0 top-0 h-full w-full rounded-md opacity-0 transition-opacity"
    aria-hidden="true"
  />
  <div
    class="bg-on-surface group-active:opacity-press absolute left-0 top-0 h-full w-full rounded-md opacity-0 transition-opacity"
    aria-hidden="true"
  />
  <slot />
</a>
