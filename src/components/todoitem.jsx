import React, { Component } from "react";

export default class ToDoItem extends Component {
  render() {
    const { title, handleItemDelete, handleItemEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todoicon">
          <span className="mx-2 text-success" onClick={handleItemEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleItemDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
