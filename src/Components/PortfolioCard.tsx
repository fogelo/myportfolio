import React, {FC, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import img3 from "../img/portImages/maya-3.jpg";
import {Skeleton} from "@mui/material";
import {port} from "../img/portImages/portfolio-data";

type PortfolioCardPT = {
    id: number
    category: string
    image: string
    link1: string
    link2: string
    title: string
    text: string
}

const PortfolioCard: FC<PortfolioCardPT> = (
    {
        id, category, image,
        link1, link2, title, text
    }) => {

    const [isLoading, setIsLoading] = useState(true)
    const onLoadImgHandler = () => {
        setIsLoading(false)
    }


    return (
        <PortfolioCardStyled>
            <div className={"image"}>
                <img src={image} alt="" onLoad={onLoadImgHandler} hidden/>
                {isLoading
                    ? <Skeleton className={"skeleton"} variant="rectangular" width={"100%"} height={"100%"}/>
                    : <img src={image} alt=""/>
                }
                <div className={"front-card"}>
                    <div className={"links"}>
                        <a className={"link"} href={link1}>view demo</a>
                        <a className={"link"} href={link2}>view code</a>
                    </div>
                </div>
            </div>
            {
                isLoading
                    ? <Skeleton className={`skeleton title`} width={"70%"}/>
                    : <h4 className={"title"}>{title}</h4>
            }
            {
                isLoading
                    ? <Skeleton className={`skeleton text`} width={"85%"}/>
                    : <div className={"text"}>{text}</div>
            }


        </PortfolioCardStyled>

    );
};

const PortfolioCardStyled = styled.div`
  .skeleton {
    background-color: var(--skeleton-color);
  }

  .image {
    aspect-ratio: 1280/720;
    position: relative;
    margin-bottom: 15px;
    box-shadow: 0 0 10px 5px rgb(88, 88, 88);

    img {
      width: 100%;
    }


    .front-card {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1800;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      opacity: 0;
      transition: all 0.25s ease-in-out;

      &:hover {
        opacity: 1;
      }

      .links {
        display: flex;
        width: 100%;
        justify-content: space-evenly;

        .link {
          border: 2px solid var(--primary-color);
          color: white;
          font-size: 1.5rem;
          height: 50px;
          width: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.25s ease-in-out;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .title {
    font-size: 1.43rem;
    line-height: 2.14rem;
    color: var(--white-color);
  }

  .text {
    font-size: 1rem;
    color: var(--font-light-color);
  }
`

export default PortfolioCard;