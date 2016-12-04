import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styleChangeAction from '../actions/stylechangeaction';
import Maze from './maze';
import React, { Component } from 'react';
import StylesView from '../components/stylesview';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

class AppContainer extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={1} md={1}>
            <Navbar inverse collapseOnSelect fixedTop fluid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">O-Maze</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#">New Maze</NavItem>
                  <StylesView
                    styleChange={this.props.styleChange} />
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs={1} md={1}>
            <div style={{ minHeight: 50 }}> </div>
            <Maze/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    style: state.style.style
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    styleChange: styleChangeAction
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);