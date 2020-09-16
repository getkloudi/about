import React, { useEffect } from "react";

function Blogs(props) {
  useEffect(() => {
    if (typeof window !== `undefined`)
      window.location.href = `https://blog.kloudi.tech/4099b381b52749fc9298c0d4695dfe0b`;;
  });
  return <div />;
};

export default Blogs;
