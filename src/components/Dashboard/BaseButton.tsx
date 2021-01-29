import React from "react";
import styled from "styled-components";

interface BaseButtonType {
  backgroundColor: string
  hover: string
  fontColor: string
  percent: number
  position: string
  action?: any | void
  disabled?: boolean
}

export const BaseButton: React.FC<BaseButtonType> = (props) => {


  return (
    <BaseButtonStyle
      backgroundColor={ props.backgroundColor }
      fontColor={ props.fontColor }
      position={ props.position }
      percent={ props.percent }
      onClick={ props.action }
      disabled={ props.disabled }
      hover={ props.hover }
    >
      { props.children }
    </BaseButtonStyle>
  )
}


export const BaseButtonStyle = styled.button<BaseButtonType> `

  ${(p) => p.position === 'left' && `
    left: ${p.percent}%;
  `}

  ${(p) => p.position === 'right' && `
    right: ${p.percent}%;
    transform: translateX(50%);
  `}

  position: absolute;
  bottom: 5%;
  background-color: ${p => p.backgroundColor};
  color: ${p => p.fontColor};
  padding: 1rem;
  font-size: 2rem;
  border: none;
  border-radius: 4px;
  transition: .05s;

  &:hover {
    cursor: pointer;
    background-color: ${p => p.hover}
  }

  &:active {
    background-color: lighten(${p => p.backgroundColor}, 10);
    padding: 1.25rem
  }

  &:focus {
    border: none;
    outline: 0;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
    padding: 0.75rem;
  }

  @media (max-width: 900px) {
    font-size: 1.25rem;
    padding: 0.5rem;
    transform: translateX(0);

    ${(p) => p.position === 'right' && `
    right: 10%;
  `}
    ${(p) => p.position === 'left' && `
    left: 10%;
  `}
  }

  @media (max-width: 650px) {
    font-size: 1rem;
    padding: 0.35rem;
    transform: translateX(0);

    ${(p) => p.position === 'right' && `
    right: 5%;
    bottom: 4.85%;
  `}
    ${(p) => p.position === 'left' && `
    left: 5%;
  `}
  }


`
