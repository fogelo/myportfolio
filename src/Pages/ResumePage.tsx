import React from "react";
import styled from "styled-components";
import {MainLayout} from "../styles/Layouts";
import Title from "../Components/Title";
import Skills from "../Components/Skills";
import Resume from "../Components/Resume";

const ResumePage = () => {
    return (
        <ResumePageStyled>
                <Title title={"MY SKILLS"} span={"MY SKILLS"}/>
                <Skills/>
                <Title title={"RESUME"} span={"RESUME"}/>
                <Resume/>
        </ResumePageStyled>
    );
};

const ResumePageStyled = styled.section`

`

export default ResumePage;