import React, { useEffect } from "react";

export default function BlogWhyEarlyAccess(props) {
  useEffect(() => {
    if (typeof window !== `undefined`)
      window.location.href = `https://blog.kloudi.tech/b6dd0646ab554b85bcc7771d826e8a4e`;;
  });
  return <div />;
};

