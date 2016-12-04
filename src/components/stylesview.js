import React, { Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

class StylesView extends Component {

  onSelect(event) {
    this.props.styleChange(event);
  }

  render() {
    return (
      <NavDropdown eventKey={3} title="Style" id="maze-style-picker" 
        onSelect={(e) => this.onSelect(e)}>
        <MenuItem eventKey="Basic">Basic</MenuItem>
        <MenuItem eventKey="Road">Road</MenuItem>
        <MenuItem eventKey="Water">Water</MenuItem>
      </NavDropdown>);
  }
}
module.exports = StylesView;