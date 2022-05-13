import React from "react";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import {Routes, Route} from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactsPage from "./Pages/ContactsPage";

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
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/resume'} element={<ResumePage/>}/>
                    <Route path={'/portfolios'} element={<PortfoliosPage/>}/>
                    <Route path={'/blogs'} element={<BlogsPage/>}/>
                    <Route path={'/contacts'} element={<ContactsPage/>}/>
                </Routes>
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
    min-height: 100%;
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
