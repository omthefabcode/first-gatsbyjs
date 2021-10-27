import * as React from "react";
import Layout from "./components/layout";
// import { StaticImage } from "gatsby-plugin-image";

import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>This text is comming from Home Page.</p>
            <StaticImage 
                alt="Clifford"
                src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg"
            />
        </Layout>
    );
}

export default IndexPage;