import React, {Component} from 'react';
//import './Person.css';

class Person extends Component {
    render() {
        console.log("Inside child Person rendering..")
        return (
       <div>
            <p onClick = {this.props.click}>I am  {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type = "text" onChange={this.props.changed} value={this.props.name}/>
        </div>
            );
    }
    
   

}
export default Person;