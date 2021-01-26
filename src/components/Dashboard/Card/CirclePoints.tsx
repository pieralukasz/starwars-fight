import React from "react";
import styled from "styled-components";

interface CirclePointsType {
  position: string
}

export const CirclePoints: React.FC<CirclePointsType> = ({position, children}) => {
  return (
    <CirclePointsStyle position={position}>
      { children }
    </CirclePointsStyle>
  )
}


const CirclePointsStyle = styled.div<CirclePointsType>`

  ${(p) => p.position === 'left' && `
    right: -60px;
  `}

  ${(p) => p.position === 'right' && `
    left: -60px;
  `}

  position: absolute;
  bottom: -60px;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: black;
  `
