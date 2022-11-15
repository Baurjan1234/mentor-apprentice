import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  Navlinks,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const NavBar = (props) => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Navlinks to="about">About</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to="discover">Discover</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to="services">services</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to="signup">Sing up</Navlinks>
            </NavItem>

            <NavBtn>
              <NavBtnLink to="/singin">Sign in</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default NavBar;
