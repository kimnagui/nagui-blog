"use strict";

const siteConfig = require("./config.js");

module.exports = {
    siteMetadata: {
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        copyright: siteConfig.copyright,
        disqusShortname: siteConfig.disqusShortname,
        author: siteConfig.author,
        social: siteConfig.social,
        category: siteConfig.category
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                content: `${__dirname}/content`,
                src: `${__dirname}/src`,
                components: `${__dirname}/src/components`,
                pages: `${__dirname}/src/pages`,
                utils: `${__dirname}/src/utils`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            }
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nagui Blog`,
                short_name: `Nagui`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: `content/assets/favicon.png`
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            }
        },
        {
            resolve: "gatsby-plugin-categories",
            options: {
                templatePath: `${__dirname}/src/components/templates/categoryList.js`
            }
        },
        {
            resolve: "gatsby-plugin-tags",
            options: {
                templatePath: `${__dirname}/src/components/templates/tagList.js`
            }
        }
    ]
};
