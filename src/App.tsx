import { useMemo, useState } from "react";
import "./App.css";
import { questions } from "./assets/questions";
import { Pagination, Tabs } from "antd";
import Content from "./components/Content";
import MultipleTab, { getTypeQuestions } from "./components/MultipleTab";

function App() {
  const aArr = getAQuestion(questions);
  const [page, setPage] = useState(1);

  const index = useMemo(() => page - 1, [page]);

  return (
    <Tabs defaultActiveKey="choose">
      <Tabs.TabPane tab="单选" key="choose">
        <Content content={aArr[index]} />
        <Pagination
          current={page}
          onChange={setPage}
          total={aArr.length}
          pageSize={1}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="多选" key="Multiple">
        <MultipleTab />
      </Tabs.TabPane>
    </Tabs>
  );
}

function getAQuestion(questions: string) {
  return getTypeQuestions("A型题", "（二）X型题");
}

export default App;
