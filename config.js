module.exports = {
	url: "http://nagui.me",

	title: "Nagui.me",
	description: "KimNagui's Blog",
	defaultKeywords: [`blog`, `gatsby`, `javascript`, `react`, `kimnagui`],

	authorNickName: "KimNagui",
	authorFullName: "KimGwangHyeon",
	authorDescription: "#FrontendDeveloper #Chiller",
	photo: "content/assets/profile-pic.png",

	// icon : FontAwesome
	category: [
		// {
		//     id: "일상",
		//     icon: "fa-grin-alt"
		// },
		// {
		//     id: "여행",
		//     icon: "fa-plane-departure"
		// }
		{
			id: "공부",
			icon: "fa-book-open"
		}
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
