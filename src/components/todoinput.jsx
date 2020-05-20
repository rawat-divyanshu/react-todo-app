import React, { Component } from "react";

export default class ToDoInput extends Component {
  render() {
    const {
      item,
      editItem,
      handleChange,
      handleSubmit,
      handleReset,
    } = this.props;
    return (
      <div className="card text-center">
        <div className="card-header bg-color-red">
          <h3>React Todo App</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="input-group">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Enter TODO Item"
                value={item}
                onChange={handleChange}
              />
              <button
                className={editItem ? "btn btn-success" : "btn btn-primary"}
                onClick={handleSubmit}
              >
                {editItem ? "Update Item" : "Add Item"}
              </button>
              <button className="btn btn-warning" onClick={handleReset}>
                Clear Input
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
