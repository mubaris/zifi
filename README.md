# zifi 🦄

> Make Stories everywhere using React ♥

[![NPM](https://img.shields.io/npm/v/zifi.svg)](https://www.npmjs.com/package/zifi) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add zifi
```

## Features

* Fullscreen API
* Custom Styles
* Responsive
* Made with ♥

Inspired by ProductHunt Sip and Medium Series 😍

## Preview

![Zifi Preview](https://media.giphy.com/media/3FcvuBdseyQmskoyAq/giphy.gif)

## Usage

Clicking on `Story.Trigger` triggers the `Story`. Each `Story.Item` will displayed according to user interaction.

```jsx
import React, { Component } from 'react'

import Story from 'zifi'

class Example extends Component {
  render () {
    return (
      <Story fullScreen={true}>
        <Story.Trigger>
          <Holder>
            <h4>2018's Most Innovative Companies</h4>
            <img 
              alt="Tim Cook" 
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTE5NDg0MDU1MzM0OTc5MDg3/tim-cook-20967297-1-402.jpg" 
              height="100px"
              width="100px"
            />
          </Holder>
        </Story.Trigger>
        <Story.Item
          backgroundImage="url(https://pi.tedcdn.com/r/tedideas.files.wordpress.com/2017/03/frugal_innovation.png)"
          blur="10px"
        >
          <Title>
            <h1>2018's Most Innovative Companies are here <span role="img" >🌍</span> <span role="img" >🚀</span></h1>
            <p>Fast Company just released their picks for the 350+ most innovative companies of the year.</p>
          </Title>
        </Story.Item>
        <Story.Item backgroundImage="linear-gradient(135deg, #fad961 0%,#f76b1c 100%)" >
          <Pack>
            <p><strong>Fast Company </strong><span>Editorial Staff</span></p>
          </Pack>
          <blockquote>
            The 2018 edition spans more than 350 enterprises across 35 categories, from the worlds most valuable firm to a small outfit selling natural gum to preserve rainforests.
          </blockquote>
        </Story.Item>
        <Story.Item>
          <ImageWrapper>
            <img src="https://media.giphy.com/media/l41m0H6DL7jZd4nKM/giphy.gif" alt="Tim Cook" />
            <p>Apple won the coveted #1 spot, with its release of the much-loved iPhone X, AirPod, and ARKit platform</p>
          </ImageWrapper>
        </Story.Item>
        <Story.Item>
          <p>A surprising contender, Patagonia came in sixth in part for their focus on helping the environment</p>
        </Story.Item>
        <Story.Item backgroundImage="linear-gradient(135deg, #5b247a 0%,#1bcedf 100%);">
          <Button>Read More</Button>
        </Story.Item>
      </Story>
    )
  }
}
```

## Props

### Story

Property|Type|Default|Description
---|---|---|---
fullScreen|bool|false|whether to show stories in full screen

### Story.Item

Property|Type|Default|Description
---|---|---|---
backgroundImage|string| |background image css property. pass url or gradient
blur|string| |filter - blur css property.

## License

MIT © [mubaris](https://github.com/mubaris)
