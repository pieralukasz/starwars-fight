import React from 'react'
import styled from "styled-components";
import { useTranslation } from "react-i18next";


export const Header: React.FC = () => {

  const { t } = useTranslation()

  return (<NavigationStyle>{t("starwars_title")}</NavigationStyle>)
}

const NavigationStyle = styled.nav`
  width: 100%;
  height: 4rem;
  color: yellow;
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }

`
