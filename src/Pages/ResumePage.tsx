import React from "react";
import styled from "styled-components";
import {MainLayout} from "../styles/Layouts";
import Title from "../Components/Title";
import Skills from "../Components/Skills";
import Resume from "../Components/Resume";
import {useTranslation} from "react-i18next";

const ResumePage = () => {
    const {t} = useTranslation()
    return (
        <ResumePageStyled>
            <Title title={t("resume_page.title1")} span={t("resume_page.title1")}/>
            <Skills/>
            <Title title={t("resume_page.title2")} span={t("resume_page.title2")}/>
            <Resume/>
        </ResumePageStyled>
    );
};

const ResumePageStyled = styled.section`

`

export default ResumePage;