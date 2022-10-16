import { getQuestions } from "../../Content";
import QuestionItem from "../../QuestionItem";

export default ({ content }: { content: string }) => {
  const questions = getQuestions(content);
  const answers = getMutipleAnswers(content);

  return (
    <>
      {questions.map((question, index) => {
        return (
          <QuestionItem
            key={question}
            question={question}
            answer={answers[index]}
          />
        );
      })}
    </>
  );
};

function getMutipleAnswers(p: string) {
  let answer = p.split("答案")[1];
  answer = answer.replace(/\./g, "．");
  const [not, ...allAnswers] = answer.split(/\d+．/);
  return allAnswers.map((item) => item);
}
