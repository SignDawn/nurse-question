import { useState } from "react";

export default ({ content }: { content: string }) => {
    const answers = getAnswer(content);
    const questions = getQuestions(content);

    const [isQuerys, setIsQuerys] = useState<boolean[]>([]);

    return (
      <>
        {questions.map((question, index) => {
          return (
            <>
              <div>{question}</div>
              <button
                onClick={() =>
                  setIsQuerys((old) => {
                    const newArr = [...old];
                    newArr[index] = true;
                    return newArr;
                  })
                }
              >
                查看答案
              </button>
              {isQuerys[index] && <h3>{answers[index]}</h3>}
            </>
          );
        })}
      </>
    );
};

/**
 *
 * @param pA 段落 A
 */
function getAnswer(pA: string) {
  const answer = pA.split("答案")[1];

  const [not, ...allAnswers] = answer.split("．");
  return allAnswers.map((item) => item[0]);
}

/**
 * 通过 A 的段落，得到题目
 * @param pA 段落 A
 */
function getQuestions(pA: string) {
  const [not, ...questions] = pA.split("（   ）");
  console.log("questions", questions);

  return questions;
}
