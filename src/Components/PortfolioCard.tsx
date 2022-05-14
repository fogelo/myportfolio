import React, {FC} from "react";
import styled from "styled-components";
import img3 from "../img/portImages/maya-3.jpg";

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
    return (
        <PortfolioCardStyled>
            <div className={"image"}>
                <img src={image} alt=""/>
            </div>
            <h4 className={"title"}>{title}</h4>
            <p className={"text"}>{text}</p>
        </PortfolioCardStyled>
    );
};

const PortfolioCardStyled = styled.div`
  .image {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .title {
    font-size: 1.43rem;
    line-height: 2.14rem;
    color: var(--white-color)
  }

  .text {
    font-size: 1rem;
  }
`

export default PortfolioCard;