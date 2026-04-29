import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import Logo from './Logo'
import MainNav from './MainNav'

const StyledSider = styled.aside`
        background-color: var(--color-grey-0);
        padding: 3.2rem 2.4rem;
        border-right: 1px solid var(--color-grey-200);
        grid-row: 1/-1;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        
        `

export default function Sidebar() {

  return (
    <StyledSider>
        <GlobalStyles/>
        <Logo/>
        <MainNav/>
        
    </StyledSider>
  )
}
