import React, { Fragment } from "react";
import { PostListItem } from "components/organisms/postListItem";
import { Pagination } from "components/organisms/pagination";

export const PostList = ({ data, page, path }) => {
    return (
        <Fragment>
            {data.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                    <PostListItem
                        key={node.fields.slug}
                        node={node}
                        title={title}
                    />
                );
            })}
            {page && <Pagination page={page} path={path} />}
        </Fragment>
    );
};
