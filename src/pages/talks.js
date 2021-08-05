import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Grid, Column } from "../components/grid";
import Layout from "../components/layout";
import Section from "../components/section";
import SEO from "../components/seo";
import publicSpeaking from "../images/cordelia--public-speaking.jpg";
import allTalkData from "../content/talks.yaml";

const Talk = ({talk}) => (
  <div>
    <h3 className="mb0 f4" id={talk.id}>{talk.title}</h3>
    <p className="mv0 f4">
      {talk.eventDate} at {' '}
      {talk.eventHref ? 
        (<a href={talk.eventHref}>{talk.eventName}</a>):
        (<span>{talk.eventName}</span>)
      }
    </p>
    <p className="mv0">{talk.blurb}</p>
    { talk.links ?
      (talk.links.map((link, i) => (
        <span key={i}>
          {i > 0 ?
            <span aria-hidden="true" className="b ph2">
              &middot;
            </span>
            : null
          }
          <a 
            href={link.href} 
            key={i} 
            aria-describedby={talk.id}>
            {link.name}
          </a>
        </span>
      ))) : null
    }
    <div>Tags: {talk.tags.join(', ')}</div>
  </div>
);

const FeaturedPhoto = ({data}) => {
  if (data.frontmatter.photoSrc) {
    const photo = (
      <Img 
        alt={data.frontmatter.photoAlt}
        className="rounded"
        fluid={{
        ...data.frontmatter.photoSrc.childImageSharp.fluid,
        aspectRatio: 3/2}}
      />
    );
    if (data.frontmatter.photoCredit) {
      return (
        <figure className="ma0 pa0">
          {photo}
          <figcaption className="f6 i pv2">
            {data.frontmatter.photoCaption} (Photo credit:{' '}
            <a href={data.frontmatter.photoCreditLink}>
              {data.frontmatter.photoCredit}
            </a>)
          </figcaption>
        </figure>
      );
    } else {
      return (
        <figure  className="ma0 pa0">
          {photo}
          <figcaption className="f6 i pv2">
            {data.frontmatter.photoCaption}
          </figcaption>
        </figure>
      );
    }
  }
  return null;
};

const FeaturedTalk = ({data}) => (
  <article className="mb4">
    <Grid columns="2fr 3fr">
      <Column>
        <h3 className="mt0 f4">{data.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{__html: data.html}}/>
      </Column>
      <Column>
        <FeaturedPhoto data={data}/>
      </Column>
    </Grid>
  </article>
);

const Talks = ({data}) => {
  return (
    <Layout>
      <SEO title="Talks" />
      <h1 className="ma0 pa0 f1">
        Talks
      </h1>
      <Grid columns="3fr 2fr">
        <Column>
          <p>
            As an introvert who has grappled with social anxiety
            since a young age, I never would have thought I'd enjoy
            public speaking as much as I do. But when I'm passionate
            about something, I <em>need</em> to share it. I'm passionate
            about accessibility, inclusive design, digital literacy, 
            and technology for older adults, and I don't think these
            topics are talked about enough in mainstream tech spheres.
            By speaking with larger audiences, I hope other people
            will become passionate about them, too.
          </p>
          <Section header="Upcoming">
            <p>
              Nothing on the agenda!
            </p>
          </Section>
        </Column>
        <Column>
          <img
            className="rounded illustration"
            src={publicSpeaking} 
            alt={`Illustrated Cordelia pointing enthusiastically 
              at the words 'Public Speaking' on a stand-up 
              projector screen`}/>
        </Column>
      </Grid>

      <Section header="Highlights">
        {data.allMarkdownRemark.edges.map((edge, i) => (
          <FeaturedTalk key={i} data={edge.node}/>
          ))}
      </Section>

      <Section header="Past Talks">
        <ul className="list pa0 ma0 cf">
          {allTalkData.pastTalks.map((talk, i) => (
            <li key={i}>
              <Talk talk={talk} />
            </li>
           ))}
        </ul>
      </Section>
    </Layout>
  );
}


export default Talks;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/featured-talks/"},
        frontmatter: {status: {ne: "Hidden"}}
      },
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            photoSrc {
              childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            photoAlt
            photoCaption
            photoCredit
            photoCreditLink
          }
          html
        }
      }
    }
  }
`;