import React from "react";
import {MainLayout} from "../styles/Layouts";
import styled from "styled-components";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";

const AboutPage = () => {
    return (
        <MainLayout>
            <AboutPageStyled>
                <Title title={"About Me"} span={"About Me"}/>
                <ImageSection/>
                <ServicesSection/>
            </AboutPageStyled>
        </MainLayout>
    );
};

const AboutPageStyled = styled.div`

`

export default AboutPage;