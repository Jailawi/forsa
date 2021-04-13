import styled from 'styled-components';
import {color} from '../../globalStyles';
import {motion} from 'framer-motion'

export const TutorialSec = styled.div`
    /* background: ${({lightBg}) => (lightBg ? color.primary : color.darksecondary)}; */
    /* background: linear-gradient(#6859d3, #3c0ebb80); */
    /* height: 5000px; */
    padding: 100px;
    /* background: linear-gradient(${color.lightBlue}, ${color.darkBlue}); */
   /* overflow-x: hidden; */
   /* background: ${color.purple} */
   /* background: linear-gradient(to top,#6859d3, #3c0ebb80); */
    background: #D4E2F4;
`
export const TutorialContainer = styled(motion.div)`
    padding-top: 100px;
    /* background:red; */
    display: flex;
    justify-content: center;
    text-align: center;
    grid-gap: 10px;
`

export const TutorialColumn = styled(motion.div)`
padding: 20px 5%;
/* background:#fff; */
display: inline-flex;
min-width: 500px;
grid-gap:40px;
justify-content: center;
/* height: 300px; */
`
export const TutorialWrapper = styled.div`
position: relative;
/* display: inline-block; */
text-align: center;
margin: auto;
/* background: black; */
padding:100px;
`

export const TutHeading = styled.h2`
/* color:white; */
margin-bottom: 10px;
`

export const TutorialMiniHeading = styled.h3`
/* color:white; */
margin-bottom: 5px;
`

export const DoubleTutorial = styled.div`
padding: 0px 5%;
display: inline-block;
min-width: 500px;
`

export const LogoWrapper = styled.div`
display: grid;
grid-gap: 30px;
text-align:center;
margin: auto;
/* margin-right: 30px; */
`

export const Khara = styled.div`
padding: 10px 0%;
/* max-width: 500px; */
display: inline-block;
color:#000000;
white-space: normal;
text-align: left;
`



