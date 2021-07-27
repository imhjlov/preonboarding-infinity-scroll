import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import List from "./components/List";
import InfinityScroll from "./utils/InfinityScroll";
import FetchMore from "./utils/FetchMore";

function App() {
  return (
    //* [방법1] Scroll Event + Throttle 적용
    // <>
    //   <GlobalStyle />
    //   <InfinityScroll>
    //     <List />
    //   </InfinityScroll>
    // </>

    //* [방법2] IntersectionObserver 적용
    <>
      <GlobalStyle />
      <List />
      <FetchMore />
    </>
  );
}

export default App;
