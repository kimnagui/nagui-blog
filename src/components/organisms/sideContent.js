import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

const StyledSideContent = styled.nav`
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }

    overflow: auto;
    padding: 10px 0;

    ul {
        height: 100%;
        margin: 0;
        list-style: none;
    }

    ul li {
        margin: 0;
    }

    ul li div {
        padding: 5px;
        margin-left: 50px;
    }
`;

const Category = styled(Link)`
    display: block;
    color: ${props => (props.active === props.name ? "black" : "white")};
    background-color: ${props => props.active === props.name && "#49c39e"};

    &:hover {
        text-decoration: none;
        background-color: #49c39e;
        color: black !important;
    }

    i {
        margin: 10px 10px 10px 30px;
        vertical-align: middle;
    }

    span {
        vertical-align: middle;
    }
`;

export const SideContent = ({ activeMenu }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        category {
                            id
                            name
                            icon
                        }
                    }
                }
            }
        `}
        render={data => {
            const category = data.site.siteMetadata.category;
            return (
                <StyledSideContent>
                    <Helmet>
                        <link
                            href="https://fonts.googleapis.com/icon?family=Material+Icons"
                            rel="stylesheet"
                        />
                    </Helmet>
                    {category.map(node => {
                        return (
                            <Category
                                key={node.id}
                                name={node.id}
                                to={`/category/${node.id}`}
                                active={activeMenu}
                            >
                                <i className="material-icons">{node.icon}</i>
                                <span>{node.name}</span>
                            </Category>
                        );
                    })}
                </StyledSideContent>
            );
        }}
    />
);
