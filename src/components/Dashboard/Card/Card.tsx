import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";

type CardExtProps = {
  isActive: boolean
}

export const CardExt: React.FC<CardExtProps> = ({isActive, children}) => {
  return  (
    <CardExtStyle>
      { children }
      { isActive ? <QuestionMark>?</QuestionMark> : ""}
    </CardExtStyle>
  )
}

const CardExtStyle = styled(Card)`
  height: 350px;
  min-width: 350px;
  background-color: rgba(206, 206, 206, 0.6) !important;
  padding: 1rem;
  transition: .3s;
  font-size: 2rem;
  text-align: center;
  position: relative;


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
