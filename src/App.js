import React, { useEffect, useState } from "react";
import { commentsAPI } from "./api";
import List from "./components/List";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await commentsAPI(1);
      setComments(data);
    };

    fetchData();
  }, []);

  return <List comments={comments.length > 0 && comments} />;
}

export default App;
