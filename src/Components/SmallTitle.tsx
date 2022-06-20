import React, {FC, ReactNode} from "react";
import styled from "styled-components";

type SmallTitlePT = {
    icon?: ReactNode | string
    title: string
}

const SmallTitle: FC<SmallTitlePT> = ({icon, title}) => {
    return (
        <SmallTitleStyled>
            <div className={"icon"}>{icon}</div>
            <h4>{title}</h4>
        </SmallTitleStyled>
    );
};

const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--font-light-color);
  }

  h4 {
    margin-bottom: 0;
    color: var(--white-color);
    font-weight: 700;
    font-size: 1.43rem;
  }

`

export default SmallTitle;