import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

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
                    <div
                        style={{
                            display: `flex`
                        }}
                    >
                        <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={authorNickName}
                            style={{
                                minWidth: "50px",
                                borderRadius: "6px",
                                marginRight: "10px"
                            }}
                        />
                        <p>#프론트엔드</p>
                    </div>
                );
            }}
        />
    );
};

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
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
