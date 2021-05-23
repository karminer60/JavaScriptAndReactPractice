import React from 'react'

//create counter using a class component

class Counter extends  React.Component{
    constructor(){
        super(); //we need to call the contructor function of the class being extended- React.Component
        this.state = {
            count : 0
        }

    }

    //create a a button to increment the count
    render(){
        const increment = () => {
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