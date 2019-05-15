import React from "react";
import styled from "styled-components";
import { AvatarImage } from "../atoms/avatarImage";
import { AvatarName } from "../atoms/avatarName";

const Profile = styled.div``;

export const UserProfile = ({ imgAlt, imgSrc, nameText }) => {
    return (
        <Profile>
            <AvatarImage size="50px" alt={imgAlt} src={imgSrc} />
            <AvatarName ml="10px" size="30px" text={nameText} />
        </Profile>
    );
};
