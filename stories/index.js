import React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import {Button, Welcome} from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button data-testid="buttonWithText" onClick={() => {}}>
      Hello Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={() => {}}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
