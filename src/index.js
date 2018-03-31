import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
// import Rodal from './Rodal'
import Rodal from 'rodal'
import Fullscreen from 'react-full-screen'

import 'rodal/lib/rodal.css'

// import './Rodal.css'

const modalStyles = {
  padding: 0
}

const CloseButton = styled.button`
  display: block;
  border-radius: 50%;
  border: none;
  background-color: #444;
  color: #fff;
  height: 2rem;
  width: 2rem;
  opacity: 0.4;
  font-size: 110%;
  :hover {
    opacity: 1;
  }
`

// const FullDiv = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   > img {
//     display: block;
//     max-height: 100%;
//     max-width:100%;
//   }
// `

const FullDiv = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : ''}
`

// background: ${this.props.backgroundImage}

const PaddingDiv = styled.div`
  padding: 2% 0 0 2%;
`

const CenterDiv = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StoryTrigger = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

const StoryItem = (props) => {
  return (
    <div className="story-content">
      {props.children}
    </div>
  )
}

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      index: 0,
      isFull: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.nextStory = this.nextStory.bind(this)
    this.prevStory = this.prevStory.bind(this)
    const children = React.Children.toArray(this.props.children)
    this.trigger = ''
    this.items = []
    React.Children.forEach(children, (child) => {
      if (child.type.name === 'StoryTrigger') {
        this.trigger = child
      } else if (child.type.name === 'StoryItem') {
        this.items.push(child)
      } else {
        console.error(`Expected child - Story.Item or Story.Trigger, but Received - ${child}`)
      }
    })
  }

  nextStory() {
    if (this.state.index + 2 < this.props.children.length) {
      this.setState({ index: this.state.index + 1 })
    } else {
      this.handleCloseModal()
    }
  }
  prevStory() {
    if (this.state.index > 1) {
      this.setState({ index: this.state.index - 1 })
    } else {
      this.handleCloseModal()
    }
  }

  handleOpenModal() {
    this.setState({ isFull: true, showModal: true, index: 0 })
  }

  handleCloseModal() {
    this.setState({ isFull: false, showModal: false })
  }

  handleClick(e) {
    const perc = e.screenX
    console.log(perc)
    this.nextStory()
    // if (perc > 30) {
    //   this.nextStory()
    // } else {
    //   this.prevStory()
    // }
  }

  render() {
    const backgroundImage = this.items[this.state.index].props.backgroundImage
    return (
      <div>
        <div onClick={this.handleOpenModal}>
          { this.trigger }
        </div>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
          <Rodal
            visible={this.state.showModal}
            onClose={this.handleCloseModal}
            width={100} height={100} measure="%"
            showCloseButton={false} animation="slideUp"
            showMask={false} customStyles={modalStyles}
          >
          <FullDiv backgroundImage={backgroundImage} onClick={this.handleClick}>
            <PaddingDiv>
              <CloseButton onClick={this.handleCloseModal}>
                <strong>X</strong>
              </CloseButton>
            </PaddingDiv>
            <CenterDiv>
              { this.items[this.state.index] }
            </CenterDiv>
          </FullDiv>
          </Rodal>
        </Fullscreen>
      </div>
    );
  }
}

Story.Trigger = StoryTrigger
Story.Item = StoryItem

export default Story
