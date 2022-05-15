import React from "react";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import PortfolioCard from "../Components/PortfolioCard";
import styled from "styled-components";

const PortfoliosPage = () => {
    return (
        <PortfoliosPageStyled>
            <Title title={"PORTFOLIOS"} span={"PORTFOLIOS"}/>
            <div className={"portfolio-cards"}>
                {portfolios.map(p => <PortfolioCard id={p.id}
                                                    category={p.category}
                                                    image={p.image}
                                                    link1={p.link1}
                                                    link2={p.link2}
                                                    title={p.title}
                                                    text={p.text}
                />)}
            </div>
        </PortfoliosPageStyled>
    );
};

const PortfoliosPageStyled = styled.div`
  .portfolio-cards {
    padding: 4rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    grid-column-gap: 1.5rem;
    grid-row-gap: 3rem;
  }
`

export default PortfoliosPage;