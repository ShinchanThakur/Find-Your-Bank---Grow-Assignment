import { Navbar, Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../styles/styles.css';
import { Color } from 'ag-grid-community';
export default class navbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="navHeading" href="#home">Find Your Bank</Navbar.Brand>

          <div>
            <NavLink exact style={{ textDecoration: 'none' }} className="menu-option" activeClassName="active_class" to="/">All Banks</NavLink>
            <NavLink exact style={{ textDecoration: 'none' }} className="menu-option" activeClassName="active_class" to="/favourites">Favourites</NavLink>

          </div>

        </Container>
      </Navbar>




    );
  }
}