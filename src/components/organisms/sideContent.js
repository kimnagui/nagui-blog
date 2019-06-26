import React from "react";
import styled from "styled-components";

const StyledSideContent = styled.nav`
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }

    overflow: auto;
    padding: 10px;

    ul {
        list-style: none;
    }
`;

export const SideContent = ({ children }) => {
    return (
        <StyledSideContent>
            {/* 카테고리 컴포넌트 불러오기 */}
            {children}
        </StyledSideContent>
    );
};
