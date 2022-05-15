import React, {FC} from "react";
import styled from "styled-components";

type AboutInfoCardPT = {
    title: string
    info: string
}

const AboutInfoCard: FC<AboutInfoCardPT> = ({title, info}) => {
    return (
        <AboutInfoCardStyled>
            <p>{title}</p>
            <p>:    {info}</p>
        </AboutInfoCardStyled>
    );
};

const AboutInfoCardStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export default AboutInfoCard;