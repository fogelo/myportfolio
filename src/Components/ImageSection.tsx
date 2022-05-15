import React from "react";
import styled from "styled-components";
import aboutPhoto from "../img/about-photo.jpeg"
import PrimaryButton from "./PrimaryButton";
import AboutInfoCard from "./AboutInfoCard";

const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className={"left-content"}>
                <img src={aboutPhoto} alt="about"/>
            </div>
            <div className={"right-content"}>
                <h4>I am <span>Orlov Anton</span></h4>
                <p className={"paragraph"}>
                    I am a frontend web developer. I can provide clean code and pixel perfect design. I also make
                    website more & more interactive with web animations.
                </p>
                <div className={"about-info"}>
                    <AboutInfoCard title={"Full Name"} info={"Orlov Anton"}/>
                    <AboutInfoCard title={"Age"} info={"31"}/>
                    <AboutInfoCard title={"Nationality"} info={"Russian"}/>
                    <AboutInfoCard title={"Languages"} info={"Orlov Anton"}/>
                    <AboutInfoCard title={"Location"} info={"Russian, English"}/>
                    <AboutInfoCard title={"Service"} info={"Freelance"}/>
                </div>
                <div className={"download-cv-btn"}>
                    <PrimaryButton title={"Download CV"}/>
                </div>
            </div>
        </ImageSectionStyled>
    );
};


const ImageSectionStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  align-items: center;
  margin-top: 5rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .left-content {
    width: 100%;
    text-align: center;
    @media (max-width: 991px) {
      margin-bottom: 2rem;
    }

    img {
      width: 100%;
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