import React, { Component } from "react";

import "../styles/App.css";
import { items } from "../items/items";
import Checkbox from "./Checkbox";
import LinksView from "./LinksView";

class App extends Component {
  state = {
    checkedItems: new Map()
  };

  handleChange = event => {
    const { name, checked } = event.target;
    this.setState(state => ({
      checkedItems: state.checkedItems.set(name, checked)
    }));
  };

  render() {
    return (
      <div className="App">
        <p className="help-text">
          Selecting an item will enable some boxes, based on condition, by
          vertically centering the corresponding box below
        </p>
        <div className="items-wrapper">
          {items.map(checkbox => (
            <div className="item">
              <Checkbox
                name={checkbox.name}
                checked={this.state.checkedItems.get(checkbox.name)}
                onChange={this.handleChange}
              />
              <label
                className="checkbox-label"
                key={checkbox.key}
                htmlFor={checkbox.name}
              >
                {checkbox.label}
              </label>
            </div>
          ))}
        </div>
        <hr />
        <LinksView checkedItems={this.state.checkedItems} />
      </div>
    );
  }
}

export default App;
