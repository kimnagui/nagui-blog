import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { SideHeader } from "components/organisms/sideHeader";
import { SideContent } from "components/organisms/sideContent";
import { MainHeader } from "components/organisms/mainHeader";
import { MainContent } from "components/organisms/mainContent";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        height: 100%
    }
    #___gatsby {
        height: 100%;
    }
    div[role='group'] {
        display: flex;
        height: 100%;
        overflow: hidden;
    }
`;

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3f0f3f;
    color: #ffffff;
    min-width: 280px;

    transition: margin 0.5s;
    margin-left: ${props => (props.mobileOpen ? 0 : "-280px")};

    @media all and (min-width: 992px) {
        min-width: 280px;
        margin-left: 0 !important;
    }
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;
`;

const MainOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.8;

    z-index: 99;

    @media all and (min-width: 992px) {
        display: none;
    }
`;

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_side: false
        };
    }

    sideToggle = e => {
        // 0. const sidebar = document.getElementById("sidebar");
        // 1. sidebar.classList.toggle("sidebar-open");
        // -- 스타일드컴포넌트는 class 또는 className 을 적용할 수 없음, 꼭 적용해야한다면 별도의 css 파일을 임포트해야함.
        // 2. console.log(sidebar.style.marginLeft);
        // -- 초기 렌더링 됬을때의 element style의 값은 비워져 있음.
        // 3. const startPoint = sidebar.getBoundingClientRect().left;
        // if (startPoint != 0) {
        //     sidebar.style.marginLeft = 0;
        // } else {
        //     sidebar.style.marginLeft = "-80%";
        // }
        // -- 모바일 장치일때 사이드바 오픈 상태를 관리할 수 없음.

        const open = !this.state.mobile_side;
        this.setState({
            mobile_side: open
        });
    };

    profileClick = e => {};

    render() {
        const { children, activeMenu } = this.props;
        const { mobile_side } = this.state;
        return (
            <Fragment>
                <GlobalStyle />
                <SideBar mobileOpen={mobile_side}>
                    <SideHeader />
                    <SideContent activeMenu={activeMenu} />
                </SideBar>
                <Main>
                    {mobile_side && <MainOverlay onClick={this.sideToggle} />}
                    <MainHeader sideToggle={this.sideToggle} />
                    <MainContent>{children}</MainContent>
                </Main>
            </Fragment>
        );
    }
}
