import { Pagination } from "antd";
import { useState } from "react";
import { questions } from "../../assets/questions";
import MultipleContent from "./MultipleContent";

export default () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <MultipleContent content={allQuestions[page - 1]} />
      <Pagination
        current={page}
        onChange={setPage}
        total={allQuestions.length}
        pageSize={1}
      />
    </>
  );
};

const allQuestions = getMultipleQuestion();
function getMultipleQuestion() {
  return getTypeQuestions("X型题", "三、");
}

export function getTypeQuestions(startStr: string, endStr: string) {
  // const reg = /^A型题/g;
  // const array = [...questions.matchAll(reg)];
  // console.log('a', array);

  const [not, ...arr] = questions.split(startStr);
  return arr.map((i) => i.split(endStr)[0]);
}
