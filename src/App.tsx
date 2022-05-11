import React from "react";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";

function App() {
    return (
        <AppStyled>
            <Sidebar/>
        </AppStyled>
    );
}


const AppStyled = styled.div`
  background-color: var(--background-dark-color);
`

export default App;
