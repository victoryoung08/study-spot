module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  sitemap: {
    enabled: true,
    config: {
      cron: "0 0 0 * * *",
      limit: 45000,
      xsl: true,
      autoGenerate: false,
      caching: true,
      allowedFields: ["id", "uid", "suburb"],
      excludedTypes: [],
    },
  },
  // ...
});
