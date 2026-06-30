
export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config: any) {
    // Delete the library settings specifically for Storybook compilation context
    delete config.build?.lib;
    if (config.build?.rollupOptions) {
      delete config.build.rollupOptions.external;
    }
    return config;
  },
};
