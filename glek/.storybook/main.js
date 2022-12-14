module.exports = {
  "stories": [
    "../Documentation/**/*.stories.mdx",
    "../Components/**/*.stories.mdx",
    "../Components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode"
  ],
  "framework": "@storybook/react"
}