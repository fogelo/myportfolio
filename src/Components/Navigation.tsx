import React from "react";
import styled from "styled-components";
import avatar from "../img/my-avatar.jpeg"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className={"avatar"}>
                <img src={avatar} alt="111"/>
            </div>
            <ul className={"nav-items"}>
                <li className={"nav-item"}><NavLink to={"/home"}>Home</NavLink></li>
                <li className={"nav-item"}><NavLink to={"/about"}>About</NavLink></li>
                <li className={"nav-item"}><NavLink to={"/resume"}>Resume</NavLink></li>
                <li className={"nav-item"}><NavLink to={"/portfolios"}>Portfolios</NavLink></li>
                <li className={"nav-item"}><NavLink to={"/blogs"}>Blogs</NavLink></li>
                <li className={"nav-item"}><NavLink to={"/contacts"}>Contacts</NavLink></li>
            </ul>
            <footer className={"footer"}> all rights reserved</footer>
        </NavigationStyled>
    );
};


const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2rem 0;

    img {
      width: 80%;
      border-radius: 50%;
      border: 8px solid var(--border-color);

    }

    .nav-items {
      width: 100%;
      text-align: center;

      li {
        display: block;

        a {
          display: block;
        }
      }
    }
  }
`

export default Navigation;