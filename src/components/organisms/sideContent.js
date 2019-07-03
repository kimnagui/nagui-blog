import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

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
        margin: 10px 20px 10px 30px;
        vertical-align: middle;
    }

    span {
        vertical-align: middle;
    }
`;

const SideContent = ({ activeMenu }) => (
    <StaticQuery
        query={query}
        render={data => {
            const category = data.site.siteMetadata.category;
            return (
                <StyledSideContent>
                    {category.map(node => {
                        return (
                            <Category
                                key={node.id}
                                name={node.id}
                                to={`/category/${node.id}`}
                                active={activeMenu}
                            >
                                <i className={`fas ${node.icon} fa-fw`} />
                                <span>{node.name}</span>
                            </Category>
                        );
                    })}
                </StyledSideContent>
            );
        }}
    />
);

const query = graphql`
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
`;

export default SideContent;
