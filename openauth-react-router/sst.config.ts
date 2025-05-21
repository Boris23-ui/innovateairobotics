/// <reference path="./.sst/platform/config.d.ts" />

export default function (app) {
  app.stack(function SiteStack({ stack }) {
    const { StaticSite } = require("sst");
    const site = new StaticSite(stack, "site", {
      path: ".",
      buildCommand: "npm run build",
      dev: {
        command: "npm run dev",
      },
    });

    stack.addOutputs({
      url: site.url,
    });
  });
} 