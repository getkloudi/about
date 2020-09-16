import React, { useEffect } from "react";

function BlogBehindTheScene(props) {
  useEffect(() => {
    if (typeof window !== `undefined`)
      window.location.href = `https://blog.kloudi.tech/f2704989412b40f2a699653c238464e0`;;
  });
  return <div />;
};

export default BlogBehindTheScene;
