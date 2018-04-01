import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Rodal from 'rodal'
// import Rodal from './rodal.js'
import Fullscreen from 'react-full-screen'
// import Fullscreen from './fullscreen.js'

// import './rodal.css'
import 'rodal/lib/rodal.css'

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

const FullDiv = styled.div`
  height: 100%;
  width: 100%;
`

const BgDiv = styled.div`
  background-image: ${props => props.backgroundImage ? props.backgroundImage : ''};
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-filter: ${props => props.backgroundImage && props.blur ? `blur(${props.blur})` : ''};
  -moz-filter: ${props => props.backgroundImage && props.blur ? `blur(${props.blur})` : ''};
  -o-filter: ${props => props.backgroundImage && props.blur ? `blur(${props.blur})` : ''};
  -ms-filter: ${props => props.backgroundImage && props.blur ? `blur(${props.blur})` : ''};
  filter: ${props => props.backgroundImage && props.blur ? `blur(${props.blur})` : ''};
  transform: ${props => props.blur ? 'scale(1.05)' : ''};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  @media only screen and (max-device-width: 768px) {
    transform: ${props => props.blur ? 'scale(1.1)' : ''};
  }
`

const PaddingDiv = styled.div`
  padding: 2% 0 0 2%;
`

const CenterDiv = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media only screen and (max-device-width: 768px) {
    height: 90%;
    margin: auto;
  }
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

StoryItem.propTypes = {
  backgroundImage: PropTypes.string,
  blur: PropTypes.string,
}

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      index: 0,
      isFull: false,
    }

    this.targetScreen = ''

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
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 })
    } else {
      this.handleCloseModal()
    }
  }

  handleOpenModal() {
    if (this.props.fullScreen) {
      this.setState({ isFull: true, showModal: true, index: 0 })
    } else {
      this.setState({ showModal: true, index: 0 })
    }
  }

  handleCloseModal() {
    if (this.props.fullScreen) {
      this.setState({ isFull: false, showModal: false })
    } else {
      this.setState({ showModal: false })
    }
  }

  handleClick(e) {
    const perc = e.clientX * 100 / ReactDOM.findDOMNode(this.targetScreen).offsetWidth
    if (perc > 30) {
      this.nextStory()
    } else {
      this.prevStory()
    }
  }

  render() {
    const backgroundImage = this.items[this.state.index].props.backgroundImage
    const blur = this.items[this.state.index].props.blur
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
            ref={el => (this.targetScreen = el)}
          >
          <FullDiv onClick={this.handleClick}>
            <BgDiv backgroundImage={backgroundImage} blur={blur} />
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

Story.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

export default Story
