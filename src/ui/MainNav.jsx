
import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

import { HiCog } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { HiOutlineIdentification } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdAccountBalance } from "react-icons/md";






const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavlink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;


export default function MainNav() {
  return (
    <div>
      <nav>
        <NavList>
          <li>
          <StyledNavlink to="/dashboard">
          <FaHome/>
            <span>Dashboard</span>
          </StyledNavlink>
          </li>
          <li>
          <StyledNavlink to="/Bookings">
          <HiOutlineIdentification/>
            <span>Bookings</span>
          </StyledNavlink>
          </li>
          <li>
          <StyledNavlink to="/Cabins">
            <HiOutlineHomeModern/>
            <span>Cabins</span>
          </StyledNavlink>
          </li>
          <li>
            <StyledNavlink to="/Users">
              <HiUsers/>
              <span>Users</span>
            </StyledNavlink>
          </li>
          <li>
          <StyledNavlink to="/settings">
            <HiCog/>
            <span>Settings</span>
          </StyledNavlink>
          </li>
         
         
          <li>
          <StyledNavlink to="/Account">
            <MdAccountBalance/>
            <span>Account</span>
          </StyledNavlink>
          </li>
         
        </NavList>
        
      </nav>
    </div>
  )
}
