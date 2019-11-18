import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)``;

const StyledButton = styled.div`
    display: inline-block;
    margin: 5px 8px;
    border-radius: 5px;

    color: ${props => props.theme.tag.text};
    font-size: 15px;

    &:hover {
        text-decoration: underline;
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
