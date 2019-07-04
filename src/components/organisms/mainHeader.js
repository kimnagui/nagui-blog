import React from "react";
import styled from "styled-components";
import { IconBtn } from "components/atoms/iconButton";

const StyledMainHeader = styled.header`
    width: 100%;
    background-color: #3f0f3f;

    @media all and (min-width: 992px) {
        padding: 10px;
        background-color: #ffffff;
    }
`;

const MenuButton = styled.div`
    display: inline-block;

    @media all and (min-width: 992px) {
        display: none;
    }
`;

const MainHeader = ({ sideToggle }) => {
    return (
        <StyledMainHeader>
            <MenuButton>
                <IconBtn
                    icon={<i className="fas fa-bars" />}
                    color={"#ffffff"}
                    onClick={sideToggle}
                />
            </MenuButton>
        </StyledMainHeader>
    );
};

export default MainHeader;
