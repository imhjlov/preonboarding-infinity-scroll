import React, { useEffect } from "react";
import { commentsAPI } from "./api";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await commentsAPI(1);
      console.log(data);
    };

    fetchData();
  }, []);

  return <div></div>;
}

export default App;
