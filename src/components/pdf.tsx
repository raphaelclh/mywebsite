import React from "react";

const PdfViewer = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <object
        data="/assets/raphael_cv.pdf"
        type="application/pdf"
        style={{ width: "100%", height: "100%" }}
      >
        <embed src="/assets/raphael_cv.pdf" type="application/pdf" />
      </object>
    </div>
  );
};

export default PdfViewer;
