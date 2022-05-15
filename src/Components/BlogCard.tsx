import React, {FC} from "react";
import styled from "styled-components";

type BlogCardPT = {
    id: number
    title: string
    date: string
    month: string
    image: string
}

const BlogCard: FC<BlogCardPT> = ({id, title, date, month, image}) => {
    return (
        <BlogCardStyled>
            <div className={"image"}>
                <img src={image} alt=""/>
            </div>
            <p className={"title"}>{title}</p>
            <div className="date">
                <p className={"day"}>{date}</p>
                <p className={month}>{month}</p>
            </div>
        </BlogCardStyled>
    );
};

const BlogCardStyled = styled.div`
  padding: 1rem;
  background-color: var(--background-dark-color-2);
  position: relative;

  .image {
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
      transition: all .4s ease-in-out;

      &:hover {
        transform: scale(1.07);
      }
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
    color: var(--white-color);
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
    }

    .month {
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1;
    }
  }
`

export default BlogCard;