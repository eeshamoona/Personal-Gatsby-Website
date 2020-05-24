import React, { Component } from "react";
import { Link } from 'gatsby'
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBCollapse, MDBFormInline} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Eesha Moona</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem active>
              <Link to = "../">Home</Link>
            </MDBNavItem>
            <MDBNavItem active>
              <Link to = "../aboutMe">About</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="../contactMe">Contact</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="../blog">Blog</Link>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Header