import React from "react";
import blogs from "../data/blogs";
import BlogCard from "../BlogCard";
import {InnerLayout, MainLayout} from "../styles/Layouts";
import styled from "styled-components";
import Title from "../Components/Title";

const BlogsPage = () => {
    return (
        <MainLayout>
            <Title title={"Blogs"} span={"blogs"}/>
            <InnerLayout>
                <BlogsPageStyled>
                    {
                        blogs.map(b => <BlogCard {...b}/>)
                    }
                </BlogsPageStyled>
            </InnerLayout>

        </MainLayout>
    );
};

const BlogsPageStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

`

export default BlogsPage;