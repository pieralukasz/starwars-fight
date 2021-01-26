import React from 'react'
import styled from 'styled-components'
import {CardExt} from "../../components/Dashboard/Card/Card";
import {CardContainer} from "../../components/Dashboard/Card/CardContainer";

export const Dashboard: React.FC = () => {
  return (<DashboardContainer>
    <CardContainer />
  </DashboardContainer>)
}

const DashboardContainer = styled.div`
  width: 85%;
  margin-left: 7.5%;
  height: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

`
