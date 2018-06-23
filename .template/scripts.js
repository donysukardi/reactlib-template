const path = require('path')

const installStorybook = (info, tools) => {
  const {
    execa,
    pEachSeries
  } = tools

  const commands = [
    {
      cmd: `${info.manager} install`,
      cwd: path.join(info.dest, 'stories')
    }
  ].filter(Boolean)

  return {
    title: 'Installing storybook',
    promise: async() => pEachSeries(commands, async ({ cmd, cwd }) =>
      execa.shell(cmd, { cwd }))
  }
}

module.exports = {
  'postpackage': installStorybook
}
