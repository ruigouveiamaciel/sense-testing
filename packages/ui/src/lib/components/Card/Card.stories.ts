import Card from "./Card.svelte";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "elevated"]
    },
    disabled: {
      control: { type: "boolean" }
    }
  }
};

export const Filled = {
  args: {
    variant: "filled",
    class: "p-16",
    disabled: false
  }
};

export const Outlined = {
  args: {
    variant: "outlined",
    class: "p-16",
    disabled: false
  }
};
