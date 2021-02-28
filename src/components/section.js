import React from "react";

const Section = ({header, level, children}) => (
  <section>
    <h2 className="f3" aria-level={level}>{header}</h2>
    {children}
  </section>
)

export default Section;
