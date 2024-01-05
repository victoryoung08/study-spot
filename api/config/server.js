module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  // Uncomment this section only when you have thoroughly reviewed and tested it
  // url: {
  //   sitemap: "https://studyspotcafe.com/sitemap/index.xml",
  // },
});
