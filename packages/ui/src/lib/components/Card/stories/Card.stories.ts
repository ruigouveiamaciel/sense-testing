import CardStory from "./CardStory.svelte";

export default {
  title: "Components/Card",
  component: CardStory,
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["filled", "outlined", "elevated"]
    },
    element: {
      control: {
        type: "string"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    }
  }
};

export const Elevated = {
  args: {
    variant: "elevated",
    disabled: false
  }
};

export const Filled = {
  args: {
    variant: "filled",
    disabled: false
  }
};

export const Outlined = {
  args: {
    variant: "outlined",
    disabled: false
  }
};
