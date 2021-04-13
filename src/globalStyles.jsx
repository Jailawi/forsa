import styled, {createGlobalStyle} from 'styled-components'

export const color = {
    darkBlue: ' #031163',
    lightBlue: '#033063',
    white: '#fff',
    primary: '#6859d3',
    gold: '#c59439',
    darksecondary:'#3c0ebb80',
    purple: '#6556d2',
    guld: '#c59439',
    lightgreen: '#95F0D4',
    darkgreen: '#449C85',
    black: '#000000',
    white: '#F3F3FA',
    turquoise: '#D4E2F4',
};

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: Inter, sans-serif;
}
`;



export const Container = styled.div`
z-index:1;
width: 100%;
max-width: 1800px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;
display: block;
justify-content: center;
/* border-bottom: 1px solid #f1f1f1; */
/* background: red; */




    @media screen and  (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const TopLine = styled.div`
/* color: ${({lightTopLine}) => (lightTopLine ? color.gold : '#c59439')}; */
color: ${(color.guld)};
font-weight: 700;
font-size: 18px;
line-height: 16px; 
letter-spacing:1.4px;
display: inline-block
/* margin-top: 20px; */

`;

export const Button = styled.button`
background: ${({primary}) => (primary ? color.black : '#95F0D4')};
white-space: nowrap;
padding: ${({big}) => (big ? '16px 90px' : '10px 20px')};
color: ${color.white};
font-size: ${({fontBig}) => (fontBig ? '25px' : '18px')};
outline: none;
font-weight: bold;
border-radius: 20px;
border: none;
cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${color.gold};
        color: ${color.black}
    }

    @media screen and (max-width: 960px) {
        width: 100% auto;
    }
`;

export default GlobalStyle