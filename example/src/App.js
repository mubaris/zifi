import React, { Component } from 'react'

import Story, { StoryTrigger, StoryItem } from 'zifi'

// const stories = [
//   <div key="1">
//     <img alt="Flexbox" src="https://images.unsplash.com/photo-1522133474647-57fc4706cb0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=ff0529da7d5969778580656a645e8532" />
//   </div>,
//   <div key="2">
//     Something else
//   </div>,
//   <div key="3">
//     <img alt="Flexbox" src="https://internetingishard.com/html-and-css/flexbox/flexbox-vs-floats-418bf3.png" />
//   </div>,
//   <div key="4">
//     Flexbox is awesome
//   </div>,
//   <div key="5">
//     <img alt="Flexbox" src="https://internetingishard.com/html-and-css/flexbox/footer-flexible-items-static-widths-af0a32.png" />
//   </div>,
//   <div key="6">
//     Finally
//   </div>,
// ]

export default class App extends Component {
  render () {
    return (
      <div>
        <Story zifiId="#root">
          <StoryTrigger>
            <button>Some Button</button>
            <p>More Stuff</p>
          </StoryTrigger>
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
      </div>
    )
  }
}
