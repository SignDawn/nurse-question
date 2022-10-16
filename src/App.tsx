import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { questions } from "./assets/questions";
import { Pagination } from "antd";
import Content from "./components/Content";

function App() {
  const aArr = getAQuestion(questions);
  const [page, setPage] = useState(1);

  const index = useMemo(() => page - 1, [page]);

  return (
    <>
      <Content content={aArr[index]} />
      <Pagination
        current={page}
        onChange={setPage}
        total={aArr.length}
        pageSize={1}
      />
    </>
  );
}

function getAQuestion(questions: string) {
  // const reg = /^A型题/g;
  // const array = [...questions.matchAll(reg)];
  // console.log('a', array);

  const [not, ...arr] = questions.split("A型题");
  const aArr = arr.map((i) => {
    return i.split("（二）X型题")[0];
  });

  return aArr;
}


export default App;
