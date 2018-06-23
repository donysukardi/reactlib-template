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

const cleanUpUnusedModules = (info, tools) => {
  const { fs } = tools
  return {
    title: 'Cleaning up unused modules',
    promise: async() => {
      if(!info.cypress) {
        fs.removeSync(path.resolve(info.dest, 'cypress'))
        fs.removeSync(path.resolve(info.dest, 'cypress.json'))
      }
      if(!info.allContributors) {
        fs.removeSync(path.resolve(info.dest, '.all-contributorsrc'))
      }
      if(!info.storybook) {
        fs.removeSync(path.resolve(info.dest, 'stories'))
      }
    }
  }
}

module.exports = (info) => Object.assign(
  {
    'postclonecopy': cleanUpUnusedModules
  },
  info.install && info.storybook ? {
    'postpackage': installStorybook
  } : {},
)
