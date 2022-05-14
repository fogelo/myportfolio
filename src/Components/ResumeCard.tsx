import React, {FC} from "react";
import styled from "styled-components";

type ResumeCardPT = {
    years: string
    title: string
    subTitle: string
    description: string
}

const ResumeCard: FC<ResumeCardPT> = ({years, title, subTitle, description}) => {
    return (
        <ResumeCardStyled>
            <div className={"years"}>
                {years}
            </div>
            <div className="info">
                <h5 className={"title"}>{title}</h5>
                <h6 className={"sub-title"}>{subTitle}</h6>
                <p className={"description"}>{description}</p>
            </div>
        </ResumeCardStyled>
    );
};

const ResumeCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  &:not(:first-child) {
    padding-top: 30px;
  }


  .years {
    padding-left: 20px;
    position: relative;

    &::before {
      content: "";
      height: 12px;
      width: 12px;
      border: 2px solid var(--border-color);
      position: absolute;
      top: 6px;
      left: -9px;
      border-radius: 50%;
      background-color: var(----background-dark-color);
    }
  }

  .info {
    position: relative;
    padding-left: 50px;
    &::before {
      position: absolute;
      top: 17px;
      left: 0;
      z-index: 10;
      content: "";
      width: 35px;
      height: 2px;
      background-color: var(--border-color)
    }

    .title {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 1.43rem;
      line-height: 2.14rem;
    }

    .sub-title {
      color: var(--white-color);
      font-weight: 300;
      font-size: 1.14rem;
      line-height: 1.857rem;
      margin-bottom: 0.5rem;
    }

    .description {
      font-weight: 200;
    }
  }
`

export default ResumeCard;