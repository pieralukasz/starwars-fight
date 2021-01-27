import React, {useEffect, useState} from "react";
import { ReactComponent as UnitedKingdomLogo} from "../assets/united-kingdom.svg";
import { ReactComponent as PolandLogo} from "../assets/poland.svg";
import styled from "styled-components";
import i18next from "i18next";

export const LangPicker = () => {

  const [lang, setLang] = useState("")

  useEffect(() => {

    const langLS = localStorage.getItem('sw-lang')

    if (langLS) {
      setLang(langLS)
      i18next.changeLanguage(langLS)
    } else {
      localStorage.setItem('sw-lang', 'en')
      setLang('en')
      i18next.changeLanguage('en')
    }

  }, [])

  const setActiveLanguage = () => {
    if (lang === 'en') {
      setLang('pl')
      i18next.changeLanguage('pl')
    } else {
      setLang('en')
      i18next.changeLanguage('en')
    }
    localStorage.setItem('sw-lang', lang)
  }

  return (
    <FlagIconStyle onClick={() => setActiveLanguage()}>
      { lang === 'en' ? <UnitedKingdomLogo  /> : <PolandLogo />}
          </FlagIconStyle>
  )
}

const FlagIconStyle = styled.button`
  position: absolute;
  top: 4%;
  right: 5%;
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 100%;
    border: 2px solid white;
  }

  @media (max-width: 700px) {
    left: 50%;
    bottom: 2%;
    top: auto;
    transform: translateX(-50%);
  }
`
