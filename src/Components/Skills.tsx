import React from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";

const Skills = () => {
    return (
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
    );
};

const SkillsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 2.5rem;
`

export default Skills;