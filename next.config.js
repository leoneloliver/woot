/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
      // providing the locales supported by your application
      locales: ["en-US", "pt"],
     //  default locale used when the non-locale paths are visited
      defaultLocale: "en-US",
    },
    env:{
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    }
  }
  module.exports = nextConfig

  
  
