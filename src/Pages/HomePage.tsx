import React, {useEffect} from "react";
import Particles from "../Components/Particles";
import styled from "styled-components";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodewarsIcon from "../Components/icons/CodewarsIcon";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Trans, useTranslation} from "react-i18next";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icons.min.css"
import GlobeIcon from "../Components/icons/GlobeIcon";
import i18next from "i18next";
import cookies from "js-cookie"
import ReactTypingEffect from "react-typing-effect";

const HomePage = () => {
    const {t} = useTranslation()
    const languages = [
        {
            id: 1,
            code: "en",
            name: "English",
            country_code: "gb"
        },
        {
            id: 2,
            code: "ru",
            name: "Русский",
            country_code: "ru"
        }
    ]
    const currentLanguageCode = cookies.get("i18next") || "en"
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)
    useEffect(() => {
        document.title = t("app_title")
    }, [currentLanguage])
    return (
        <HomePageStyled>
            <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <GlobeIcon/>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                    {languages.map(l => (
                        <li key={l.id}>
                            <button className="dropdown-item"
                                    onClick={() => i18next.changeLanguage(l.code)}
                                    style={{opacity: l.code === currentLanguageCode ? 0.5 : 1}}
                                    disabled={l.code === currentLanguageCode}
                            >
                                <span className={`flag-icon flag-icon-${l.country_code} mx-2`}/>
                                {l.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={"particles"}>
                <Particles/>
            </div>
            <div className={"typography"}>
                <Trans i18nKey={"home_page.title"}>
                    <h1>Hi I'm <br/><span>Orlov Anton</span></h1>
                </Trans>
                <ReactTypingEffect className={"subtitle"} speed={100} typingDelay={1500}
                                   text={[t("home_page.subtitle")]}
                />
                <div className={"icons"}>
                    <a href={"https://t.me/ant_or"}
                       className="icon i-telegram">
                        <TelegramIcon/>
                    </a>
                    <a href={"https://github.com/fogelo"}
                       className="icon i-github">
                        <GitHubIcon/>
                    </a>
                    <a href={"https://www.linkedin.com/in/anton-orlov-375953229/"}
                       className="icon i-linkedIn">
                        <LinkedInIcon sx={{fontSize: "27px"}}/>
                    </a>
                    {/*<a href={"https://vk.com/id715020392"}*/}
                    {/*   className="icon i-vk">*/}
                    {/*    <Icon32LogoVk/>*/}
                    {/*</a>*/}
                    <a href={"https://www.codewars.com/users/orlovAnton"}
                       className="icon i-codewars">
                        <CodewarsIcon/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .btn {
    &:focus {
      box-shadow: none;
    }
  }

  .dropdown {
    .dropdown-menu {
      background-color: transparent;
      border-color: transparent;

      .dropdown-item {
        color: var(--font-light-color);
        background: none;

        &:hover {
          color: var(--primary-color);
        }

      }
    }
  }

  h1 {
    font-size: 3.3rem;
    line-height: 4.5rem;

    span {
      color: var(--primary-color);
    }
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    width: 80%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .subtitle {
      font-size: 1.25rem;
      line-height: 2rem;
      color: var(--font-light-color);
    }

    .icons {
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      margin-top: 50px;

      .icon {
        border: 2px solid var(--border-color);
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: all .3s ease-in-out;
        color: var(--font-light-color);


        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
      }

      .i-github:hover {
        border: 2px solid #5F4687;
        color: #5F4687;
      }
      //.i-linkedIn:hover {
      //  border: 2px solid rgb(10, 102, 194);
      //  color: rgb(10, 102, 194);
      //}

      .i-codewars {
        svg {
          color: var(--font-light-color);
          fill: var(--font-light-color);
        }
      }

      .i-codewars:hover {
        border: 2px solid #A33F29;

        svg {
          color: #A33F29;
          fill: #A33F29;
        }
      }
    }
  }


`

export default HomePage;