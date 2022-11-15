import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from "./sidebarElements";
const Sizedbar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discoper">Discoper</SidebarLink>
          <SidebarLink to="services">services</SidebarLink>
          <SidebarLink to="signup">signup</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/singin"> Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sizedbar;
