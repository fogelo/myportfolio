import React from "react";
import Particles from "../Components/Particles";
import styled from "styled-components";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Icon32LogoVk} from "@vkontakte/icons";
import CodewarsIcon from "../Components/icons/CodewarsIcon";

const HomePage = () => {
    return (
        <HomePageStyled>
            <div className={"particles"}>
                <Particles/>
            </div>
            <div className={"typography"}>
                <h1>Hi I'm <span>Orlov Anton</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur debitis ex, fuga
                    mollitia numquam quas qui quis quod voluptatibus!
                </p>
                <div className={"icons"}>
                    <a href={"https://t.me/ant_or"}
                       className="icon i-telegram">
                        <TelegramIcon/>
                    </a>
                    <a href={"https://github.com/fogelo"}
                       className="icon i-github">
                        <GitHubIcon/>
                    </a>
                    <a href={"https://vk.com/id715020392"}
                       className="icon i-vk">
                        <Icon32LogoVk/>
                    </a>
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

      .i-codewars:hover {
        border: 2px solid #A33F29;
          svg {
            color: #A33F29;
          }
        }
    }
  }


`

export default HomePage;