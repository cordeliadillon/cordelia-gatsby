import React, {useState, useEffect} from "react";
import cn from 'classnames';
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import _JSXStyle from 'styled-jsx/style';

let tags = [
  "Accessibility",
  "Code",
  "Comics",
  "Photography",
];

const ProjectCard = ({data}) => {
  return (
    <>
     <article className={cn(
         'project-card', {
         'project-card--featured': data.frontmatter.featured
       })}
     >
        <div>
          <h2 className="f3">
            { data.frontmatter.link ? 
              <a href={data.frontmatter.link}>
                {data.frontmatter.title}
              </a> : data.frontmatter.title 
             }
          </h2>
          <div dangerouslySetInnerHTML={{__html: data.html}}/>
          <small className="project-card-footer">
            <span>Status: {data.frontmatter.status}</span>
            <span className="b" aria-hidden="true"> &middot; </span>
            <span>Tags: {data.frontmatter.tags.join(', ')}</span>
          </small>
        </div>
        <div>
          { data.frontmatter.image ? 
            <Img 
              className="rounded"
              alt={data.frontmatter.alt ? data.frontmatter.alt : ''}
              fluid={{
              ...data.frontmatter.image.childImageSharp.fluid,
              aspectRatio: 3/2}} />
            : null
          }
        </div>
      </article>
      <style global jsx>{`
        .project-card {
          padding: 1em;
          display: grid;
          align-items: start;
        }

        .project-card--featured {
          grid-column: 1 / span 2;
          grid-template-columns: 3fr 2fr;
          grid-gap: 2rem 2rem;
        }

        .project-card > div:nth-child(2) {
          grid-row: 1;
          grid-column: 1;
          align-self: start;
        }

        .project-card p a {
          font-weight: bold;
        }

        @media (max-width: 850px) {
          .project-card--featured {
            grid-column: 1;
            grid-template-columns: 1fr;
            grid-gap: 0;
          }
        }
      `}
      </style>
    </>
  );
}


const Projects = ({data}) => {
  const [filters, setFilters] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const clearFilters = () => {
    setShowAll(true);
    setFilters([]);
  }

  const toggleFilter = (tag) => {
    if (filters.includes(tag)) {
      const newFilters = filters.filter((item) => item !== tag);
      setShowAll(newFilters.length === 0);
      setFilters(newFilters);
    } else {
      setFilters(filters.concat(tag));
      setShowAll(false);
    }
  }

  return  (
    <Layout>
      <SEO title="Projects" />

      <h1 className="ma0 pa0 f1">Projects</h1>
      <div className="project-header">
        <span className="dib mr2">Filter:</span>
        <ul className="dib project-filters f7">
          <li className="dib pv1 ml2">
            <button 
              className="br2 bn pa2"
              aria-pressed={showAll} 
              aria-disabled={showAll}
              onClick={clearFilters}
            >
              All Projects
            </button>
          </li>
          { tags.map((tag, i) => (
              <li className="dib pv1 ml2" key={i}>
                <button
                  className="br2 bn pa2"
                  aria-pressed={filters.includes(tag)}
                  onClick={() => toggleFilter(tag)}
                >
                  {tag}
                </button>
              </li>
          ))}
        </ul>
      </div>
      <div className="project-container">
      { data.allMarkdownRemark.edges.map((edge, i) => {
        if (!showAll) {
          let shouldShow = false;
          for (let i = 0; i < filters.length; i++) {
            if (edge.node.frontmatter.tags.includes(filters[i])) {
              shouldShow = true;
              break;
            }
          }
          if (!shouldShow) {
            return null;
          }
        }
        return (
          <ProjectCard 
            key={i}
            data={edge.node}
          />
        );

      })}
      </div>
      <style jsx>{`
        .project-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2rem 2rem;
          align-items: start;
        }

        .project-filters {
          margin: 0;
          padding: 5px 0;
        }

        .project-filters li {
          list-style-type: none;
          color: black;
          border-bottom: 5px solid transparent;
        }

        .project-filters li:focus-within {
          border-bottom: 5px solid black;
        }

        .project-filters button {
          background-color: white;
          color: black;
          cursor: pointer;
        }

        .project-filters button:focus {
          outline: none;
        }

        .project-filters button[aria-pressed="true"] {
          background-color: black;
          color: white;
        }

        @media (max-width: 850px) {
          .project-container {
            grid-template-columns: 1fr;
          }
        }
      `}
      </style>
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/projects/"},
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
            image {
              childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            link
            featured
            tags
            status
          }
          html
        }
      }
    }
  }
`;