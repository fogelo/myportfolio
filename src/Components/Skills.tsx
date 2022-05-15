import React from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
import {InnerLayout} from "../styles/Layouts";

const Skills = () => {
    return (
        <InnerLayout>
            <SkillsStyled>
                <ProgressBar progress={"80%"} tech={"HTML5"}/>
                <ProgressBar progress={"80%"} tech={"CSS3"}/>
                <ProgressBar progress={"75%"} tech={"Styled Components"}/>
                <ProgressBar progress={"85%"} tech={"Javascript"}/>
                <ProgressBar progress={"80%"} tech={"Typescript"}/>
                <ProgressBar progress={"90%"} tech={"ReactJS"}/>
                <ProgressBar progress={"85%"} tech={"Redux"}/>
                <ProgressBar progress={"90%"} tech={"REST API"}/>
                <ProgressBar progress={"70%"} tech={"Unit Tests (Jest)"}/>
            </SkillsStyled>
        </InnerLayout>

    );
};

const SkillsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr); 
  }
  grid-column-gap: 1.5rem;
  grid-row-gap: 2.5rem;
`

export default Skills;