import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/layout";

const BlogPage = (props) => {
    const allPages = props.data.allMdx.nodes.map((val) => {
        return (
            <article key={val.id}>
                <h2>
                    <Link to={`/blog/${val.slug}`}>
                        {val.frontmatter.title}
                    </Link>
                </h2>
                <p>Posted: {val.frontmatter.date}</p>
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
query {
    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
        nodes {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
            id
            slug
        }
    }
}
  
`;

export default BlogPage;