import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Section from "../components/section";
import {Grid, Column} from "../components/grid";
import SEO from "../components/seo";
import cartoonist from "../images/cordelia--cartoonist.jpg";
import techie from "../images/cordelia--techie.jpg";

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="ma0 pa0 f1">About</h1>
    <h2 className="f2">Hey there! I'm Cordelia!</h2>
    <p>
      I enjoy circumambulating cities, collecting food-shaped novelty hats,
      and trying to keep my houseplants happy. My pronouns are she, her, and hers.
    </p>
    <Grid>
      <Column>
        <img className="w-100" src={cartoonist} alt="Illustration: Cordelia scribbling away at her desk"/>
        <h2>I'm a cartoonist.</h2>
        <p>
          I hold an {' '}
          <a href="https://www.cca.edu/academics/graduate/comics">MFA in Comics</a>{' '}
          from California College of the Arts. These days, I mostly draw autobio webcomics
          and have dreams of someday publishing a longer comic memoir about anxiety, OCD,
          and depression. I also love to illustrate slides 
          for my <Link to="/talks">public speaking engagements</Link>.  I'm super excited about
          comics that are accessible to blind and low vision readers.
          If that's your jam, let's talk!
        </p>
      </Column>
      <Column>
        <img className="w-100" src={techie} alt="Illustration: Cordelia with hands draped across computer keyboard"/>
        <h2 className="f3">I'm a tech person.</h2>
        <p>
          I'm passionate about making technology a
          great experience for <em>everyone</em> and currently work as
          a Principal Accessibility Engineer at Salesforce. I also {' '}
          <a href="http://www.ctnbayarea.org">volunteer helping older adults</a>{' '}
          improve their computer skills, which recently inspired me to
          complete an <a href="https://gero.usc.edu/what-is-gerontology/">MA 
          in Gerontology</a> at USC. My professional 
          interests include web accessibility, inclusive design,
          and gerontechnology.
        </p>
      </Column>
    </Grid>

    <section className="center measure">
      <h2 className="f3 tc-ns">Contact me</h2>
      <p>
        You can email me at <strong>cordelia</strong> at{' '}
        <strong>cordeliadillon</strong> dot <strong>com</strong>{' '}
        or find me on one of the social media sites linked below.{' '}
        I would love to hear from you!
      </p>
      <p>
        <strong>Pandemic-times note:</strong>{' '}
        I'll be honest, I'm pretty overwhelmed these days.
        I may be a bit slow to respond, so if  you haven't heard back
        from me in a while, please do reach out again.
        It's nothing personal, just 2021.{' '}
        <span aria-label="grimace emoji">😬</span>
      </p>
    </section>
  </Layout>
)

export default About;
