import React, {useEffect, useState} from "react";
import styled from "styled-components";

interface CirclePointsType {
  position: string
}

export const CirclePoints: React.FC<CirclePointsType> = ({position, children}) => {

  const [active, setActive] = useState(false)

  useEffect(() => {

    setActive(true)
    setTimeout(() => {
      setActive(false)
    }, 500)

  }, [children])


  return (
    <CirclePointsStyle position={position} className={active ? "active" : ""}>
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
  transition: 1s;

  &.active {
    transform: scale(1.50);
    background-color: #1eb2cd;
  }

  @media (max-width: 1200px) {
    width: 100px;
    height: 100px;
    font-size: 2rem;
  }

  @media (max-width: 900px) {

    ${(p) => p.position === 'left' && `
    right: -20px;
  `}

    ${(p) => p.position === 'right' && `
    left: -20px;
  `}
    bottom: -20px;
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`
