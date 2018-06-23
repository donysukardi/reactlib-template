# {{name}}

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![downloads][downloads-badge]][npmcharts] [![version][version-badge]][package]
[![{{license}} License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]

[![Supports React{{#if preact}} and Preact{{/if}}][react-badge]][react]
[![size][size-badge]][unpkg-dist] [![gzip size][gzip-badge]][unpkg-dist]
[![module formats: umd, cjs, and es][module-formats-badge]][unpkg-dist]

{{description}}

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```bash
npm install --save {{name}}
```

## Usage

```jsx
import React, {Component} from 'react'

import MyComponent from '{{name}}'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

{{license}} © [{{author}}](https://github.com/{{author}})

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/{{repo}}.svg?style=flat-square
[build]: https://travis-ci.org/{{repo}}
[coverage-badge]: https://img.shields.io/codecov/c/github/{{repo}}.svg?style=flat-square
[coverage]: https://codecov.io/github/{{repo}}
[version-badge]: https://img.shields.io/npm/v/{{name}}.svg?style=flat-square
[package]: https://www.npmjs.com/package/{{name}}
[downloads-badge]: https://img.shields.io/npm/dm/{{name}}.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/{{name}}
[license-badge]: https://img.shields.io/npm/l/{{name}}.svg?style=flat-square
[license]: https://github.com/{{repo}}/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[react-badge]: https://img.shields.io/badge/%E2%9A%9B%EF%B8%8F-{{#if preact}}(p){{/if}}react-00d8ff.svg?style=flat-square
[react]: https://facebook.github.io/react/
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/{{name}}/dist/{{name}}.umd.min.js?compression=gzip&label=gzip%20size&style=flat-square
[size-badge]: http://img.badgesize.io/https://unpkg.com/{{name}}/dist/{{name}}.umd.min.js?label=size&style=flat-square
[unpkg-dist]: https://unpkg.com/{{name}}/dist/
[module-formats-badge]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg?style=flat-square
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
