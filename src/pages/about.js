import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import {Grid, Column} from "../components/grid";
import SEO from "../components/seo";
import cartoonist from "../images/cordelia--cartoonist.jpg";
import techie from "../images/cordelia--techie.jpg";

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="ma0 pa0 f2">About</h1>
    <p className="mb4">
      Hey there! I'm Cordelia McGee-Tubb (though my online handle is
      cordeliadillon in most places). I enjoy circumambulating cities,
      collecting food-shaped novelty hats, and trying to keep my
      houseplants happy. My pronouns are she, her, and hers.
    </p>
    <Grid>
    <Column>
        <img
          className="w-100 rounded"
          src={cartoonist}
          alt="Illustration: Cordelia scribbling away at her desk"
        />
        <h2>I'm a cartoonist.</h2>
        <p>
          I hold an {' '}
          <a href="https://www.cca.edu/academics/graduate/comics">
            MFA in Comics
          </a>{' '} from California College of the Arts.
          These days, I mostly draw autobio webcomics
          and have dreams of someday publishing a longer comic memoir
          about anxiety, obsessive-compulsive disorder, and depression. 
          I also love to illustrate slides for my <Link to="/talks">public speaking engagements</Link>.
          I'm super excited about comics for readers with print disabilities.
          If you're excited about that, too, let's talk!
        </p>
      </Column>
      <Column>
        <img
          className="w-100 rounded"
          src={techie}
          alt="Illustration: Cordelia with hands draped across computer keyboard"
        />
        <h2 className="f3">I'm a tech person.</h2>
        <p>
          I'm passionate about making technology accessible for <em>everyone</em>. I currently
          focus on building inclusive digital experiences at{' '}
          <a href="https://www.color.com">Color Health</a>'s Staff Design Technologist. I'm also a{' '}
          <a href="http://www.ctnbayarea.org">technology tutor for older adults</a>,{' '}
          which inspired me to complete an <a href="https://gero.usc.edu/what-is-gerontology/">MA 
          in Gerontology</a> at USC. My professional interests include web accessibility, inclusive design,
          digital and medical equity, and gerontechnology.
        </p>
      </Column>
    </Grid>

    <section className="center measure">
      <h2 className="f3 tc-ns">Contact me</h2>
      <p>
        You can email me at <strong>cordelia</strong> at{' '}
        <strong>cordeliadillon</strong> dot <strong>com</strong>{' '}
        or find me on one of the social media sites linked below.{' '}
        I'd love to hear from you!
      </p>
      <p>
        <strong>Pandemic-times note:</strong>{' '}
        I'll be honest, I'm pretty overwhelmed these days.
        I may be a bit slow to respond, so if  you haven't heard back
        from me in a while, please do reach out again.
        It's nothing personal, it's just <del>2021</del> <del>2022</del> 2023.
        {' '}<span role="img" aria-label="grimace emoji">😬</span>
      </p>
    </section>
  </Layout>
)

export default About;
