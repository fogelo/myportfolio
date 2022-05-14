import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import {Routes, Route} from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactsPage from "./Pages/ContactsPage";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {Switch} from "@mui/material";

function App() {
    const [theme, setTheme] = useState<"dark-theme" | "light-theme">("dark-theme")
    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])
    return (
        <AppStyled>
            <div className={"light-dark-mode"}>
                {theme === "dark-theme"
                    ? <LightModeOutlinedIcon/>
                    : <LightModeIcon/>}
                <Switch onChange={() => setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme")}
                        color="default"
                />
            </div>
            <Sidebar/>
            <MainContentStyled>
                <div className={"lines"}>
                    <div className="lines-1"/>
                    <div className="lines-2"/>
                    <div className="lines-3"/>
                    <div className="lines-4"/>
                </div>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/resume"} element={<ResumePage/>}/>
                    <Route path={"/portfolios"} element={<PortfoliosPage/>}/>
                    <Route path={"/blogs"} element={<BlogsPage/>}/>
                    <Route path={"/contacts"} element={<ContactsPage/>}/>
                </Routes>
            </MainContentStyled>
        </AppStyled>
    );
}


const AppStyled = styled.div`
  background-color: var(--background-dark-color);
  position: relative;

  .light-dark-mode {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 10%;
    right: 0;
    z-index: 1;
  }

  .MuiSwitch-track {
    background-color: gray;
  }
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
      background-color: var(--border-color);
      opacity: .25;
    }
  }
`

export default App;
