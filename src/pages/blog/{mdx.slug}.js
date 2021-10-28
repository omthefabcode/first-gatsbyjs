import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/layout";

const BlogPost = (props) => {
    console.log(props.data);
    return (
        <Layout pageTitle={props.data.mdx.frontmatter.title}>
            <p>{props.data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {props.data.mdx.body}
            </MDXRenderer>
        </Layout>
    );
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;