import React from 'react';
import './UserOutput.css';
const UserOutput = (props) =>{
    return (
   <div>
    <p className = "UserOutput">Hi {props.name} is User output First Paragraph</p>
    <p className = "UserOutput" onClick = {props.clicked}>Hi {props.name} you typed --> {props.lengthOfCharacters} many letters</p>
   </div>    
);
}
export default UserOutput;