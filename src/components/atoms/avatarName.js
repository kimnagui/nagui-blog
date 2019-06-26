import React from "react";
import styled from "styled-components";

const StyledName = styled.p`
    display: inline-block;
    vertical-align: middle;
    font-weight: bold;
    margin-bottom: 0;
    margin-left: ${props => props.ml || "10px"};
    font-size: ${props => props.size || "16px"};
`;

export const AvatarName = ({ ml, size, text }) => {
    return (
        <StyledName ml={ml} size={size}>
            {text}
        </StyledName>
    );
};
