const path = require('path')
// require('dotenv').config()
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  bg: 'bg',
  en: 'en',
};


module.exports = {

    // env: {
    //     API_URL: process.env.API_URL
    // },

    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    },

    i18n: {
        locales: ['bg', 'en'],
        localeDetection: false,
        defaultLocale: 'bg',
      },

      rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },


    // images: {
    //     domains: ["res.cloudinary.com"],
    // },
}