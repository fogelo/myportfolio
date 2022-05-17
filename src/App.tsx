import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import {Routes, Route, useLocation} from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactsPage from "./Pages/ContactsPage";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {IconButton, Switch} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {animated, useTransition} from "react-spring";


function App() {

    const [theme, setTheme] = useState<"dark-theme" | "light-theme">("dark-theme")
    const [open, setOpen] = useState(false)

    const toggleDrawer = (event?: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event && event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setOpen(!open);
    };

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])


    const location = useLocation()
    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translateX(-50%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
    })

    return (
        <AppStyled>

            <div className={"light-dark-mode"}>
                {theme === "dark-theme"
                    ? <LightModeOutlinedIcon sx={{color: "white"}}/>
                    : <LightModeIcon/>}
                <Switch onChange={() => setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme")}
                        color="default"
                />
            </div>
            <div className={"sidebar"}>
                <Sidebar open={open} toggleDrawer={(e) => toggleDrawer(e)}/>
            </div>
            <IconButton className={"menu"} onClick={toggleDrawer}>
                <MenuIcon sx={{width: {xs: 30, md: 40}, height: {xs: 30, md: 40}}}/>
            </IconButton>
            <MainContentStyled>
                <div className={"lines"}>
                    <div className="lines-1"/>
                    <div className="lines-2"/>
                    <div className="lines-3"/>
                    <div className="lines-4"/>
                </div>

                {
                    transitions((props, item) => (
                        <animated.div style={props}>
                            <Routes location={item}>
                                <Route path={"/"} element={<HomePage/>}/>
                                <Route path={"/about"} element={<AboutPage/>}/>
                                <Route path={"/resume"} element={<ResumePage/>}/>
                                <Route path={"/portfolios"} element={<PortfoliosPage/>}/>
                                <Route path={"/blogs"} element={<BlogsPage/>}/>
                                <Route path={"/contacts"} element={<ContactsPage/>}/>
                            </Routes>
                        </animated.div>
                    ))
                }

            </MainContentStyled>
        </AppStyled>
    );
}


const AppStyled = styled.div`
  background-color: var(--background-dark-color);
  position: relative;
  overflow: hidden;
  padding: 0.8rem;
  display: flex;

  .dropdown {
    position: relative;
    z-index: 100;
  }

  .light-dark-mode {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 70px;
    right: 5px;
    z-index: 2;
  }

  .MuiSwitch-track {
    background-color: gray;
  }

  .menu {
    position: fixed;
    top: 0;
    right: 5px;
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
  width: 100%;
  z-index: 1;
  @media (max-width: 1200px) {
    margin-left: 0;
  }

  .lines {
    position: absolute;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: 0;

    .lines-1, .lines-2, .lines-3, .lines-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: .25;
    }
  }
`

export default App;
