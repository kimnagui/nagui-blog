import React, { Fragment } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const BioNameAndPhoto = styled.div`
    display: flex;
    margin-bottom: 10px;

    div img {
        min-width: 70px;
        border-radius: 6px;
    }

    div:first-child {
        margin-right: 10px;
    }

    div:last-child {
        margin: auto 0;
        div:first-child {
            font-size: 20px;
            font-weight: bold;
        }
        div:last-child {
            color: gray;
        }
    }
`;

const BioSocial = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
        color: #80d2de;
        font-weight: bold;
    }

    a {
        display: block;
        margin-bottom: 5px;
        cursor: pointer;
        color: #000;
    }

    span {
        margin-right: 5px;
    }
`;

const Bio = () => {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const {
                    authorNickName,
                    authorFullName,
                    authorDescription,
                    social
                } = data.site.siteMetadata;
                return (
                    <Container>
                        <BioNameAndPhoto>
                            <Image
                                fixed={data.avatar.childImageSharp.fixed}
                                alt={authorNickName}
                            />
                            <div>
                                <div>{authorNickName}</div>
                                <div>{authorFullName}</div>
                            </div>
                        </BioNameAndPhoto>
                        <BioSocial>
                            <p>{authorDescription}</p>
                            {social && (
                                <Fragment>
                                    <hr />
                                    {social.github && (
                                        <a href={social.github} target="_blank">
                                            <span className="fa-stack">
                                                <i className="fas fa-circle fa-stack-2x" />
                                                <i className="fab fa-github fa-stack-1x fa-inverse fa-lg" />
                                            </span>
                                            {social.github}
                                        </a>
                                    )}
                                    {social.email && (
                                        <div>
                                            <span className="fa-stack">
                                                <i className="fas fa-circle fa-stack-2x" />
                                                <i className="fas fa-envelope fa-stack-1x fa-inverse" />
                                            </span>
                                            {social.email}
                                        </div>
                                    )}
                                </Fragment>
                            )}
                        </BioSocial>
                    </Container>
                );
            }}
        />
    );
};

const bioQuery = graphql`
    query {
        avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
            childImageSharp {
                fixed(width: 70, height: 70) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                authorFullName
                authorNickName
                authorDescription
                social {
                    email
                    github
                }
            }
        }
    }
`;

export default Bio;
