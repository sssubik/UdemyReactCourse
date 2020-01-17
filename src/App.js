  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Person from './Person/Person.js';
  import UserOutput from "./User/UserOutput.js";
  import UserInput from "./User/UserInput";
		import Validation from "./User/Validation";

		
  class App extends Component {
    state = {
      persons: [
        {id:'asd',name: "Max", age: 28},
        {id:'asasdas',name: "Manu", age :29},
        {id:'asdasdasdasd',name: "Steph", age:26}
      ],
      otherState: 'some value here',
      username:"Subik",
						showPersons:true,
						lengthOfCharacters: 0
    }
 /*    switchNameHandler = (newName) =>{
      
      //console.log("Was Clicked");
      //Dont use this --- this.state.persons[0].name = "Subik";
      this.setState({ persons: [
        {name: newName, age: 28},
        {name: "Manu", age :29},
        {name: "Steph", age:100}
      ]})
    } */
    nameChangedHandler = (event, id) =>{
					const personIndex = this.state.persons.findIndex(p => {
						return p.id ===id;
					});
					const person = {...this.state.persons[personIndex]};

					person.name = event.target.value;
					const persons = [...this.state.persons];
					persons[personIndex]= person;
      this.setState({ persons: persons});
       
				}
				lengthChangeHandler = (event) => {
						this.setState({lengthOfCharacters: event.target.value.length});
				}
				deletePersonHandler = (personIndex) =>{
					const persons = [...this.state.persons];
						persons.splice(personIndex,1);
						this.setState({persons:persons});
				}
    usernameChangedHandler = (event) => {
      this.setState({
        username:event.target.value
      })
    }
    togglePersonsHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      });
    }
    render() {
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
      let persons = null;
      if (this.state.showPersons){
        persons = (
									<div>
									{this.state.persons.map((person, index) => {
											return <Person 
											click={() => this.deletePersonHandler(index)}
											name = {person.name}
											 age = {person.age}
												key = {person.id}
												changed = {(event) => this.nameChangedHandler(event,person.id)}/>
									})}
								</div>
								);
								style.backgroundColor = 'red';
								style[':hover']=  {
									backgroundColor: 'lightblue',
									color:'blue'
								}
						}
						let validationComponent= null;
					
										/* 
											<div><Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, 'Max!!')}/>
          
          <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          changed={this.nameChangedHandler}>
          My Hobbies: Soccer
          </Person>
          <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}></Person>
										</div>); */
						let classes = [];
						if (this.state.persons.length <=2 ){
								classes.push('red');
						}
						if(this.state.persons.length <=1){
							classes.push('bold');
						}
						
						return (
						
        <div className="App">
        <h1>Hi I am React App</h1>
								<p className={classes.join(' ')}>This is really Working!!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Views</button>
        
        {persons}
           
        <UserOutput 
        lengthOfCharacters = {this.state.lengthOfCharacters}
        name = {this.state.username}
        />
        <UserInput
        
        changed={(event) => this.lengthChangeHandler(event)}
        />
								<Validation length = {this.state.lengthOfCharacters}/>
        </div>
								
        );
        //return React.createElement('div', null,React.createElement('h1',{ className: 'App'},'Does it work now')); 
      }
    }
    
    export default App;
    