import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import {CirclePoints} from "./CirclePoints";

type CardExtProps = {
  isActive: boolean
  position: string
}

export const CardExt: React.FC<CardExtProps> = ({isActive, position, children}) => {
  return  (

    // name: string,
    // height: string,
    // mass: string | number,
    // homeworld: string,
    <CardExtStyle>

      <div>{ children }</div>
      { isActive ? <QuestionMark>?</QuestionMark> : ""}
      <CirclePoints position={ position }>
        5
      </CirclePoints>
    </CardExtStyle>
  )
}

const CardExtStyle = styled(Card)`
  min-height: 350px;
  max-height: 350px;
  min-width: 350px;
  max-width: 350px;
  background-color: rgba(206, 206, 206, 0.6) !important;
  padding: 1rem;
  transition: .3s;
  font-size: 2rem;
  text-align: center;
  position: relative;
  overflow: visible !important;
  color: white !important;


  @media (max-width: 1200px) {
    max-height: 300px;
    min-width: 300px;
  }

`

const QuestionMark = styled.p`
  position: absolute;
  font-size: 14rem;
  color: rgba(255, 255, 255, 0.8);
  left: 50%;
  top: 1rem;
  transform: translate(-50%, -75%);
  width: 100%;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`



