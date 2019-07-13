import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import RecentPostItem from "components/molecules/recentPostItem";

const PostList = styled.div`
    #title {
        font-weight: bold;
        margin: 0;
        padding: 0 10px 10px 10px;

        a {
        }
    }
`;

const RecentPostList = ({ category, data }) => {
    return (
        <PostList>
            <div id="title">
                Recent "<Link to={`/category/${category}`}>{category}</Link>"
                Posts
            </div>
            {data.map((node, index) => (
                <RecentPostItem key={index} data={node} />
            ))}
        </PostList>
    );
};

export default RecentPostList;
