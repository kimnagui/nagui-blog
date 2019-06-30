import React from "react";
import styled from "styled-components";
import { PageButton } from "../molecules/pageButton";

const StyledPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Pagination = ({ page, path }) => {
    const totalPage = page.numberOfPages;
    const activePage = page.humanPageNumber;

    const pageListSize = 5;

    const startPage =
        parseInt((activePage - 1) / pageListSize) * pageListSize + 1;
    const endPage =
        startPage + pageListSize - 1 < totalPage
            ? startPage + pageListSize - 1
            : totalPage;

    const totalList = Math.ceil(totalPage / pageListSize);
    const currentList = parseInt((activePage - 1) / pageListSize) + 1;

    const prevList = currentList <= 1 ? null : (currentList - 1) * pageListSize;
    const nextList =
        currentList < totalList ? currentList * pageListSize + 1 : null;

    let pgs = [];

    for (let i = startPage; i <= endPage; i++) {
        let pageNum = i != 1 ? `/${i}` : "";

        if (i === activePage) {
            pgs.push(
                <PageButton link={`${path}${pageNum}`} active={true}>
                    {i}
                </PageButton>
            );
        } else {
            pgs.push(<PageButton link={`${path}${pageNum}`}>{i}</PageButton>);
        }
    }

    return (
        <StyledPagination>
            {prevList && (
                <PageButton link={`${path}/${prevList}`}>이전</PageButton>
            )}
            {pgs.length > 0 && pgs}
            {nextList && (
                <PageButton link={`${path}/${nextList}`}>다음</PageButton>
            )}
        </StyledPagination>
    );
};
