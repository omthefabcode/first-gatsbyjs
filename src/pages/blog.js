import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const BlogPage = (props) => {

    const allPages = props.data.allMdx.nodes.map((val, index) => {
        return (
            <article key={val.id}>
                <h2>{val.frontmatter.title}</h2>
                <p>Posted: {val.frontmatter.date}</p>
                <MDXRenderer>
                    {val.body}
                </MDXRenderer>
            </article>
        );
    });

    return(
        <Layout pageTitle="Blog Page">
            {allPages}
        </Layout>
    );
}

export const query = graphql`
{
    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
        nodes {
            frontmatter {
                date(formatString: "DD, MM, YYYY")
                title
            }
            body
            id
        }
    }
}
  
`;

export default BlogPage;