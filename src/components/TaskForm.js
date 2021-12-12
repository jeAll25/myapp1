
import React, { Component } from 'react';

class TaskForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      TaskType: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      TaskType: '',
      priority: 'low' 
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.taskname}
              onChange={this.handleInputChange}
              placeholder="Task Name"
              />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="TaskType"
              className="form-control"
              value={this.state.TaskType}
              onChange={this.handleInputChange}
              placeholder="Task Type"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </div>
    )
  }

}

export default TaskForm;

