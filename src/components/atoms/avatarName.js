import React from "react";
import styled from "styled-components";

const Name = styled.div`
    display: inline-block;
    vertical-align: middle;
    font-weight: bold;
    margin-left: ${props => props.ml || "10px"};
    font-size: ${props => props.size || "16px"};
`;

export const AvatarName = ({ ml, size, text }) => {
    return (
        <Name ml={ml} size={size}>
            {text}
        </Name>
    );
};
