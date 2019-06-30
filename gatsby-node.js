const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require(`gatsby-awesome-pagination`);

// const createPaginatedPages = require("gatsby-paginate");
// const siteConfig = require("./config.js");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPost = path.resolve(`./src/components/templates/blogPost.js`);

    return graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                tags
                                category
                            }
                        }
                    }
                }
            }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors;
        }
        const posts = result.data.allMarkdownRemark.edges;
        let tags = [];
        let category = [];

        // Create blog posts pages.
        posts.forEach((post, index) => {
            const previous =
                index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;

            tags = Array.from(
                new Set([...tags, ...post.node.frontmatter.tags])
            );
            category = Array.from(
                new Set([...category, ...[post.node.frontmatter.category]])
            );

            createPage({
                path: post.node.fields.slug,
                component: blogPost,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next
                }
            });
        });

        paginate({
            createPage, // The Gatsby `createPage` function
            items: posts, // An array of objects
            itemsPerPage: 4, // How many items you want per page
            pathPrefix: "/", // Creates pages like `/blog`, `/blog/2`, etc
            component: path.resolve("./src/components/templates/index.js") // Just like `createPage()`
        });

        return null;
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }
};
