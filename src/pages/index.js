import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>This text is comming from Home Page.</p>
            <StaticImage
        alt="Clifford"
        src="../images/first.jpg"
      />
        </Layout>
    );
}

export default IndexPage;