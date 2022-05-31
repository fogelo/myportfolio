import React, {useState} from "react";
import styled from "styled-components";
import aboutPhoto from "../img/me.jpeg"
import PrimaryButton from "./PrimaryButton";
import {Trans} from "react-i18next";
import Tilt from "react-parallax-tilt";
import {Skeleton} from "@mui/material";

const ImageSection = () => {
    const [isLoading, setIsLoading] = useState(true)
    const onLoadImgHandler = () => {
        setIsLoading(false)
    }
    return (
        <ImageSectionStyled>
            <div className={"left-content"}>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <img src={aboutPhoto} alt="about" onLoad={onLoadImgHandler} hidden={isLoading}/>
                    <Skeleton className={"skeleton"}
                              variant="rectangular"
                              width={"80%"}
                              height={"80%"}
                              hidden={!isLoading}/>
                </Tilt>

            </div>
            <div className={"right-content"}>
                <Trans i18nKey={"about_page.image_section.subtitle"}>
                    <h4>I am <span>Orlov Anton</span></h4>
                </Trans>
                <Trans i18nKey={"about_page.image_section.paragraph"}>
                    <p className={"paragraph"}>
                        I'm a Frontend developer with of experience in Javascript, Typescript, React, Redux, REST
                        API, Unit Tests (Jest), Saas, Styled Components, Material UI, i18next etc.
                    </p>
                </Trans>
                <div className={"download-cv-btn"}>
                    <PrimaryButton title={"Download CV"} download href={"assets/cv/Orlov Anton.pdf"}/>
                </div>
            </div>
        </ImageSectionStyled>
    );
};


const ImageSectionStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 4rem 0;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .left-content {
    width: 100%;
    text-align: center;

    .skeleton {
      aspect-ratio: 1232/1280;
      background-color: var(--skeleton-color);
      margin: 0 auto;
    }

    img {
      width: 80%;
      position: relative;
      z-index: 1;
      @media (max-width: 991px) {
        max-width: 500px;
      }
    }
  }

  .right-content {

    h4 {
      font-size: 2rem;
      color: var(--white-color);

      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
    }

    .paragraph {
      padding: 1rem 0;
      font-weight: 300;
    }

    .about-info {
      max-width: 500px;
    }

    .download-cv-btn {
      margin-top: 30px;
    }

  }

`
export default ImageSection;