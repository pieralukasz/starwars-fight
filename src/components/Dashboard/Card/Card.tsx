import React, { useEffect, useState } from "react";

import { Card } from "@material-ui/core";
import { Select, MenuItem } from "@material-ui/core";
import { CirclePoints } from "./CirclePoints";
import styled from "styled-components";
import {
  StarwarsPeopleMass,
  StarwarsRequestEnum,
  StarwarsStarshipCrew,
} from "../../../actions/StarWars/StarwarsActionsType";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreType } from "../../../store";
import { setActiveSelect } from "../../../actions/Select/SelectActions";
import { checkIfUnknown } from "../../../utils/utils";
import { useTranslation } from "react-i18next";

const CardItemInside = React.lazy(() => {
  return import('./CardItemInside')
    .then(({CardItemInside}) => ({default: CardItemInside}))
})

type CardExtProps = {
  isActive: boolean;
  position: string;
  player: StarwarsPeopleMass | StarwarsStarshipCrew | undefined;
  points: number | string | undefined;
};

enum SelectEnum {
  ALL = "all",
  PEOPLE = "people",
  STARSHIPS = "starships",
}

export const CardExt: React.FC<CardExtProps> = (props) => {
  const { t } = useTranslation();

  const { player } = props;

  const dispatch = useDispatch();

  const [playerDefault, setPlayerDefault] = useState<StarwarsRequestEnum>(
    StarwarsRequestEnum.PEOPLE
  );

  const [firstSelect, setFirstSelect] = useState(SelectEnum.ALL as string);

  const [secondSelect, setSecondSelect] = useState(SelectEnum.ALL as string);

  const selectState = useSelector((state: RootStoreType) => state.select);

  useEffect(() => {
    if (selectState?.firstSelect !== undefined) {
      setFirstSelect(selectState.firstSelect);
    }
    if (selectState?.secondSelect !== undefined) {
      setSecondSelect(selectState.secondSelect);
    }
  }, [selectState?.firstSelect, selectState?.secondSelect]);

  const updateValue = (e: object | any): void => {
    const { value, name } = e.target;

    dispatch(setActiveSelect({ value, select: name }));
  };

  const isPeople = (): boolean => {
    return playerDefault === StarwarsRequestEnum.PEOPLE;
  };

  useEffect(() => {
    const check = player?.mass
      ? StarwarsRequestEnum.PEOPLE
      : StarwarsRequestEnum.STARSHIPS;

    setPlayerDefault(check);
  }, [player]);


  return (
    <CardExtStyle>
      {player ? (
        <InfoInside>
          <React.Suspense fallback={<div>{t("loading")}</div>}>
            <CardItemInside
              title={t("type")}
              description={isPeople() ? t("people") : t("starships")}
            />
            <CardItemInside
              title={isPeople() ? t("name_people") : t("name_starships")}
              description={player?.name}
            />
            <CardItemInside
              title={isPeople() ? t("mass") : t("crew")}
              description={
                isPeople()
                  ? checkIfUnknown(player?.mass)
                  : checkIfUnknown(player?.crew)
              }
            />
          </React.Suspense>
        </InfoInside>
      ) : (
        <QuestionMark>?</QuestionMark>
      )}
      {props.position === "left" ? (
        <SelectExpLeft name={"left"} value={firstSelect} onChange={updateValue}>
          <MenuItemExp value={SelectEnum.ALL}>{t("all")}</MenuItemExp>
          <MenuItemExp value={SelectEnum.PEOPLE}>{t("people")}</MenuItemExp>
          <MenuItemExp value={SelectEnum.STARSHIPS}>
            {t("starships")}
          </MenuItemExp>
        </SelectExpLeft>
      ) : (
        <SelectExpRight
          name={"right"}
          value={secondSelect}
          onChange={updateValue}
        >
          <MenuItemExp value={SelectEnum.ALL}>{t("all")}</MenuItemExp>
          <MenuItemExp value={SelectEnum.PEOPLE}>{t("people")}</MenuItemExp>
          <MenuItemExp value={SelectEnum.STARSHIPS}>
            {t("starships")}
          </MenuItemExp>
        </SelectExpRight>
      )}
      <CirclePoints position={props.position}>{props.points}</CirclePoints>
    </CardExtStyle>
  );
};

const CardExtStyle = styled(Card)`
  min-height: 350px;
  max-height: 350px;
  min-width: 350px;
  max-width: 350px;
  background-color: rgba(206, 206, 206, 0.6) !important;
  padding: 1rem;
  transition: 0.3s;
  font-size: 2rem;
  text-align: center;
  position: relative;
  overflow: visible !important;
  color: white !important;

  @media (max-width: 1200px) {
    max-height: 300px;
    min-height: 300px;
    max-width: 300px;
    min-width: 300px;
  }

  @media (max-width: 900px) {
    max-height: 200px;
    min-height: 200px;
    max-width: 200px;
    min-width: 200px;
  }

  @media (max-width: 450px) {
    max-height: 170px;
    min-height: 170px;
    max-width: 170px;
    min-width: 170px;
  }
`;

export const QuestionMark = styled.p`
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

  @media (max-width: 1200px) {
    font-size: 11rem;
  }

  @media (max-width: 900px) {
    font-size: 8rem;
  }
`;

export const InfoInside = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 450px) {
    height: 85%;
  }
`;

const SelectExpLeft = styled(Select)`
  position: absolute !important;
  left: 5%;
  bottom: 2%;
  font-family: JediFont, serif !important;
  color: #cecece !important;
`;

const SelectExpRight = styled(Select)`
  position: absolute !important;
  right: 5%;
  bottom: 2%;
  font-family: JediFont, serif !important;
  color: #cecece !important;
`;

const MenuItemExp = styled(MenuItem)`
  font-family: JediFont, serif !important;
`;
