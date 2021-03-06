module.exports = {
    url: "http://nagui.me",
    title: "Nagui.me",
    lang: "ko",
    description: "KimNagui's Blog",
    defaultKeywords: [`blog`, `gatsby`, `javascript`, `react`, `kimnagui`],
    defaultMetaImage: "/defaultmetaimage.png",

    authorNickName: "KimNagui",
    authorFullName: "KimGwangHyeon",
    authorDescription: "#FrontendDeveloper",
    photo: "content/assets/profile-pic.png",

    // icon : FontAwesome
    category: [
        {
            id: "개발",
            icon: "fa-book-open"
        },
        {
            id: "일상",
            icon: "fa-grin-alt"
        }
        // {
        //     id: "여행",
        //     icon: "fa-plane-departure"
        // }
    ],

    social: {
        email: "calrosban@gmail.com",
        github: "https://github.com/kimnagui"
    },

    postsPerPage: 5,
    pageListSize: 5,

    copyright: "© All rights reserved.",
    googleAnalyticsId: "UA-143311992-1",
    s3Bucket: "nagui.me"
};
