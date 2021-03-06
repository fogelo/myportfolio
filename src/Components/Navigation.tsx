import React, {useState} from "react";
import styled from "styled-components";
import avatar from "../img/my-avatar.jpeg"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Skeleton} from "@mui/material";

const Navigation = () => {
    const {t} = useTranslation()

    const [isLoading, setIsLoading] = useState(true)
    const onLoadImgHandler = () => {
        setIsLoading(false)
    }
    return (
        <NavigationStyled>
            <div className={"avatar"}>
                <div className={"avatar-container"}>
                    <img src={avatar} alt="" className={"photo"} onLoad={onLoadImgHandler} hidden={isLoading}/>
                    <Skeleton className={"skeleton"} variant="rectangular" width={"70%"} hidden={!isLoading} height={"70%"}/>
                </div>
            </div>
            <ul className={"nav-items"}>
                <li className={"nav-item"}>
                    <NavLink to={"/"} className={({isActive}) => isActive ? "active-link" : ""}>
                        {t("sidebar.home")}
                    </NavLink>
                </li>
                <li className={"nav-item"}>
                    <NavLink to={"/about"} className={({isActive}) => isActive ? "active-link" : ""}>
                        {t("sidebar.about")}
                    </NavLink>
                </li>
                <li className={"nav-item"}>
                    <NavLink to={"/resume"} className={({isActive}) => isActive ? "active-link" : ""}>
                        {t("sidebar.resume")}
                    </NavLink>
                </li>
                <li className={"nav-item"}>
                    <NavLink to={"/portfolios"} className={({isActive}) => isActive ? "active-link" : ""}>
                        {t("sidebar.portfolio")}
                    </NavLink>
                </li>
                {/*<li className={"nav-item"}>*/}
                {/*    <NavLink to={"/blogs"} className={({isActive}) => isActive ? "active-link" : ""}>*/}
                {/*        {t("sidebar.blog")}*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                <li className={"nav-item"}>
                    <NavLink to={"/contacts"} className={({isActive}) => isActive ? "active-link" : ""}>
                        {t("sidebar.contacts")}
                    </NavLink>
                </li>
            </ul>
            <footer className={"footer"}>
                <p> ?? 2022 my portfolio</p>
            </footer>
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


  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar-container {
      width: 225px;
      height: 225px;
      display: flex;
      justify-content: center;
      align-items: center;

      .photo {
        aspect-ratio: 225/225;
        width: 70%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
      }

      .skeleton {
        background-color: var(--skeleton-color);
        aspect-ratio: 225/225;
        width: 70%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
      }
    }

  }

  .nav-items {
    width: 100%;
    text-align: center;

    .active-link {
      background-color: var(--primary-color);
    }

    padding: 0;

    li {
      display: block;

      a {
        display: block;
        padding: .45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;

        //&:hover {
        //  cursor: pointer;
        //  color: var(--primary-color);
        //}

        &::before {
          content: "";
          width: 0;
          height: 0;
          color: red;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: var(--font-light-color);
          transition: all .4s ease-in-out;
          transform-origin: right;
          z-index: 0;
          opacity: 0.21;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;

    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`

export default Navigation;