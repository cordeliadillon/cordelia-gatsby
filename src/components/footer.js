import React from "react";
// eslint-disable-next-line no-unused-vars
import _JSXStyle from 'styled-jsx/style';
import ThemeToggle from "./theme-toggle.js";
import twitterLogo from '../images/social/twitter.png';
import instagramLogo from '../images/social/instagram.png';
import linkedinLogo from '../images/social/linkedin.png';
import tumblrLogo from '../images/social/tumblr.png';
import githubLogo from '../images/social/github.png';

const socials = [
  {
    id: 'instagram',
    url: 'https://www.instagram.com/cordeliadillon/',
    label: 'Instagram',
    description: '@cordeliadillon on Instagram',
    logo: instagramLogo
  },{
    id: 'twitter',
    url: 'https://www.twitter.com/cordeliadillon',
    label: 'Twitter',
    description: '@cordeliadillon on Twitter',
    logo: twitterLogo
  },{
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/cordeliamcgeetubb',
    label: 'LinkedIn',
    description: 'Cordelia on LinkedIn',
    logo: linkedinLogo,
  },{
    id: 'github',
    url: 'https://github.com/cordeliadillon',
    label: 'GitHub',
    description: 'Cordelia on GitHub',
    logo: githubLogo
  },{
    id: 'tumblr',
    url: 'https://echothroughthefog.cordeliadillon.com/',
    label: 'Tumblr',
    description: 'Echo Through the Fog on Tumblr',
    logo: tumblrLogo
  }
];

const Footer = () => (
  <>
    <footer className="flex flex-row-l flex-column justify-between-l justify-center items-center mt5 mb4">
      <div className="social-media">
        {socials.map((social, i) => { return (
          <a key={i} 
            className={`dib p0 ${i !== (socials.length - 1) && 'mr2'}`}
            href={social.url}
            target="_blank"
            title={social.description}
            rel="noreferrer"
          >
            <img
              className="illustration invert"
              src={social.logo}
              alt={social.label}
            />
          </a>
        )})}
      </div>

      <div>
        &copy; Cordelia McGee-Tubb {new Date().getFullYear()}
      </div>

      <div>
        <ThemeToggle/>
      </div>
    </footer>
    <style jsx>
    {`
      footer {
        row-gap: 1em;
      }
    `}
    </style>
  </>
)

export default Footer;
