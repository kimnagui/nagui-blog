const colorSet = {
    highlight: "#50fa7b",
    hardBackground: "#1c1c1c",
    softBackground: "#282a36",
    readableText: "#f8f8f2",
    subText: "#999",
    white: "#f8f8f2",
    heading: "#50fa7b",
    link: "#0687f0"
};

export default {
    main: {
        defaultBack: colorSet.softBackground,
        defaultText: colorSet.hardBackground,
        overlayBack: colorSet.hardBackground,
        header: {
            back: colorSet.hardBackground,
            text: colorSet.white,
            button: colorSet.white
        }
    },
    side: {
        defaultBack: colorSet.hardBackground,
        defaultText: colorSet.white,
        bio: {
            circle: colorSet.highlight,
            defaultText: colorSet.subText,
            activeText: colorSet.white
        },
        category: {
            activeText: colorSet.hardBackground,
            activeBack: colorSet.highlight
        }
    },
    bio: {
        defaultBack: colorSet.softBackground,
        defaultText: colorSet.readableText,
        subText: colorSet.subText,
        socialButton: colorSet.highlight
    },
    postlistitem: {
        title: colorSet.readableText,
        content: colorSet.subText,
        info: colorSet.highlight
    },
    pagination: {
        defaultText: colorSet.white,
        activeText: colorSet.hardBackground,
        activeBack: colorSet.highlight
    },
    blogpost: {
        title: colorSet.readableText,
        info: colorSet.highlight,
        hr: colorSet.readableText,
        content: {
            default: colorSet.readableText,
            quote: "#bd93f9",//colorSet.highlight,
            link: colorSet.link,
            heading: colorSet.heading
        },
        code: {
            back: colorSet.hardBackground
        }
    },
    tag: {
        back: "#ffb86c",
        text: "#ffb86c"
    },
    recentpostlist: {
        header: colorSet.readableText,
        category: colorSet.link
    },
    recentpostitem: {
        text: colorSet.white
    }
};
