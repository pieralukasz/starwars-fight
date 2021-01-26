import React from "react";
import { BaseButton } from "../../components/Dashboard/BaseButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Statistic: React.FC = () => {
  return (<StatisticStyle>
    <Link to={'/'}>
      <BaseButton backgroundColor='purple' fontColor='color' percent={0} position='left'>
        back to game
      </BaseButton>
    </Link>
  </StatisticStyle>)
}

const StatisticStyle = styled.div`
  width: 85%;
  margin-left: 7.5%;
  margin-top: 4rem;
  background-color: red;
  position: relative;
  height: 80%;

`
