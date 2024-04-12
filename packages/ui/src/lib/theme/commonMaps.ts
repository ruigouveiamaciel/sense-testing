import type { ContainerHeight } from "./types.js";

export const containerHeightToBackground: Record<ContainerHeight, string> = {
  highest: "bg-surface-container-highest",
  high: "bg-surface-container-high",
  normal: "bg-surface-container",
  low: "bg-surface-container-low",
  lowest: "bg-surface-container-lowest"
};
