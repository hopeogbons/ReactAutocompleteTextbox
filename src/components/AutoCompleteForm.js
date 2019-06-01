import React, { Component } from "react";
import DropdownMenu from "./DropdownMenu";

class AutoCompleteForm extends Component {
  state = { input: "", users: [], names: [], selectedName: "" };

  async componentDidMount() {
    const payload = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await payload.json();
    this.setState({ users });
  }

  extractNames = data => [...data].map(user => user.name);

  filterNames = event => {
    const { extractNames, state } = this;
    const input = event.target.value || "";
    let names = [];
    if (input) {
      names = extractNames(state.users).filter(
        name => name.toLowerCase().indexOf(input.toLowerCase()) > -1
      );
    }
    this.setState({ names, selectedName: input });
  };

  selectName = event => {
    this.setState({ names: [], selectedName: event.target.innerHTML });
  };

  render() {
    const { filterNames, selectName, state } = this;
    return (
      <div className="auto-complete">
        <div className="textbox">
          <input
            type="text"
            name="name"
            id="name"
            value={state.selectedName}
            onChange={filterNames}
          />
          <DropdownMenu items={state.names} action={selectName} />
        </div>
      </div>
    );
  }
}

export default AutoCompleteForm;
