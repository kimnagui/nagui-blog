import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PostInfo from "components/molecules/postInfo";
import TagList from "components/molecules/tagList";
import RecentPostList from "components/organisms/recentPostList";
import Layout from "./layout";
import SEO from "../seo";

const PostHeader = styled.div`
    h1 {
        padding: 0;
        margin-bottom: 10px;
        border: none;
        color: ${props => props.theme.blogpost.title};
        line-height: 1.5;
    }

    hr {
        margin: 20px 0 40px 0;
        background-color: ${props => props.theme.blogpost.hr};
    }

    div {
        color: ${props => props.theme.blogpost.info};
        #circle {
            background-color: ${props => props.theme.blogpost.info};
        }
    }
`;

const PostContent = styled.div`
    color: ${props => props.theme.blogpost.content.default};
    line-height: 2;

    a {
        color: ${props => props.theme.blogpost.content.link};
        /* &:hover { */
        text-decoration: underline;
        /* } */
    }

    code {
        background-color: #1e1e1e;
        padding: 8px;
        border-radius: 5px;
    }

    h2 {
        display: inline-block;
        margin-top: 60px;
        margin-bottom: 25px;
        color: ${props => props.theme.blogpost.content.heading};
        text-decoration: underline;
        text-underline-position: under;
    }

    h3,
    h4 {
        color: ${props => props.theme.blogpost.content.heading};
    }

    .gatsby-resp-image-wrapper {
        margin: 35px 0;
    }

    blockquote {
        p {
            margin-left: 0;
        }
        margin-left: 0;
        margin-right: 0;
        padding-left: calc(0.8125rem - 1px);
        border-left: 4px solid ${props => props.theme.blogpost.content.quote};
        color: ${props => props.theme.blogpost.content.quote};
    }
`;

const PostFooter = styled.div`
    margin-top: 40px;

    hr {
        margin: 20px 0;
        background-color: ${props => props.theme.blogpost.hr};
    }
`;

class BlogPost extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const {
            title,
            date,
            category,
            tags,
            cover
        } = this.props.data.markdownRemark.frontmatter;
        const { recent } = this.props.pageContext;

        return (
            <Layout
                location={this.props.location}
                title={siteTitle}
                activeMenu={category}
            >
                <SEO
                    title={title}
                    description={post.excerpt}
                    image={!!cover && cover.childImageSharp.fluid.src}
                    keywords={tags || []}
                />

                <PostHeader>
                    <h1>{title}</h1>
                    <PostInfo category={category} date={date} link={true} />
                    <hr />
                </PostHeader>

                <PostContent>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </PostContent>

                <PostFooter>
                    <TagList data={tags} />
                    <hr />
                    {category && (
                        <RecentPostList category={category} data={recent} />
                    )}
                </PostFooter>
            </Layout>
        );
    }
}

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                authorNickName
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                category
                tags
                cover {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            src
                        }
                    }
                }
            }
        }
    }
`;
