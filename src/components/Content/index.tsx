import { Fragment, useState } from "react";

export default ({ content }: { content: string }) => {
  const answers = getAnswer(content);
  const questions = getQuestions(content);

  const [isQuerys, setIsQuerys] = useState<boolean[]>([]);

  return (
    <>
      {questions.map((question, index) => {
        return (
          <Fragment key={question}>
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
          </Fragment>
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
  let answer = pA.split("答案")[1];
  answer = answer.replace(/\./g, "．");
  const [not, ...allAnswers] = answer.split("．");
  return allAnswers.map((item) => item[0]);
}

/**
 * 通过一组选择题段落字符串，得到选择题数组
 * @param p 段落
 */
export function getQuestions(p: string) {
  const question = p.split("答案")[0];
  const [not, ...questions] = question.split("（   ）");
  return questions;
}
