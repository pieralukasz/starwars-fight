import React from "react";
import { ReactComponent as UnitedKingdomLogo} from "../assets/united-kingdom.svg";
import { ReactComponent as PolandLogo} from "../assets/poland.svg";
import styled from "styled-components";

export const LangPicker = () => {

  return (
    <FlagIconStyle>
      <UnitedKingdomLogo />
      <PolandLogo />
    </FlagIconStyle>
  )
}

const FlagIconStyle = styled.button`
  position: absolute;
  top: 4%;
  right: 2.5%;
`
