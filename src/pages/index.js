import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import sanskrit from "../images/cordelia--sanskrit.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="visually-hidden">Cordelia McGee-Tubb</h1>
    <div className="tc">
      <img 
        className="tc w-80-ns w-100 pv3"
        src={sanskrit}
        alt={`
          Illustration: A guy (wearing a 'sudo' shirt) asks, 
          'Oh, you're a software developer? What's your favorite 
          language?' Cordelia (wearing a polka dot shirt) replies, 
          'Sanskrit.'"`}
      />
      <p>
        Cordelia is a cartoonist, web developer, &{' '}
        digital accessibility specialist based in San Francisco.
      </p>
    </div>
  </Layout>
)

export default IndexPage;
