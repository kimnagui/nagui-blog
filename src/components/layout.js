import React, { Fragment } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
// import "./layout.css";
import { Link } from "gatsby";

const GlobalStyle = createGlobalStyle`
    html,body {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    #___gatsby {
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    div[role='group'] {
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }
`;

const SideBar = styled.div`
	display: flex;
	flex-direction: column;

	min-width: 280px;

	background-color: #3f0f3f;
	color: #ffffff;

	@media (max-width: 900px) {
		display: none;
	}
`;

const SideHeader = styled.header`
	display: flex;

	padding: 20px;
`;

const SideContent = styled.div`
	display: flex;
	flex-direction: column;

	-ms-overflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
	overflow: auto;

	padding: 20px;
`;

const Main = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainHeader = styled.header`
	display: flex;
	flex-direction: column;

	width: 100%;

	padding: 10px;

	background-color: #ffffff;
`;

const MainContent = styled.div`
	display: flex;
	flex-direction: column;

	overflow: auto;

	padding: 30px;
`;

class Layout extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<Fragment>
				<GlobalStyle />
				<SideBar>
					<SideHeader>아바타 & 이름</SideHeader>

					<SideContent>
						<p>POSTS</p>
					</SideContent>
				</SideBar>
				<Main>
					<MainHeader>모바일일때 메뉴버튼 & 항시 검색버튼</MainHeader>
					<MainContent>
						목록 또는 본문
						<br />
						{children}
					</MainContent>
				</Main>
			</Fragment>
		);
	}
}

export default Layout;
