import React, {FC, useState} from "react";
import styled from "styled-components";
import {Skeleton} from "@mui/material";

type BlogCardPT = {
    id: number
    title: string
    date: string
    month: string
    image: string
}


const BlogCard: FC<BlogCardPT> = ({id, title, date, month, image}) => {
    const [isLoading, setIsLoading] = useState(true)
    const onLoadImgHandler = () => {
        // setIsLoading(false)
    }

    return (
        <BlogCardStyled>
            <div className={"image"}>
                <img src={image} alt="" onLoad={onLoadImgHandler} hidden/>
                {isLoading
                    ? <Skeleton className={"skeleton"} variant="rectangular" width={"100%"} height={"100%"}/>
                    : <img src={image} alt="" onLoad={onLoadImgHandler}/>
                }
            </div>
            {
                isLoading
                    ? <Skeleton className={`skeleton title`} width={"70%"}/>
                    : <p className={"title"}>{title}</p>
            }
            <div className="date">
                <p className={"day"}>{date}</p>
                <p className={"month"}>{month}</p>
            </div>
        </BlogCardStyled>
    );
};

const BlogCardStyled = styled.div`
  padding: 1rem;
  background-color: var(--background-dark-color-2);
  position: relative;

  .skeleton {
    background-color: var(--skeleton-color);
  }

  .image {
    aspect-ratio: 285/190;
    position: relative;
    margin-bottom: 15px;
    box-shadow: 0 0 10px 5px rgb(88, 88, 88);

    img {
      width: 100%;
    }
  }

  .title {
    color: var(--white-color);
    padding-top: 1rem;
  }

  .date {
    position: absolute;
    top: 40px;
    left: 40px;
    background-color: var(--primary-color);
    opacity: .8;
    padding: 5px;
    min-height: 80px;
    min-width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .day {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
      color: var(--white-color);
    }

    .month {
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1;
      color: var(--white-color);
    }
  }
`

export default BlogCard;