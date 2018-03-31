/**
 * @class Story
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import styled, { injectGlobal } from 'styled-components'
import sizeMe from 'react-sizeme'
import Fullscreen from 'react-full-screen'
// import './styles.css'

// const StyledFullscreen = styled(Fullscreen)`
//   .closer {
//     padding: 20px;
//   }
// `

const CloseButton = styled.button`
  display: block;
  border-radius: 50%;
  border: none;
  background-color: #444;
  color: #fff;
  padding: 0.4rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    display: block;
    max-height: 100%;
    max-width:100%;
  }
`

export const StoryTrigger = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export const StoryItem = (props) => {
  return (
    <div className="story-content">
      {props.children}
    </div>
  )
}

class Story extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      item: 1,
      isFull: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.nextStory = this.nextStory.bind(this)
    this.prevStory = this.prevStory.bind(this)
  }
  componentDidMount() {
    Modal.setAppElement(this.props.zifiId)
  }
  nextStory() {
    if (this.state.item + 1 < this.props.children.length) {
      this.setState({ item: this.state.item + 1 })
    } else {
      this.handleCloseModal()
    }
  }
  prevStory() {
    if (this.state.item > 1) {
      this.setState({ item: this.state.item - 1 })
    } else {
      this.handleCloseModal()
    }
  }
  handleOpenModal() {
    this.setState({ isFull: true, showModal: true, item: 1 })
  }

  handleCloseModal() {
    this.setState({ isFull: false, showModal: false })
  }
  handleClick(e) {
    const perc = e.screenX * 100 / this.props.size.width
    if (perc > 30) {
      this.nextStory()
    } else {
      this.prevStory()
    }
  }
  render() {
    const children = React.Children.toArray(this.props.children)
    return (
      <div>
        <div onClick={this.handleOpenModal}>
          {children[0]}
        </div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({isFull})}
          >
              <div className="closer">
              <CloseButton onClick={this.handleCloseModal}>
                <strong>X</strong>
              </CloseButton>
              </div>
              <FullDiv onClick={this.handleClick}>
                { children[this.state.item] }
              </FullDiv>
          </Fullscreen>
        </Modal>
      </div>
    )
  }
}

injectGlobal`
  .fullscreen-enabled .closer {
    margin: 20px;
  }
  .fullscreen-enabled .story-content {
    margin-top: -10%;
  }
  .fullscreen {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    .fullscreen-enabled .story-content {
      margin-top: -40%;
    }
  }
`

Story.propTypes = {
  zifiId: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  size: PropTypes.object,
}

Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#fff',
    WebkitOverflowScrolling: 'touch',
    borderRadius: 0,
    outline: 'none',
    padding: '20px',
  },
}

// export default Story
export default sizeMe()(Story)
