import React from 'react'
import styled from "styled-components";


export const Navigation: React.FC = () => {
  return (<NavigationStyle>the starwars game</NavigationStyle>)
}

const NavigationStyle = styled.nav`
  width: 100%;
  height: 4rem;
  color: yellow;
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
`
