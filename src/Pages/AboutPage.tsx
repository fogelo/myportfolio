import React from "react";
import {MainLayout} from "../styles/Layouts";
import styled from "styled-components";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSection";
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t}  = useTranslation()
    return (
            <AboutPageStyled>
                <Title title={t("about_page.image_section.title")} span={"about_page.image_section.title"}/>
                <ImageSection/>
                <ServicesSection/>
                <ReviewsSection/>
            </AboutPageStyled>
    );
};

const AboutPageStyled = styled.div`

`

export default AboutPage;