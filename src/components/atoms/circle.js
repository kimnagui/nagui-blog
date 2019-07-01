import React from "react";
import styled from "styled-components";

const StyledCircle = styled.div`
    display: ${props => props.display || "block"}
    width: ${props => props.size + "px"};
    height: ${props => props.size + "px"};
    border-radius: 50%;
    background-color: ${props => props.color};
    vertical-align: middle;
    margin: 0px 10px;
`;

export const Circle = ({ display, size, color }) => {
    return <StyledCircle display={display} size={size} color={color} />;
};
