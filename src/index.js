/**
 * @class Story
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import styled from 'styled-components'
import sizeMe from 'react-sizeme'

// Story.propTypes = {
//   stories: PropTypes.any,
//   containerWidth: PropTypes.number,
// }

const CloseButton = styled.button`
  display:block;
  border-radius: 50%;
  background-color: #aaa;
  color: #fff;
  padding: 0.4rem;
  height: 2rem;
  width: 2rem;
  opacity: 0.4;
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

class Story extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      item: 0,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.nextStory = this.nextStory.bind(this)
    this.prevStory = this.prevStory.bind(this)
  }
  componentDidMount() {
    Modal.setAppElement(this.props.zifiId)
  }
  nextStory() {
    if (this.state.item + 1 < this.props.stories.length) {
      this.setState({ item: this.state.item + 1 })
    } else {
      this.handleCloseModal()
    }
  }
  prevStory() {
    if (this.state.item > 0) {
      this.setState({ item: this.state.item - 1 })
    } else {
      this.handleCloseModal()
    }
  }
  handleOpenModal() {
    this.setState({ showModal: true, item: 0 })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
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
    return (
      <div id="zificontainer">
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
         <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <CloseButton onClick={this.handleCloseModal}>X</CloseButton>
          <FullDiv onClick={this.handleClick}>
            { this.props.stories[this.state.item] }
          </FullDiv>
        </Modal>
      </div>
    )
  }
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
