import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import PostInfo from "components/molecules/postInfo";
import TagList from "components/molecules/tagList";
import Layout from "./layout";
import SEO from "../seo";

const PostHeader = styled.div`
    h1 {
        padding: 0;
        margin-bottom: 10px;
        border: none;
    }

    hr {
        margin-bottom: 40px;
    }
`;

const PostContent = styled.div`
    .gatsby-highlight pre[class*="language-"] {
        padding: 20px;
    }
`;

const PostFooter = styled.div`
    margin-top: 40px;

    hr {
        margin: 20px 0;
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
            tags
        } = this.props.data.markdownRemark.frontmatter;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout
                location={this.props.location}
                title={siteTitle}
                activeMenu={category}
            >
                <SEO title={title} description={post.excerpt} />

                <PostHeader>
                    <h1>{title}</h1>
                    <PostInfo category={category} date={date} />
                    <hr />
                </PostHeader>

                <PostContent>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </PostContent>

                <PostFooter>
                    <TagList data={tags} />
                    <hr />
                </PostFooter>

                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                        marginLeft: 0
                    }}
                >
                    <li>
                        {previous && (
                            <Link
                                to={previous.fields.slug}
                                rel="prev"
                                style={{
                                    padding: "5px 10px",
                                    backgroundColor: "#3f0f3f",
                                    borderRadius: "6px",
                                    color: "#fff",
                                    textDecoration: "none"
                                }}
                            >
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link
                                to={next.fields.slug}
                                rel="next"
                                style={{
                                    padding: "5px 10px",
                                    backgroundColor: "#3f0f3f",
                                    borderRadius: "6px",
                                    color: "#fff",
                                    textDecoration: "none"
                                }}
                            >
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
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
            }
        }
    }
`;
