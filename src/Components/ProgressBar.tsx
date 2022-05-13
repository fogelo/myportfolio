import React, {FC} from "react";
import styled from "styled-components";

type ProgressBarPT = {
    tech: string
    progress: string

}

const ProgressBar: FC<ProgressBarPT> = ({tech, progress}) => {
    return (
        <ProgressBarStyled progress={progress}>
            <h6>{tech}</h6>
            <div className={"progress-inner"}>
                <div className={"percent"}>{progress}</div>
                <div className={"progress-container"}/>
            </div>
        </ProgressBarStyled>
    );
};

const ProgressBarStyled = styled.div<{ progress: string }>`

  h6 {
    color: var(--white-color);
    padding-bottom: 0.6rem;
    font-size: 1rem;
  }

  .progress-inner {
    display: flex;
    align-items: center;

    .percent {
      font-size: 0.85rem;
      font-weight: 200;
    }

    .progress-container {
      margin-left: 20px;
      height: 6px;
      flex: 1;
      background-color: var(--background-light-color-2);
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
        width: ${props => props.progress};
        background-color: var(--primary-color);
      }
    }
  }
`

export default ProgressBar;