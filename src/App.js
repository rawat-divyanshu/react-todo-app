import React, { Component } from "react";
import ToDoInput from "./components/todoinput";
import ToDoList from "./components/todolist";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  handleReset = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
  };

  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      items: [],
      id: 0,
      item: "",
      editItem: false,
    });
  };

  handleItemDelete = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
  };

  handleItemEdit = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: newItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <ToDoInput
              item={this.state.item}
              editItem={this.state.editItem}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleReset={this.handleReset}
            ></ToDoInput>
            <ToDoList
              items={this.state.items}
              handleClear={this.handleClear}
              handleItemDelete={this.handleItemDelete}
              handleItemEdit={this.handleItemEdit}
            ></ToDoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
