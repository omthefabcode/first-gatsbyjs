import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const BlogPage = (props) => {

    const allPages = props.data.allFile.nodes.map((val, index) => {
        return (<li key={index}>{val.name}</li>);
    });

    return(
        <Layout pageTitle="Blog Page">
            <ul>
                {allPages}  
            </ul>
        </Layout>
    );
}

export const query = graphql`
{
    allFile {
        nodes {
            name
        }
    }
}
  
`;

export default BlogPage;