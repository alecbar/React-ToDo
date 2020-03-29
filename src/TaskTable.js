import React, { Component } from "react";
import TaskRow from './TaskRow'

class TaskTable extends Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClearTask = this.handleClearTask.bind(this)
    }

    handleChange(index, status){
        this.props.onTaskChange(index, status)
    }

    handleClearTask(index){
        this.props.onTaskRemove(index)
    }

    createTaskTable(tasks) {
        const taskRows = tasks.map((task, index)=>
            <TaskRow key={index} index={index} name={task.name} complete={task.complete} onChange={this.handleChange} onClear={this.handleClearTask}/>
        )

        return (

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {taskRows}
                </tbody>
            </table>
        )
    }

    render() {
        console.log("Table: ", this.props.tasks)

        let table
        if (this.props.tasks.length !== 0) {
            table = this.createTaskTable(this.props.tasks)
        }
        else {
            table = (
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>No tasks yet.</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            )
        }

        return (
            table
        )
    }
}

export default TaskTable