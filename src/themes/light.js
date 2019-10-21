const colorSet = {
    highlight: "#ff6464",
    background: "#042f4b",
    readableText: "#24292e"
};

export default {
    main: {
        defaultBack: "#fff",
        defaultText: "#000",
        overlayBack: "#000",
        header: {
            back: colorSet.background,
            text: "#fff",
            button: "#fff"
        }
    },
    side: {
        defaultBack: colorSet.background,
        defaultText: "#fff",
        bio: {
            circle: colorSet.highlight,
            defaultText: "#999",
            activeText: "#fff"
        },
        category: {
            activeText: "#000",
            activeBack: colorSet.highlight
        }
    },
    bio: {
        defaultBack: "#fff",
        defaultText: colorSet.readableText,
        subText: "#999",
        socialButton: "#000"
    },
    postlistitem: {
        title: "#000",
        content: "#999",
        info: "#000"
    },
    pagination: {
        defaultText: "#999",
        activeText: "#fff",
        activeBack: colorSet.background
    },
    blogpost: {
        title: "#000",
        info: "#999",
        hr: "#999",
        content: {
            default: colorSet.readableText,
            quote: "#999",
            link: "#0687f0",
            header: colorSet.highlight
        }
    },
    tag: {
        back: "#d9d9d9",
        text: "#4d4d4d"
    },
    recentpostlist: {
        header: colorSet.readableText,
        category: "#0687f0"
    },
    recentpostitem: {
        text: "#fff"
    }
};
