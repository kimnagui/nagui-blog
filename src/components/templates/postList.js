import React, { Fragment } from "react";
import { PostListItem } from "components/organisms/postListItem";

export const PostList = ({ data }) => {
    return (
        <Fragment>
            {data.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return <PostListItem node={node} title={title} />;
            })}
        </Fragment>
    );
};
