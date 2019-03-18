import React  from 'react'
import './error-indicator.css'
import icon from './death-star.png'


const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="visual">
        <img src={icon} alt="death-star"/>
      </div>
      <span className="title">BOOM!</span>
      <span>
        something has gone terribly wrong <br/>
        (but we already sent droids to fix it)
      </span>
    </div>
  )
}


export default ErrorIndicator;