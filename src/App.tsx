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
import {IconButton, Switch} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {

    const [theme, setTheme] = useState<"dark-theme" | "light-theme">("dark-theme")
    const [open, setOpen] = useState(false)

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
            <Sidebar open={open}/>
            <IconButton className={"menu"} onClick={() => setOpen(!open)}>
                <MenuIcon sx={{width: "50px", height: "50px"}}/>
            </IconButton>
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
    top: 15%;
    right: 0;
    z-index: 100;
  }

  .MuiSwitch-track {
    background-color: gray;
  }

  .menu {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    color: var(--white-color);
    @media (min-width: 1200px) {
      display: none;
    }
`


const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  //min-width: 400px;
  //display: grid;
  //grid-template-columns: repeat(1, 1fr);
  width: 100%;
  @media (max-width: 1200px) {
    margin-left: 0;
  }

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
