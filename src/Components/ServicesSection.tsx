import React from "react";
import {InnerLayout} from "../styles/Layouts";
import styled from "styled-components";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import design from "../img/design.svg"
import intelligence from "../img/intelligence.svg"
import game from "../img/game-dev.svg"
import {useTranslation} from "react-i18next";

const ServicesSection = () => {
    const {t} = useTranslation()
    return (
        <ServicesSectionStyled>
            <Title title={t("about_page.services_section.title")} span={t("about_page.services_section.title")}/>
            <InnerLayout>
                <div className={"services"}>
                    <ServiceCard title={"Web Design"}
                                 image={design}
                                 paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sint?"}/>
                    <ServiceCard title={"Artificial Intelligence"}
                                 image={intelligence}
                                 paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sint?"}/>
                    <ServiceCard title={"Game Development"}
                                 image={game}
                                 paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sint?"}/>
                </div>
            </InnerLayout>
        </ServicesSectionStyled>

    );
};


const ServicesSectionStyled = styled.section`
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    @media (max-width: 1440px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    //margin-top: 5rem;
    justify-content: space-between;
    @media (max-width: 991px) {
      flex-direction: column;
    }
  }
`

export default ServicesSection;