import React from "react";

const Tags = ({tags}) => {
  return (
   <ul className="project-tags" aria-label="Tags">
     {tags.map((tag, i) => (
      <li key={i} className="project-tag">{tag}</li>
     ))}
   </ul>
  );
}

export default Tags;
