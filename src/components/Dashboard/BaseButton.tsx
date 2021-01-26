import React from "react";
import styled from "styled-components";

interface BaseButtonType {
  backgroundColor: string
  fontColor: string
  percent: number
  position: string
  click?: void
}

export const BaseButton: React.FC<BaseButtonType> = (props) => {
  return (
    <BaseButtonStyle
      backgroundColor={ props.backgroundColor }
      fontColor={ props.fontColor }
      position={ props.position }
      percent={ props.percent }
      onClick={ () => props.click }
    >
      { props.children }
    </BaseButtonStyle>
  )
}

interface BaseButtonStyleType {
  backgroundColor: string
  fontColor: string
  percent: number
  position: string
}

export const BaseButtonStyle = styled.button<BaseButtonStyleType> `

  ${(p) => p.position === 'left' && `
    left: ${p.percent}%;
  `}

  ${(p) => p.position === 'right' && `
    right: ${p.percent}%;
  `}

  position: absolute;
  transform: translateX(-50%);
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
  }

  &:active {
    background-color: lighten(${p => p.backgroundColor}, 10%);
    padding: 1.25rem
  }

  &:focus {
    border: none;
    outline: 0;
  }


`
