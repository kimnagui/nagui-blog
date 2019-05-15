import React from "react";
import { default as OriginAvatar } from "@material-ui/core/Avatar";
import styled from "styled-components";

const Avatar = styled(OriginAvatar)`
    display: inline-block !important;
    vertical-align: middle;
    background-color: #ffffff !important;
    border-radius: 20% !important;
    width: ${props => props.size || "40px"} !important;
    height: ${props => props.size || "40px"} !important;
`;

export const AvatarImage = ({ size, alt, src }) => {
    return <Avatar size={size} alt={alt} src={src} />;
};
