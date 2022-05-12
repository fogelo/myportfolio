import React from "react";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import Particles from "./Components/Particles";

function App() {
    return (
        <AppStyled>
            <Sidebar/>

            <MainContentStyled>
                <div className={"lines"}>
                    <div className="lines-1"/>
                    <div className="lines-2"/>
                    <div className="lines-3"/>
                    <div className="lines-4"/>
                </div>
                <HomePage/>
            </MainContentStyled>


        </AppStyled>
    );
}


const AppStyled = styled.div`
  background-color: var(--background-dark-color);
`

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;

    .lines-1, .lines-2, .lines-3, .lines-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var( --border-color);
    }
  }
`

export default App;
