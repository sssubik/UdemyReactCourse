  import React, { Component } from 'react';
  
  import './App.css';
  import Persons from '../components/Persons/Persons';
  import Cockpit from '../components/Cockpit/Cockpit'
  class App extends Component {
    constructor(props){
      super(props);
      console.log('[App.js] constructor');
    }

    state = {
      persons: [
        {id:'asd',name: "Max", age: 28},
        {id:'asasdas',name: "Manu", age :29},
        {id:'asdasdasdasd',name: "Steph", age:26}
      ],
      otherState: 'some value here',
      
						showPersons:true,
						
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

    static getDerivedStateFromProps(props, state){
      console.log('[App.js] get Derived State',props)
      return state;
    }
    componentDidMount() {
      console.log("App.js ComponentDidMount")
    }
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
      console.log('App.js render');
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
                    <Persons persons = {this.state.persons}
                            clicked = {this.deletePersonHandler}
                            changed = {this.nameChangedHandler}
                    />
								
								</div>
								);
							
						}
						let validationComponent= null;
					
						
						
				return (
				<div className="App">
        <Cockpit 
        title = {this.props.appTitle}
        showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
       />
        {persons}
           
        
        </div>
								
        );
        //return React.createElement('div', null,React.createElement('h1',{ className: 'App'},'Does it work now')); 
      }
    }
    
    export default App;
    