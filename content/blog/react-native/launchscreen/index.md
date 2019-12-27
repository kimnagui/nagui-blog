---
title: "[ReactNative] Launch Screen 과 Splash Screen"
date: "2019-09-05"
category: "개발"
tags:
    - ReactNative
    - Launch Screen
    - Splash Screen
    - generator-rn-toolbox
cover: ../react-native.jpg
---

React Native 개발을 하면서 앱 실행 초기화면을 어디서는 Launch Screen 이라하고 어디서는 Splash Screen 이라고 하길래 다른 건가 싶어서 찾아보았다.

> github나 stackflow 검색결과를 통해 내가 내린 결론과 사용한 방법은 아래와 같지만, 몇몇 라이브러리나 국내외 블로그들에서는 그냥 앱실행시의 첫화면을 Launch Screen 혹은 Splash Screen 이라고 부르고, 어떻게 개발하냐의 차이이기 때문에 무조건 맞다고는 할 수 없다.

## Launch Screen 이란 ?

- 런치 스크린은 앱이 실행되기전 자동으로 보여지는 첫 화면

- 사용자가 앱을 실행하고 디바이스에서 해당 앱의 인터페이스를 불러오는 동안 공백화면이 나올 수 있는데, 이 공백화면을 이미지로 채워줘서 사용자는 앱 실행이 빠르다고 느낄 수 있음

- 별다른 처리가 이루어지는게 없이 앱이 불러와지면 바로 화면이 전환되기 때문에 빠르게 지나갈 수 있는 화면으로 앱 대표 이미지나 회사 로고 또는 간단한 문구만 보여주는게 대부분

## Splash Screen 이란 ?

- 앱이 실행될때 나타나는 첫 화면

- 보통 스플래쉬 스크린이 나타나는 동안 앱실행에 필요한 데이터를 불러온다던가, 기존 로그인정보를 가지고 자동 로그인을 시도하는 등의 처리를 컨트롤함

- 여러개 넣을 수 있음

## React Native 에서 Launch Screen 만들기

### 1. [generator-rn-toolbox](https://github.com/bamlab/generator-rn-toolbox) 설치

```
npm install -g yo generator-rn-toolbox
```

### 2. PSD 파일 준비

- 해상도 : PSD 파일의 해상도는 2208x2208px 이상을 준비해야하며 필수로 표시되야할 부분은 약 30% 이상의 margin을 가지고 있어야함

> 참고 : Android의 경우 iOS보다 적은 부분을 잘라내므로 같은 파일로 Launch Screen을 생성해도 iOS보다 이미지가 작아보일 수 있음

- PNG를 PSD로 변환해주는 사이트 : [photopea.com](photopea.com)


### 3. Launch Screen 생성

이제 위에서 만든 PSD 파일을 이용해서 Launch Screen을 생성

#### * iOS

```
yo rn-toolbox:assets --splash (psd파일 경로) --ios
```

#### * Android

```
yo rn-toolbox:assets --splash (psd파일 경로) --android
```

> Android의 경우 아래와 같이 색상코드가 잘못 입력될 수 있으므로 확인 후 수정해야함
```xml
<!-- android/app/arc/main/res/values/colors.xml -->

<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- 
        <item name="splashBackground" type="color">#EAECEBEAECEBFF0000000000000000</item> 
        이 부분과 같이 색상코드가 잘못 입력될 경우 아래처럼 수정
    -->
    <item name="splashBackground" type="color">#EAECEB</item>
</resources>

```

## React Native 에서 Splash Screen 만들기

간단하다, React Native 의 Navigation 구성에서 앱실행의 첫화면을 만들어주면 끝.

#### (1) SplashScreen 컴포넌트 생성

```js
import React, { Component } from "react";
import { View, Image } from "react-native";
import { Splash } from "assets/images";
import { inject, observer } from "mobx-react";
import AuthService from "services/auth";

@inject("login")
@observer
class InitScreen extends Component<LoginProps> {
    render() {
        if (login.initFlag) { // 로그인 여부 판단
            setTimeout(() => {
                if (AuthService.getToken()) { // 유저 토큰 확인
                    this.props.navigation.navigate("Main");
                } else {
                    this.props.navigation.navigate("Login");
                }
            }, 1500); // 너무 빨리 화면 전환되는 것을 대비한 타이머 설정
        }

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eaeceb" }}>
                <Image style={{ width: "100%" }} resizeMode={"contain"} source={Splash} />
            </View>
        );
    }
}

export default InitScreen;
```

#### (2) react-navigation 설정

아래와 같은 구조에서 createAppContainer 하위의 createSwitchNavigator의 첫번째 인자 옵션에 스플래쉬 스크린 컴포넌트를 추가해주고, 두번째 인자 옵션으로 initialRouteName으로 스플래쉬 스크린을 지정

```js
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "screens/SplashScreen"; // 위에서 만든 스플래쉬 스크린 컴포넌트
import MainTabNavigator from "./MainTabNavigator";
...

export default createAppContainer(
    createSwitchNavigator(
        {
            Init: SplashScreen,
            Main: MainTabNavigator,
            ...
        },
        {
            initialRouteName: "Init"
        }
    )
);
```