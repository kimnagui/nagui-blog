import React from "react";
import styled from "styled-components";
import { AvatarImage } from "../atoms/avatarImage";
import { AvatarName } from "../atoms/avatarName";

const StyledSideHeader = styled.header`
    padding: 20px;
`;

export const SideHeader = ({ imgAlt, imgSrc, nameText }) => {
    return (
        <StyledSideHeader>
            <AvatarImage size="50px" alt={imgAlt} src={imgSrc} />
            <AvatarName ml="10px" size="30px" text={nameText} />
        </StyledSideHeader>
    );
};
