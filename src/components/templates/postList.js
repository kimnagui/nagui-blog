import React, { Fragment } from "react";
import PostListItem from "components/organisms/postListItem";
import Pagination from "components/organisms/pagination";

const PostList = ({ data, page, path, pageListSize }) => {
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
            {page && (
                <Pagination page={page} path={path} listSize={pageListSize} />
            )}
        </Fragment>
    );
};

export default PostList;
