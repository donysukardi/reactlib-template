module.exports = (info) => {
  const devDependencies = Object.assign({}, {
    "@donysukardi/reactlib-scripts": "",
    "@storybook/addon-actions": "",
    "@storybook/addon-links": "",
    "@storybook/addons": "",
    "@storybook/react": "",
    "cypress": "",
    "eslint-config-dsds": "",
    "http-server": "",
    "npm-run-all": "",
    "prop-types": "",
    "react": "",
    "react-dom": "",
    "react-testing-library": "",
    "start-server-and-test": ""
  }, info.preact ? {
    "preact": "",
    "preact-render-to-string": ""
  } : {})

  return {
    devDependencies: devDependencies
  }
}
