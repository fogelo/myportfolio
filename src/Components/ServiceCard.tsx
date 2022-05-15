import React, {FC} from "react";
import styled from "styled-components";

type ServiceCardPT = {
    title: string
    image: string
    paragraph: string
}

const ServiceCard: FC<ServiceCardPT> = ({title, image, paragraph}) => {
    return (
        <ServiceCardStyled>
            <div className={"img"}>
                <img src={image} alt=""/>
            </div>
            <h4>{title}</h4>
            <p>{paragraph}</p>
        </ServiceCardStyled>
    );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-color-2);
  padding: 1.2rem;
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  position: relative;
  transition: all .4s ease-in-out;
  
  &:hover {
    transform: translateY(.5rem);
  }

  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: 0;
    height: 8px;
    width: 0;
    background-color: var(--primary-color);
    transition: all .4s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  h4 {
    color: var(--white-color);
    font-size: 1.6rem;
    padding: 1rem 0;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 50px;
      background-color: var(--border-color);
    }
  }

  p {
    padding: 0.8rem 0;
    font-size: 1.1rem;

  }
`


export default ServiceCard;