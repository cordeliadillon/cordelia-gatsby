import React, {useState, useEffect} from "react";
import _JSXStyle from 'styled-jsx/style';
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const options = [
  {label: 'Auto', value: 'auto'},
  {label: 'Light', value: 'light'},
  {label: 'Dark', value: 'dark'}
];

const ThemeToggle = () => {
  const [selection, setSelection] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);

  const handleKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        if (index > 0) setFocusIndex(index-1);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        if (index < options.length - 1) setFocusIndex(index+1);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    document.getElementById(`mode${focusIndex}`).focus();
  }, [focusIndex]);

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div role="toolbar" className="pa1" aria-label="Color Theme">
          { options.map((option, i) => {
              return (
                <button
                  key={i}
                  role="radio"
                  id={`mode${i}`}
                  aria-checked={theme === option.value}
                  onClick={e => toggleTheme(option.value)}
                  onKeyDown={e => handleKeyDown(e, i)}
                  tabIndex={focusIndex === i ? '0' : '-1'}
                >
                  {option.label}
                </button>
              );
          })}
          <style jsx>{`
              button {
                color: var(--text);
                background-color: var(--background);
              }

              button[aria-checked="true"] {
                color: var(--background);
                background-color: var(--text);
              }

              *[role="toolbar"] {
                position: fixed;
                bottom: 10px;
                right: 10px;
                border-radius: var(--rounded);
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
