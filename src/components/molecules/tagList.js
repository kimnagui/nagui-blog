import React from "react";
import styled from "styled-components";
import TagButton from "../atoms/tagButton";

const Container = styled.div`
    /* margin-top: 40px; */
`;

const TagList = ({ data }) => {
    return (
        <Container>
            {data.map(node => (
                <TagButton key={node} link={`tags/${node}`}>
                    #{node}
                </TagButton>
            ))}
        </Container>
    );
};

export default TagList;