import { useState } from "react";

export default ({ question, answer }: { question: string; answer: string }) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  return (
    <>
      <div>{question}</div>
      <button onClick={() => setIsShowAnswer(!isShowAnswer)}>
        {isShowAnswer ? "隐藏" : "查看"}答案
      </button>
      {isShowAnswer && <h3>{answer}</h3>}
    </>
  );
};
