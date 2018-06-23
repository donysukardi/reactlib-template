module.exports = (info) => {
  const devDependencies = Object.assign({},
  {
    "@donysukardi/reactlib-scripts": "",
    "eslint-config-dsds": "",
    "prop-types": "",
    "react": "",
    "react-dom": "",
    "react-testing-library": ""
  },
  info.preact ? {
    "preact": "",
    "preact-render-to-string": ""
  } : {},
  info.cypress ? {
    "cypress": "",
    "npm-run-all": "",
    "start-server-and-test": ""
  } : {},
  info.storybook ? {
    "@storybook/addon-actions": "",
    "@storybook/addon-links": "",
    "@storybook/addons": "",
    "@storybook/react": "",
    "http-server": ""
  }: {})

  return {
    devDependencies: devDependencies
  }
}
