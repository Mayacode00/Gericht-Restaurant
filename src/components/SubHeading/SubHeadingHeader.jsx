import React from "react";

function SubHeadingHeader(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        className="p__cormorant"
        style={{ color: "var(--color-golden)", fontSize: "55px", lineHeight: "50px" }}
      >
        {props.title}
      </h1>
    </div>
  );
}

export default SubHeadingHeader;
