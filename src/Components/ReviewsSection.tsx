import React from "react";
import styled from "styled-components";
import Title from "./Title";
import {InnerLayout} from "../styles/Layouts";
import ReviewCard from "./ReviewCard";

const ReviewsSection = () => {
    return (
        <ReviewsSectionStyled>
            <Title title={"Reviews"} span={"reviews"}/>
            <InnerLayout>
                <div className={"reviews"}>
                    <ReviewCard
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore nostrum, praesentium sunt tempore velit"}/>
                    <ReviewCard
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore nostrum, praesentium sunt tempore velit. Lorem ipsum dolor sit amet."}/>
                </div>
            </InnerLayout>
        </ReviewsSectionStyled>
    );
};

const ReviewsSectionStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default ReviewsSection;