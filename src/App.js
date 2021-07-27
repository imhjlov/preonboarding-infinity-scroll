import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import List from "./components/List";
import InfinityScroll from "./utils/InfinityScroll";
import FetchMore from "./utils/FetchMore";

function App() {
  return (
    //* [방법1]
    //* 출제 키워드의 scroll event 를 사용하여 infinity scroll 구현
    //* scroll event는 반복적인 호출로 성능 저하가 발생할 수 있어서, throttle 적용
    // <>
    //   <GlobalStyle />
    //   <InfinityScroll>
    //     <List />
    //   </InfinityScroll>
    // </>

    //* [방법2] IntersectionObserver 적용
    //* scroll event의 문제점을 보안하고자, IntersectionObserver 기능을 활용하여 구현
    <>
      <GlobalStyle />
      <List />
      <FetchMore />
    </>
  );
}

export default App;
