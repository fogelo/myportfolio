import React from "react";
import {InnerLayout} from "../styles/Layouts";
import styled from "styled-components";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import design from "../img/design.svg"
import intelligence from "../img/intelligence.svg"
import game from "../img/game-dev.svg"

const ServicesSection = () => {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={"services"}/>
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
            </ServicesSectionStyled>
        </InnerLayout>
    );
};


const ServicesSectionStyled = styled.section`
  .services {
    display: flex;
    margin-top: 5rem;
  }
`

export default ServicesSection;