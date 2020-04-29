import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  // Determine whether widget should be displayed.
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }

  const baseUrl = 'https://app.chatwoot.com';
  const websiteToken = process.env.CHATWOOT_WEBSITE_TOKEN;

  return setPostBodyComponents([
    <script
      key={`gatsby-plugin-chatwoot`}
      dangerouslySetInnerHTML={{
        __html: `
                    (function(d,t) {
                    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                    g.src="${baseUrl}/packs/js/sdk.js";
                    s.parentNode.insertBefore(g,s);
                    g.onload=function(){
                      window.chatwootSDK.run({
                        websiteToken: "${websiteToken}",
                        baseUrl: "${baseUrl}"
                      })
                    }
                    })(document,"script");
                `.trim(),
      }}
    />,
  ]);
};
