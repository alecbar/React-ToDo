import React, { Component } from 'react';
import TaskInput from './TaskInput'
import TaskTable from './TaskTable'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleNewTask = this.handleNewTask.bind(this)
    this.handleTaskStatusChange = this.handleTaskStatusChange.bind(this)
    this.handleClearTask = this.handleClearTask.bind(this)
    this.handleClearTasks = this.handleClearTasks.bind(this)
    this.state = {tasks: []}
  }

  //Example Tasks
  sample_tasks = {
    tasks: [
      {
        name: "Example Task 1",
        complete: false,
      },
      {
        name: "Example Task 2",
        complete: true,
      },
    ]
  }

  handleNewTask(task){
    this.setState({tasks: [{name: task, complete: false} ,...this.state.tasks]})
  }

  handleClearTask(index){
    const tasks = this.state.tasks.filter((task, i) => i !== index)
    this.setState({tasks: tasks})
  }

  handleClearTasks(){
    if(window.confirm("Are you sure you want to remove all tasks?")){
      this.setState({tasks: []})
    }
  }

  handleTaskStatusChange(index, status) {

    //Update individual task
    let tasks = this.state.tasks
    tasks[index].complete = status

    //Then sort tasks
    const currentTasks = this.state.tasks.filter(task => task.complete === false )
    const completedTasks = this.state.tasks.filter(task => task.complete === true)

    this.setState({tasks: [...currentTasks, ...completedTasks]})
  }

  componentDidMount(){
    // Fetch tasks from local storage
    let tasks = localStorage.getItem("tasks")
    if (tasks){
      this.setState({tasks: JSON.parse(tasks)})
    }
  }

  componentDidUpdate(){
    // When component updates, save tasks in local storage
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
  }

  render() {

    const removeButton = this.state.tasks.length > 1 ? <button className="muted-button warning-button" onClick={this.handleClearTasks}>Remove All</button> : null

    return (
    <div className="todo">
      <h1>To Do List</h1>
      <div> 
        <TaskInput onNewTask={this.handleNewTask}/>
      </div>
      <div>
        <TaskTable tasks={this.state.tasks} onTaskChange={this.handleTaskStatusChange} onTaskRemove={this.handleClearTask}/>
      </div>
      {removeButton}
    </div>
    )
  }

}

export default App;
