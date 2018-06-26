const path = require('path')

const installStorybook = async (config, tools) => {
  const {
    ora,
    execa,
    pEachSeries
  } = tools

  const commands = [
    {
      cmd: `${config.manager} install`,
      cwd: path.join(config.dest, 'stories')
    }
  ].filter(Boolean)

  if(config.install && config.storybook) {
    const promise = pEachSeries(commands, async ({ cmd, cwd }) =>
          execa.shell(cmd, { cwd }))
    ora.promise(promise, 'Installing storybook')
    await promise
  }
}

const cleanUpUnusedModules = async (config, tools) => {
  const { fs, ora } = tools
  const promise = new Promise(resolve => {
    fs.removeSync(path.resolve(config.dest, '.all-contributorsrc'))
    fs.removeSync(path.resolve(config.dest, '.travis.yml'))
    fs.removeSync(path.resolve(config.dest, '.gitignore'))
    fs.removeSync(path.resolve(config.dest, 'LICENSE'))
    fs.removeSync(path.resolve(config.dest, 'package.json'))
    fs.removeSync(path.resolve(config.dest, 'README.md'))

    if(!config.cypress) {
      fs.removeSync(path.resolve(config.dest, 'cypress'))
      fs.removeSync(path.resolve(config.dest, 'cypress.json.tmpl'))
    }
    if(!config.allContributors) {
      fs.removeSync(path.resolve(config.dest, '.all-contributorsrc.tmpl'))
    }
    if(!config.storybook) {
      fs.removeSync(path.resolve(config.dest, 'stories'))
    }
    resolve()
  })

  ora.promise(promise, 'Cleaning up unused modules')
  await promise
}

module.exports = {
  'postclonecopy': cleanUpUnusedModules,
  'postpackage': installStorybook
}
