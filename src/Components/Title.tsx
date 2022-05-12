import React, {FC} from "react";
import styled from "styled-components";

type TypePT = {
    title: string
    span: string
}

const Title: FC<TypePT> = ({title, span}) => {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    );
};


const TitleStyled = styled.div`
  position: relative;

  h2 {
    color: var(--white-color);
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .8rem;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.33rem;
      width: 7.4rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.33rem;
      width: 3.4rem;
      background-color: var(--primary-color);
      border-radius: 15px;
    }

    span {
      font-weight: 900;
      color: rgba(25, 29, 43, .44);
      font-size: 4.5rem;
      position: absolute;
      top: 40%;
      left: 0;
    }
  }
`
export default Title;

