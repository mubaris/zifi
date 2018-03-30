# zifi

> Make Stories everywhere using React ♥

[![NPM](https://img.shields.io/npm/v/zifi.svg)](https://www.npmjs.com/package/zifi) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add zifi
```

## Usage

```jsx
import React, { Component } from 'react'

import Story, { StoryTrigger, StoryItem } from 'zifi'

class Example extends Component {
  render () {
    return (
      <Story zifiId="#root">
      	{/* Clicking on StoryTrigger will trigger story */}
        <StoryTrigger>
          <button>Some Button</button>
          <p>More Stuff</p>
        </StoryTrigger>
      {/* Add as many StoryItems as you want with custom JSX ♥ */}
        <StoryItem>
          <img alt="Flexbox" 
            src="https://images.unsplash.com/photo-1522133474647-57fc4706cb0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=ff0529da7d5969778580656a645e8532"
          />
        </StoryItem>
        <StoryItem>
          Something else
        </StoryItem>
        <StoryItem>
          <img alt="Flexbox" src="https://internetingishard.com/html-and-css/flexbox/flexbox-vs-floats-418bf3.png" />
        </StoryItem>
        <StoryItem>
          Flexbox is awesome
        </StoryItem>
        <StoryItem>
          <img alt="Flexbox" src="https://internetingishard.com/html-and-css/flexbox/footer-flexible-items-static-widths-af0a32.png" />
        </StoryItem>
        <StoryItem>
          Finally
        </StoryItem>
      </Story>
    )
  }
}
```

## License

MIT © [mubaris](https://github.com/mubaris)
