import React from "react";
import styled from "styled-components";

type CardItemInsideType = {
  title: string,
  description: string | number | undefined
}


export const CardItemInside: React.FC<CardItemInsideType> = ({title, description}) => {


  return (
    <>
      <Title>
        { title }
      </Title>
      <Description>
        { description }
      </Description>
    </>

  )

}

const Title = styled.div`
  color: #cecece;
  font-size: 1.5rem;
`

const Description = styled.div`
  color: white;
  font-size: 2rem;
`
