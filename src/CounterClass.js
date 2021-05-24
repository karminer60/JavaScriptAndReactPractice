import React from 'react'

//create counter using a class component

class Counter extends  React.Component{
    constructor(){
        super(); //we need to call the contructor function of the class being extended- React.Component
        this.state = {
            //object containing all of the states for the class
            //for each key in state here would translate to a seaparate useState
            count : 0
        }

    }

    //create a a button to increment the count
    render(){
        const increment = () => {
            //count wrapped in an object because that is how it is defined; lets you update all of the states in one go
            //this keyword used because state stored on the class; how you access things on the class instance
            this.setState({count: this.state.count + 1}) 
        }
        return <div> The count is: {this.state.count}
                <button id="increment-button" onClick= {increment}>
                    Increment
                </button>
            
                </div>
    }
}

export default Counter;