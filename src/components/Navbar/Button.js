import React from 'react';
import './Button.css'

const STYLES = [
    'btn-primary',
    'btn-outline'
]

const SIZES = [
    'btn-medium',
    'btn--large'
]

// #ef4d4f
// #f27789

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <div className="container">
        <a class="btn" href="TODO">
        <svg width="200" height="62">
          <defs>
              <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#000000"/>
                  <stop offset="100%" stop-color="#000000" />
              </linearGradient>
          </defs>
           <rect x="1" y="9" rx="10" fill="none" stroke="url(#grad1)" width="190" height="40"></rect>
        </svg>
    <span>{children}</span>
      </a>
      </div> 
  
    )
}

{/* <div className="btn" onClick={onClick} type={type}>
      
      <svg width="160" height="60">
    
        <defs>
            <linearGradient id="grad1">
                <stop offset="0%" stop-color="#ef4d4f"/>
                <stop offset="100%" stop-color="#f27789"/>
            </linearGradient>
            
        </defs>
         <rect x="5" y="8" rx="6" fill="none" stroke="url(#grad1)" width="150" height="45"></rect>
         <text x="30" y="35" fill="blue" className="word">{children}</text>
         
      </svg>
      <div x="30" y="35" className="word">{children}</div>
    </div> */}
