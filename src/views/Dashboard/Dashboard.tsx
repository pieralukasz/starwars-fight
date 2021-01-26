import React from 'react'
import styled from 'styled-components'
import { CardContainer } from "../../components/Dashboard/Card/CardContainer";
import { BaseButton } from "../../components/Dashboard/GenerateButton";

export const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <CardContainer />
      <BaseButton fontColor={'black'} backgroundColor={'yellow'} position={'left'} percent={50}>
        generate random players
      </BaseButton>
      <BaseButton fontColor={'white'} backgroundColor={'#8B1FA7'} position={'right'} percent={2}>
        history
      </BaseButton>
  </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  width: 85%;
  margin-left: 7.5%;
  height: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

`
