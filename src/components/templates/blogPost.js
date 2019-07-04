import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Circle from "components/atoms/circle";
import Layout from "./layout";
import SEO from "../seo";

const PostHeader = styled.div`
    h1 {
        padding: 0;
        margin-bottom: 10px;
        border: none;
    }

    div {
        font-size: 13px;
        color: gray;
        margin-bottom: 10px;

        a,
        span {
            color: inherit;
            vertical-align: middle;
        }

        div {
            margin: 0 10px;
        }
    }

    hr {
        margin-bottom: 40px;
    }
`;

const PostContent = styled.div``;

{
    /* 
        [Todo]
        1. 관련글 : 현재 게시물을 기준으로 카드형식의 좌우스크롤 가능한 같은 카테고리의 게시물 리스트
        2. 공유 : 게시글 URL 복사기능 + 공유기능
        3. 댓글 : utterances or disqus ??
        4. 태그
    */
}

class BlogPost extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const category = this.props.data.markdownRemark.frontmatter.category;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout
                location={this.props.location}
                title={siteTitle}
                activeMenu={category}
            >
                <SEO
                    title={post.frontmatter.title}
                    description={post.excerpt}
                />
                <PostHeader>
                    <h1>{post.frontmatter.title}</h1>

                    <div>
                        <Link to={`/category/${category}`}>{category}</Link>
                        <Circle
                            display={"inline-block"}
                            size={"3"}
                            color={"gray"}
                        />
                        <span>{post.frontmatter.date}</span>
                    </div>
                    <hr />
                </PostHeader>
                <PostContent>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </PostContent>
                <hr style={{ margin: "40px 0 20px 0" }} />

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
                date(formatString: "MMMM DD, YYYY")
                category
            }
        }
    }
`;
