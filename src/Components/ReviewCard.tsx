import React, {FC} from "react";
import styled from "styled-components";

type ReviewsCardPT = {
    text: string
}

const ReviewCard: FC<ReviewsCardPT> = ({text}) => {
    return (
        <ReviewsCardStyled>
            <p>{text}</p>
        </ReviewsCardStyled>
    );
};

const ReviewsCardStyled = styled.div`
  background-color: var(--background-dark-color-2);
  padding: 30px;
  border-left: 5px solid var(--border-color);
  position: relative;
  z-index: 1;
  width: 50%;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

export default ReviewCard;