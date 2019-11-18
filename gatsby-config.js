"use strict";

const siteConfig = require("./config.js");

module.exports = {
    siteMetadata: {
        siteUrl: siteConfig.url,
        title: siteConfig.title,
        lang: siteConfig.lang,
        description: siteConfig.description,
        defaultKeywords: siteConfig.defaultKeywords,
        defaultMetaImage: siteConfig.defaultMetaImage,
        copyright: siteConfig.copyright,
        authorNickName: siteConfig.authorNickName,
        authorFullName: siteConfig.authorFullName,
        authorDescription: siteConfig.authorDescription,
        photo: siteConfig.photo,
        social: siteConfig.social,
        category: siteConfig.category,
        pageListSize: siteConfig.pageListSize
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
                    `gatsby-remark-emoji`,
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
                    {
                        resolve: `gatsby-remark-vscode`,
                        // All options are optional. Defaults shown here.
                        options: {
                            colorTheme: "Dark+ (default dark)", // Read on for list of included themes. Also accepts object and function forms.
                            wrapperClassName: "", // Additional class put on 'pre' tag
                            injectStyles: true, // Injects (minimal) additional CSS for layout and scrolling
                            extensions: [], // Extensions to download from the marketplace to provide more languages and themes
                            // Absolute path to the directory where extensions will be downloaded. Defaults to inside node_modules.
                            // extensionDataDirectory: path.resolve("extensions"),
                            languageAliases: {}, // Map of custom/unknown language codes to standard/known language codes
                            replaceColor: x => x, // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
                            getLineClassName: ({
                                // Function allowing dynamic setting of additional class names on individual lines
                                content, //   - the string content of the line
                                index, //   - the zero-based index of the line within the code fence
                                language, //   - the language specified for the code fence
                                codeFenceOptions //   - any options set on the code fence alongside the language (more on this later)
                            }) => "",
                            logLevel: "error" // Set to 'warn' to debug if something looks wrong
                        }
                    },
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
                utils: `${__dirname}/src/utils`,
                themes: `${__dirname}/src/themes`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: siteConfig.googleAnalyticsId,
                head: true
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
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: siteConfig.s3Bucket
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`
        }
    ]
};
