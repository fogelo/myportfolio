import React, {FC} from "react";
import styled from "styled-components";

type PrimaryButtonSubmitPT = {
    title: string
}

const PrimaryButtonSubmit: FC<PrimaryButtonSubmitPT> = ({title}) => {
    return (
        <PrimaryButtonSubmitStyled type={"submit"}>
            {title}
        </PrimaryButtonSubmitStyled>
    );
};

const PrimaryButtonSubmitStyled = styled.button`
  background-color: var(--primary-color);
  padding: .8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: .3rem;
    background-color: var(--background-light-color);
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    color: white;
  }

  &:hover::after {
    width: 100%;
  }
`
export default PrimaryButtonSubmit;