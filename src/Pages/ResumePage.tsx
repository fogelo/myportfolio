import React from "react";
import styled from "styled-components";
import {InnerLayout, MainLayout} from "../styles/Layouts";
import Title from "../Components/Title";
import Skills from "../Components/Skills";

const ResumePage = () => {
    return (
        <ResumePageStyled>
            <MainLayout>
                <Title title={"Resume"} span={"resume"}/>
                <InnerLayout>
                    <Skills/>
                </InnerLayout>
            </MainLayout>
        </ResumePageStyled>
    );
};

const ResumePageStyled = styled.section`

`

export default ResumePage;