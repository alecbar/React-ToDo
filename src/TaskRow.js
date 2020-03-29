import React, { Component } from 'react';

class TaskRow extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    handleClick(e){
        this.props.onChange(this.props.index, !this.props.complete)
    }

    handleClear(){
        this.props.onClear(this.props.index)
    }

    render(){
        console.log("Task row rendered.")
        return (
            <tr>
                <td>{this.props.name}</td>
                <td className="td-right">
                    <button className= {this.props.complete === true ? "accent-button" : "muted-button success-button"} onClick={this.handleClick}>&#10003;</button>
                </td>
                <td className="td-right">
                    <button className="warning-button muted-button" onClick={this.handleClear}>&#10005;</button>
                </td>
            </tr>
        )
    }

}

export default TaskRow