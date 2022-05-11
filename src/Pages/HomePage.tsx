import React from "react";
import Particles from "../Components/Particles";
import styled from "styled-components";

const HomePage = () => {
    return (
        <HomePageStyled>
            <Particles/>
        </HomePageStyled>
    );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`

export default HomePage;