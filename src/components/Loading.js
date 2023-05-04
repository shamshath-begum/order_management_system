import React from "react";

function Loading() {
  return (
    <>
      <div
        className="spinner-border"
        role="status"
        style={{ width: 80, height: 80, marginLeft: 500 }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default Loading;
