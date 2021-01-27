import React from 'react'
import styled from 'styled-components'
import { CardContainer } from "../../components/Dashboard/Card/CardContainer";
import {ButtonBottom} from "../../components/Dashboard/ButtonBottom/ButtonBottom";

export const Dashboard: React.FC = () => {

  return (
    <DashboardContainer>
      <CardContainer />
      <ButtonBottom />
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
  }

`
