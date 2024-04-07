import ThemeDecorator from "./ThemeDecorator.svelte";

/** @type { import('@storybook/svelte').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {}
    }
  },
  decorators: [
    () => ({
      Component: ThemeDecorator
    })
  ]
};

export default preview;
