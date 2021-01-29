import React from "react";
// import { BaseButton } from "../../components/Dashboard/BaseButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Statistic: React.FC = () => {
  return (<StatisticStyle>
    <Link to={'/'}>
      {/*<BaseButton backgroundColor='purple' fontColor='white' percent={-10} position='right'>*/}
      {/*  back to game*/}
      {/*</BaseButton>*/}
    </Link>
  </StatisticStyle>)
}

const StatisticStyle = styled.div`
  width: 90%;
  margin-left: 5%;
  padding-top: 4rem;
  position: relative;
  height: 80%;

`
