import React from "react";
import styled from "styled-components";

type CardItemInsideType = {
  title: string,
  description: string | number | undefined
}

export const CardItemInside: React.FC<CardItemInsideType> = ({title, description}) => {
  return (
    <div>
      <Title>
        { title }
      </Title>
      <Description>
        { description }
      </Description>
    </div>
  )

}

const Title = styled.div`
  color: #cecece;
  font-size: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 1.35rem;
  }

  @media (max-width: 900px) {
    font-size: 1.20rem;
  }
`

const Description = styled.div`
  color: white;
  font-size: 2rem;

  @media (max-width: 1200px) {
    font-size: 1.45rem;
  }

  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
`
