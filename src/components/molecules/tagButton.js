import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
    margin: 5px 5px 5px 0;

    &:hover {
        text-decoration: none;
    }
`;

const StyledButton = styled.div`
    display: inline-block;
    color: #3f0f3f;
    background-color: #fff;
    border: 2px solid #3f0f3f;
    border-radius: 15px;

    padding: 5px 10px;

    font-size: 15px;
    line-height: 15px;

    vertical-align: middle;

    svg,
    span {
        vertical-align: middle;
        color: gray;
    }

    &:hover {
        color: #fff;
        background-color: #3f0f3f;
    }
`;

const TagButton = ({ link, children }) => {
    return (
        <StyledLink to={link}>
            <StyledButton>{children}</StyledButton>
        </StyledLink>
    );
};

export default TagButton;
