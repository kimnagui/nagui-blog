import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

const StyledIconButton = styled(IconButton)`
    color: ${props => props.btncolor} !important;
`;

export const IconBtn = ({ type, color, icon, onClick }) => {
    return (
        <StyledIconButton type={type} btncolor={color} onClick={onClick}>
            {icon}
        </StyledIconButton>
    );
};
