import React, { Component } from 'react'

// import Story, { StoryTrigger, StoryItem } from 'zifi'
import Story from 'zifi'


import styled, { injectGlobal } from 'styled-components'

// const Holder = styled.div`
//   padding: 5px;
//   display: inline-flex;
//   flex-direction: row wrap;
//   border: 2px solid #444;
//   border-radius: 10px;
//   h4 {
//     padding: 10px;
//   }
// `

// const Prime = styled.div`
//   width: 100%;
//   height: 100%;
//   background: url(https://pi.tedcdn.com/r/tedideas.files.wordpress.com/2017/03/frugal_innovation.png);
// `

// const ImageContainer = styled.img`
//   position: absolute;
//   left: 0;
//   top: 0;
// `

// const TextContainer = styled.div`
//   z-index: 100;
//   position: absolute;
//   color: white;
//   font-size: 24px;
//   font-weight: bold;
//   left: 150px;
//   top: 350px;
// `

// export default class App extends Component {
//   render () {
//     return (
//       <div>
//         <Story zifiId="#root">
//           <StoryTrigger>
//             <Holder>
//               <h4>2018's Most Innovative Companies</h4>
//               <img 
//                 alt="Tim Cook" 
//                 src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTE5NDg0MDU1MzM0OTc5MDg3/tim-cook-20967297-1-402.jpg" 
//                 height="100px"
//                 width="100px"
//               />
//             </Holder>
//           </StoryTrigger>
//           <StoryItem>
//             <Prime>
//               <h3>2018's Most Innovative Companies are here 🌍 🚀</h3>
//             </Prime>
//           </StoryItem>
//           <StoryItem>
//             Something else
//           </StoryItem>
//           <StoryItem>
//             <img alt="Flexbox" src="https://internetingishard.com/html-and-css/flexbox/flexbox-vs-floats-418bf3.png" />
//           </StoryItem>
//           <StoryItem>
//             Flexbox is awesome
//           </StoryItem>
//           <StoryItem>
//             <img alt="Flexbox" src="https://internetingishard.com/html-and-css/flexbox/footer-flexible-items-static-widths-af0a32.png" />
//           </StoryItem>
//           <StoryItem>
//             Finally
//           </StoryItem>
//         </Story>
//       </div>
//     )
//   }
// }


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

injectGlobal`
  body {
    margin: 2%;
  }
`

export default class App extends Component {
  render() {
    return (
      <Story>
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
        	</Title>
        </Story.Item>
        <Story.Item backgroundImage="linear-gradient(135deg, #fad961 0%,#f76b1c 100%)" >Something 2</Story.Item>
      </Story>
    );
  }
}
