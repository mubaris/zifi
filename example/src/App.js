import React, { Component } from 'react'
import Story from 'zifi'
import styled, { injectGlobal, css } from 'styled-components'

const Holder = styled.div`
  padding: 5px;
  display: inline-flex;
  flex-direction: row wrap;
  border: 2px solid #444;
  border-radius: 10px;
  h4 {
    padding: 10px;
  }
`

const Title = styled.div`
	color: white;
`

const Pack = styled.div`
	font-size: 120%;
`

const ImageWrapper = styled.div`
	img {
		max-width: 100%;
		height:auto;
	  max-height:100%;
	}
`

const Button = styled.button`
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`

injectGlobal`
  body {
    margin: 2%;
  }
	blockquote {
	  border-left: 10px solid #ccc;
	  margin: 1.5em 10px;
	  padding: 0.5em 10px;
	}
	blockquote:before {
	  color: #ccc;
	  content: open-quote;
	  font-size: 4em;
	  line-height: 0.1em;
	  margin-right: 0.25em;
	  vertical-align: -0.4em;
	}
	blockquote p {
	  display: inline;
	}
`

export default class App extends Component {
  render() {
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
    );
  }
}
