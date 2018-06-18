# {{name}}

[![travis build](https://img.shields.io/travis/{{repo}}.svg?style=flat-square)](https://travis-ci.org/{{repo}})
[![version](https://img.shields.io/npm/v/{{name}}.svg?style=flat-square)](http://npm.im/{{name}})
[![downloads](https://img.shields.io/npm/dm/{{name}}.svg?style=flat-square)](http://npm-stat.com/charts.html?package={{name}}&from=2015-08-01)
[![{{license}} License](https://img.shields.io/npm/l/{{name}}.svg?style=flat-square)](http://opensource.org/licenses/{{license}})
{{#if semanticallyReleased}}
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
{{/if}}
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)

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
