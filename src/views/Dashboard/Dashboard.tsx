import React from 'react'
import styled from 'styled-components'
import { CardContainer } from "../../components/Dashboard/Card/CardContainer";
import { BaseButton } from "../../components/Dashboard/BaseButton";
import { Link } from "react-router-dom";

export const Dashboard: React.FC = () => {

  const generateRandomPlayer = (): void => {
    console.log('elo')
  }

  return (
    <DashboardContainer>
      <CardContainer />
      <BaseButton
        fontColor={'black'}
        backgroundColor={'yellow'}
        position={'left'}
        percent={50}
        click={generateRandomPlayer()}
      >
        generate random players
      </BaseButton>
      <Link to={'/stats'}>
        <BaseButton
          fontColor={'white'}
          backgroundColor={'#8B1FA7'}
          position={'right'}
          percent={2}
        >
          history
        </BaseButton>
      </Link>
  </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  width: 85%;
  margin-left: 7.5%;
  height: 80%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  background-color: blue;
  position: relative;

`
