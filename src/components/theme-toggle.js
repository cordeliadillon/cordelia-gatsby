import React, {useState, useEffect} from "react";
import _JSXStyle from 'styled-jsx/style';
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import sun from '../images/sun.png';

const options = [
  {label: 'Auto', value: 'auto'},
  {label: 'Light', value: 'light'},
  {label: 'Dark', value: 'dark'}
];

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div role="group" className="flex pa2 br-pill" aria-label="Color Theme">
          <img src={sun} className="invert ph1" alt=''/>
          { options.map((option, i) => {
              return (
                <button
                  key={i}
                  aria-pressed={theme === option.value}
                  onClick={e => toggleTheme(option.value)}
                  className="br-pill"
                >
                  {option.label}
                </button>
              );
          })}
          <style jsx>{`
              *[role="group"] {
                gap: .5em;
              }

              img {
                width: 1.5em;
                heigh: auto;
              }

              button {
                font-size: .85rem;
                color: var(--text);
                background-color: var(--background);
                border: 2px solid var(--text);
                font-family: var(--font-display);
                opacity: 1;
              }

              button:focus {
                outline: none;
                box-shadow: 0px 0px 0px 4px var(--link);
              }

              button[aria-pressed="true"] {
                color: var(--background);
                background-color: var(--text);
              }
            `}
          </style>
        </div>
      )}
    </ThemeToggler>
  );

}



export default ThemeToggle;
