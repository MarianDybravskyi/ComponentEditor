import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { Preview } from "./preview";
import { Publish } from "./publish";

export class Header extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Nav>
          <Navbar.Brand>
            <Link to="/">
              <Image
                src="https://www.circuito.io/static/images/cir_logo_white.svg"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/">Editor</Link>
          </Navbar.Brand>
          {this.props.activeBlock && (
            <NavItem>{this.props.activeBlock}</NavItem>
          )}
        </Nav>
        <Nav pullRight>
          <NavItem href="https://talk.circuito.io" target="_blank">
            Help
          </NavItem>
          <Preview />
          <Publish />
          <Navbar.Brand>
            <a href="https://github.com/Circuito-io/ComponentEditor" target="_blank">
              <Image
                src="GitHub-Mark-Light-32px.png"
              />
            </a>
          </Navbar.Brand>
        </Nav>
      </Navbar>
    );
  }
}
Header.displayName = "Header";
/*Header.propTypes = {
  activeBlock: React.PropTypes.string,
}*/

Header.defaultProps = {
  activeBlock: null
};
