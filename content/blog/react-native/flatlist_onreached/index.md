---
title: "[ReactNative] FlatList의 onEndReached 이슈"
date: "2019-08-10"
category: "개발"
tags:
    - ReactNative
    - FlatList
    - InfinityScroll
    - onEndReached
    - onEndReachedThreshold
cover: ../react-native.jpg
---

React Native 에서 무한 스크롤을 구현할 수 있는 방법은 여러가지가 있는데 그 중 대표적인 한가지가 FlatList의 onEndReached를 이용해서 무한스크롤을 구현하는 방법이다.

```js
<FlatList
    ...
    onEndReached={() => console.log('get next page')}
    onEndReachedThreshold={0.5}
/>
```

-   onEndReached : 스크롤이 목록의 하단에 도달할시 액션 지정
-   onEndReachedThreshold : 목록의 가장 마지막 아이템의 어느 높이에 도달시 onEndReached이 수행되는지 지정 (값 : 0 ~ 1, 높을수록 빨리 onEndReached가 수행됨)


## Issue

문제는 스크롤이 onEndReachedThreshold에서 설정한 위치에 도달하게되면 onEndReached가 수행이 한번만 되는게 아니라 연속적으로 두번 수행된다.
( github 이슈에서는 스크롤이 끝까지 내려갔을때 바운스되는 효과 때문이라고 하지만 경우에 따라 FlatList의 renderItem 속성의 컴포넌트를 Pure Component로 사용하면 해당 현상이 안일어날 수 있는듯.. )

## Solution

따라서 한번만 실행되도록 처리해주어야되는데 여러가지 방법중 **throttle** 을 이용해서 onEndReached가 최대 1초에 1회만 수행할 수 있도록 했다.

```js
let endReachCall;
...
<FlatList
    ...
    onEndReached={() => {
        if (!endReachCall) {
            endReachCall = setTimeout(() => {
                console.log("get next page");
                endReachCall = false;
            }, 1000);
        }
    }}
/>
```
