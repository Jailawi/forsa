import {React, useState} from 'react'
import {TutorialOne,TutorialTwo,TutorialThree,TutorialFour} from '../../pages/HomePage/Data'
import {Container, TopLine, color} from '../../globalStyles';
import {FaLongArrowAltRight} from 'react-icons/fa'
import {Heading, ImgWrapper, InfoRow, InfoSec} from '../InfoSection/InfoSection.elements'
import {TutorialSec, TutorialContainer, TutorialColumn, TutorialWrapper, TutHeading, DoubleTutorial, TutorialMiniHeading, Khara, LogoWrapper} from '../tutorial/Tutorial.elements'
import {motion} from 'framer-motion';

const TutorialContent = ({heading, description}) => (
    <TutorialColumn className="shlon khara"><Khara><TutHeading>{heading}</TutHeading>{description}</Khara> <LogoWrapper className="bombo"><FaLongArrowAltRight size="3em" color="#c59439"/></LogoWrapper></TutorialColumn>
);
const TutorialContents = ({heading, description}) => (
    <TutorialColumn className="shlon khara"><Khara><TutHeading>{heading}</TutHeading>{description}</Khara> <LogoWrapper className="bombo"><FaLongArrowAltRight size="3em" color="#c59439"/><FaLongArrowAltRight size="3em" color="#c59439"/></LogoWrapper></TutorialColumn>
);
const TutorialContentMini = ({heading, description}) => (
    <Khara className="khara"><TutorialMiniHeading>{heading}</TutorialMiniHeading>{description}</Khara>
);



function Tutorial({description, lightBg, lightTopLine, topLine, heading}) {
    
    const [isAnimated, setIsAnimated] = useState(false)
    const startAnimation = () => {
        if(window.scrollY >= 300) {
            setIsAnimated(true);
        }
    };
  
    window.addEventListener('scroll', startAnimation)
    window.addEventListener('load', (event) => {
        setIsAnimated(false)
        setTimeout(startAnimation, 1000)
      });

    const variants = {
        visible: i => ({opacity: 1, x:0, transition: {delay: i*0.3} }),
        hidden: {opacity: 0, x: -300},
    }
    return (
        <>
        <TutorialSec className='TutorialSec' lightBg={lightBg}>
            <Container>
                <TutorialWrapper>
                <TopLine as={motion.div} inital="hidden" animate={isAnimated ? 'visible' : 'hidden'} variants={variants} custom={1}>{topLine}</TopLine>
                <TutorialContainer>                    
                    <motion.div inital="hidden" animate={isAnimated ? 'visible' : 'hidden'} variants={variants} custom={3} > <TutorialContent {...TutorialOne}/></motion.div>
                    <motion.div inital="hidden" animate={isAnimated ? 'visible' : 'hidden'} variants={variants} custom={4} ><TutorialContents {...TutorialTwo}/></motion.div>
                    <motion.div inital="hidden" animate={isAnimated ? 'visible' : 'hidden'} variants={variants} custom={5} ><DoubleTutorial><TutorialContentMini {...TutorialThree}/> <TutorialContentMini {...TutorialFour}/></DoubleTutorial></motion.div>
                </TutorialContainer> 
                </TutorialWrapper>
            </Container>
        </TutorialSec>
        </>

    );
};

export default Tutorial