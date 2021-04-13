import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import {homeObjOne, TutorialHead} from './Data'
import Tutorial from '../../components/tutorial/Tutorial'
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <Tutorial {...TutorialHead}/>
        </>
    );
};

export default Home
