const path = require('path')

const installStorybook = async(info, tools) => {
  const {
    execa
    pEachSeries
  } = tools

  const commands = [
    {
      cmd: `${info.manager} install`,
      cwd: path.join(info.dest, 'stories')
    }
  ].filter(Boolean)

  return pEachSeries(commands, async ({ cmd, cwd }) =>
    execa.shell(cmd, { cwd })
  )
}

module.exports = {
  'postpackage': installStorybook
}
