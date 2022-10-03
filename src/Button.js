import React from 'react'


//spread props for the all props can be send to componet in app.js
const Button = (props) => <button {...props}>{props.text}</button>


export default Button