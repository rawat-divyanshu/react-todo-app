import React, { Component } from "react";
import ToDoItem from "./todoitem";

export default class ToDoList extends Component {
  render() {
    const { items, handleClear, handleItemDelete, handleItemEdit } = this.props;
    return (
      <ul className="list-group my-5">
        {items.length === 0 ? (
          <h6 className="text-center">No Items in your list. Add Items Now.</h6>
        ) : (
          items.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                title={item.title}
                handleItemDelete={() => handleItemDelete(item.id)}
                handleItemEdit={() => handleItemEdit(item.id)}
              ></ToDoItem>
            );
          })
        )}
        <button
          type="button"
          className="btn btn-danger text-capitalize mt-5 btn-block"
          onClick={handleClear}
        >
          Clear the List
        </button>
      </ul>
    );
  }
}
