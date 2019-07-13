import Img from "gatsby-image";

const Image = props => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fluid(maxWidth: 500) {
                                src
                                originalName
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename);
            });
            if (!image) {
                return null;
            }

            const imageSizes = image.node.childImageSharp.sizes;
            return <Img alt={props.alt} sizes={imageSizes} />;
        }}
    />
);
