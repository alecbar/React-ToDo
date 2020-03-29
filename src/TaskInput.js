import React, { Component } from "react";

class TaskInput extends Component{

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {value: ""}
    }

    handleChange(e) {
        // Handle input change
        this.setState({value: e.target.value})
    }


    handleSubmit(e) {
        // Handle form submit
        if(this.state.value.trim() === ""){
            alert("Please enter a task!")
        }
        else{
            e.preventDefault()
            this.props.onNewTask(this.state.value)
            this.setState({value: ""})
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Add a Task</label>
                <input
                    name="task" 
                    id="task" 
                    type="text" 
                    placeholder="Your task..." 
                    value={this.state.value}
                    onChange={this.handleChange}>
                </input>
                <input className="accent-button" type="submit" value="Add Task"></input>
            </form>

        ) 
    }
}

export default TaskInput