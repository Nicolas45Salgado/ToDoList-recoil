import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { SelectedTodoItemAtom } from "../atoms/TodoList/SelectedTodoItemAtom";
import LeftSideBarComponent from "../components/LeftSideBar";
import RightSideBarComponent from "../components/RightSideBar";
import TodoListComponent from "../components/TodoList";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;

const Home: NextPage = () => {
  const selectedTodo = useRecoilValue(SelectedTodoItemAtom);

  return (
    <ScreenWrapper>
      <LeftSideBarComponent />

      <TodoListComponent />

      {selectedTodo && <RightSideBarComponent />}
    </ScreenWrapper>
  );
};

export default Home;
