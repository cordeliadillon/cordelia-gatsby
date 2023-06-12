import React from "react";
import Layout from "../components/layout";
import { Grid, Column } from "../components/grid";
import SEO from "../components/seo";
import allWritingData from "../content/writing.yaml";
import press from "../images/cordelia--press.jpg";

const Piece = ({piece}) => (
  <article>
    <h2 className="mb0">
      <a href={piece.url}>
        {piece.title}
      </a>
    </h2>
    <p className="f4 mv1">
      {piece.date}
      {piece.publication ?
        `, ${piece.publication}` : 
        null
      }
    </p>
    <p className="ma0">
      {piece.description}
    </p>
  </article>
);

const Writing = () => (
  <Layout>
    <SEO title="Writing" />
    <h1 className="ma0 pa0 f2">
      Writing
    </h1>
    <Grid columns="3fr 2fr">
      <Column>
        <ul className="list pa0 ma0">
          {allWritingData.by.map((piece, i) => (
            <li key={i}>
              <Piece piece={piece}/>
            </li>
           ))}
        </ul>
      </Column>
      <Column>
        <figure className="ma0 pa0">
          <img
            src={press}
            className="w-100 rounded illustration"
            alt={`
              Illustration of little Cordelia typing on an iMac G3
              while wearing a school uniform and a fedora with a 'Press'
              badge tucked in its ribbon`
            }
          />
          <figcaption className="f6 i tc pv2">
            Blissfully typing away on deadline
            for my fourth grade newspaper
          </figcaption>
        </figure>
      </Column>
    </Grid>
  </Layout>
)

export default Writing;
