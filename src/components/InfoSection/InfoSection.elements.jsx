import styled from 'styled-components';
import {color}  from '../../globalStyles';



export const InfoSec = styled.div`
color: #000000;
padding: 160px 2%;
/* background: ${({lightBg}) => (lightBg ? color.primary : color.darksecondary)}; */
/* background: linear-gradient(to top,#6859d3, #3c0ebb80); */
/* border-bottom: 1px solid #f1f1f1; */
/* background: linear-gradient(#6859d3, #3c0ebb80); */
background: #F3F3FA;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: -15px -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    
    flex-direction: ${({imgStart})=> (imgStart ? 'row-reverse' : 'row')}; 
`;


export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    height: 541px;
    flex: 1%;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 760px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 800px; //800
    padding-top: 0;
    padding-bottom: 60px;
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? color.guld : color.guld)};
font-weight: 700;
font-size: 22px;
line-height: 16px; 
letter-spacing:1.4px;
margin-top: 20px;
/* display: inline; */

`;

export const Heading = styled.h1`
margin-bottom: 15px;
margin-top: 12px;
font-size: 80px;
line-height: 1.1;
white-space: pre-line;
letter-spacing: 1.4px;
color: ${({lightText}) => (lightText ? '#000000' : '#000000')};
`;

export const Subtitle = styled.p`
max-width: 550px;
margin-bottom: 50px;
font-size: 22px;
white-space: pre-line;
line-height: 1.6;
color: ${({lightTextDesc}) => (lightTextDesc ? '#000000' : '#000000')};
`
export const ImgWrapper = styled.div`
/* max-width: 600px; */
display: flex;
/* margin: auto; */
justify-content: flex-end;
/* margin-left: 250px; 
margin-top:10px; */
/* margin-left: auto;
margin-right: auto; */
/* justify-content: ${({start}) => (start ? 'flex-end' : 'flex-end')}; */
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
display: inline-block;
max-height: 540px;
`;