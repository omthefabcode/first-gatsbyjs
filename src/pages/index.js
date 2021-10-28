import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
    
const IndexPage = (props) => {
    return (
        <Layout pageTitle="Home Page">
            <p>{props.data.site.siteMetadata.description}</p>
            <StaticImage
                alt="Clifford"
                src="../images/first.jpg"
            />
        </Layout>
    );
}

export const query = graphql`
{
    site {
        siteMetadata {
            description
        }
    }
}
`;

export default IndexPage;