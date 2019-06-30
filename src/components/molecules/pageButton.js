import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledButton = styled(Link)`
    color: black;

    margin: 5px 10px;

    &:hover {
        color: black;
        text-decoration: none;
    }
`;

export const PageButton = ({ link, children, active }) => {
    return (
        <StyledButton to={link} active={active}>
            {children}
        </StyledButton>
    );
};
