import React from "react";
import styled from "styled-components";
import aboutPhoto from "../img/about-photo.jpeg"

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
                    <div className={"info-title"}>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className={"info"}>
                        <p>: Orlov Anton</p>
                        <p>: 31</p>
                        <p>: Russian</p>
                        <p>: Russian, English</p>
                        <p>: Moscow, Russian</p>
                        <p>: Freelance</p>
                    </div>
                </div>
            </div>
        </ImageSectionStyled>
    );
};


const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;

  .left-content {
    width: 100%;
    margin: 0 .8rem;

    img {
      width: 100%;
      position: relative;
      z-index: 1;

    }
  }

  .right-content {
    margin: 0 .8rem;

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
      display: flex;

      .info-title {
        padding-right: 3rem;

        p {
            font-weight: 600;
        }
      }

      .info-title, .info {
        p {
          padding: .3rem 0;
        }
      }

      .info {
        p {
          font-weight: 300;
        }
      }
    }


  }

`
export default ImageSection;