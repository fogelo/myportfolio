import React from "react";
import blogs from "../data/blogs";
import BlogCard from "../Components/BlogCard";
import styled from "styled-components";
import Title from "../Components/Title";

const BlogsPage = () => {
    return (
                <BlogsPageStyled>
                    <Title title={"Blogs"} span={"blogs"}/>
                    {
                        blogs.map(b => <BlogCard {...b}/>)
                    }
                </BlogsPageStyled>

    );
};

const BlogsPageStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media(max-width: 991px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
  }
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

`

export default BlogsPage;