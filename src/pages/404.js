import React from "react"
import whoops from "../images/cordelia--whoops.jpg";
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="tc">
      <img className="rounded w-80" src={whoops} alt="Illustrated Cordelia shrugging and frowning slightly"/>
      <h1 className="ma0 pa0 f2">404: Not Found</h1>
      <p>The page you're looking for doesn't seem to exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
