import React from "react";
import {MainLayout} from "../styles/Layouts";
import styled from "styled-components";
import Title from "../Components/Title";

const AboutPage = () => {
    return (
        <MainLayout>
            <AboutPageStyled>
                <Title title={"About Me"} span={"About Me"}/>
            </AboutPageStyled>
        </MainLayout>
    );
};

const AboutPageStyled = styled.div`

`

export default AboutPage;