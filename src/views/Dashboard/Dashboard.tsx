import React from 'react'
import styled from 'styled-components'
import { CardContainer } from "../../components/Dashboard/Card/CardContainer";
import {ButtonBottom} from "../../components/Dashboard/ButtonBottom/ButtonBottom";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../store";

export const Dashboard: React.FC = () => {

  const starwarsState = useSelector((state: RootStoreType) => state.starwars)

  return (
    <DashboardContainer>
      <CardContainer />
      <ButtonBottom />
      {starwarsState.loading ? <LoaderElement></LoaderElement>: ""}
  </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 80%;
  padding-top: 4rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 900px) {
    padding-top: 2rem;
    width: 100%;
    margin: 0;
  }`

const LoaderElement = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1000;
  `
