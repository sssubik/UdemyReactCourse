import React from 'react';
const cockpit = (props) => {
    let classes = [];
	if (props.persons.length <=2 ){
	classes.push('red');
	}
	if(props.persons.length <=1){
	classes.push('bold');
}
const style = {
    backgroundColor: 'green',
    color:'white',
font: 'inherit',
border: '1px solid blue',
padding: '8px',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: 'lightgreen',
        color:'blue'
    }
};
if(props.showPersons){
    style.backgroundColor = 'red';
    style[':hover']=  {
        backgroundColor: 'lightblue',
        color:'blue'
    }
}
    return(
        <div>
        <h1>{props.title}</h1>
		<p className={classes.join(' ')}>This is really Working!!</p>
        <button 
        style={style}
        onClick={props.clicked}>Toggle Views</button>
        </div>
    );
};

export default cockpit;