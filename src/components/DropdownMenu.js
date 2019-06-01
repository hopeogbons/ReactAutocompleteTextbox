import React, { Component } from "react";

class DropdownMenu extends Component {
  buildMenu() {
    const { items, action } = this.props;
    const menu = items.map((item, index) => (
      <li key={index} onClick={action}>
        {item}
      </li>
    ));
    return <ul>{menu}</ul>;
  }

  render() {
    return this.buildMenu();
  }
}

export default DropdownMenu;
