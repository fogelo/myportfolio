import React, {FC} from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import {Drawer, useMediaQuery, useTheme} from "@mui/material";

type SidebarPT = {
    open: boolean
}

const Sidebar: FC<SidebarPT> = ({open}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
    console.log(matches)
    return (
        <DrawerDrawer>
            <Drawer
                anchor={"left"}
                open={open}
                // onClose={toggleDrawer(anchor, false)}
                // hideBackdrop={true}
                variant={matches ? "persistent" : "permanent"}
            >
                <SidebarStyled>
                    <Navigation/>
                </SidebarStyled>
            </Drawer>
        </DrawerDrawer>

    );
};

const DrawerDrawer = styled.div`
  .css-12i7wg6-MuiPaper-root-MuiDrawer-paper {
    background-color: var(--border-color);
  }
`


const SidebarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  z-index: 2;
  color: var(--font-light-color);
  border-right: 1px solid var(--border-color);

  .menu {
    color: var(--white-color);
  }
`

export default Sidebar;