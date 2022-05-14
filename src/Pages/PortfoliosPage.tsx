import React from "react";
import {InnerLayout, MainLayout} from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import PortfolioCard from "../Components/PortfolioCard";
import styled from "styled-components";

const PortfoliosPage = () => {
    return (
        <MainLayout>
            <Title title={"PORTFOLIOS"} span={"PORTFOLIOS"}/>
            <InnerLayout>
                <PortfoliosPageStyled>
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
            </InnerLayout>
        </MainLayout>
    );
};

const PortfoliosPageStyled = styled.div`
  .portfolio-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 3rem;
  }
`

export default PortfoliosPage;