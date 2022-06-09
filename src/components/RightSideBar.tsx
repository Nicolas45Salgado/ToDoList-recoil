import React, { useEffect, useId, useState } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { SelectedTodoItemAtom } from "../atoms/TodoList/SelectedTodoItemAtom";
import { TodoListAtom } from "../atoms/TodoList/TodoListAtom";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
  height: 100vh;
  background-color: #f5f5f5;
  border-right: 1px solid #e9e9e9;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const EditButton = styled.button`
  padding: 10px;
  background-color: #015cf7;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #0040ff;
  }
  &:active {
    background-color: #0040ff;
  }
`;

const DeleteButton = styled.button`
  padding: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
  }
  &:active {
    background-color: #ff0000;
  }
`;

interface IRightSideBarComponent {}

export default function RightSideBarComponent(props: IRightSideBarComponent) {
  const selectedTodo = useRecoilValue(SelectedTodoItemAtom);
  const resetSelectedTodo = useResetRecoilState(SelectedTodoItemAtom);

  const setTodoList = useSetRecoilState(TodoListAtom);
  const todoList = useRecoilValue(TodoListAtom);

  const [newText, setNewText] = useState<string>();
  const inputId = useId();

  useEffect(() => {
    if (!selectedTodo) return;
    setNewText(selectedTodo.text);
  }, [selectedTodo]);

  const handleEditButtonClick = () => {
    if (!selectedTodo) return;

    setTodoList((prevTodoList) =>
      prevTodoList.map((t) => {
        if (t.id === selectedTodo.id) {
          return selectedTodo;
        }
        return t;
      })
    );
    resetSelectedTodo();
  };

  const handleDeleteButtonClick = () => {
    if (!selectedTodo) return;

    todoList.forEach((todoitem) => {
      console.log(todoitem.id, selectedTodo.id);
      console.log(todoitem.text, selectedTodo.text);
    });

    setTodoList((prevTodo) => prevTodo.filter((t) => t.id !== selectedTodo.id));
    resetSelectedTodo();
  };

  return (
    <SidebarContainer>
      <EditContainer>
        <InputLabel htmlFor={inputId}>Editar</InputLabel>
        <Input
          id={inputId}
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <EditButton onClick={handleEditButtonClick}>Editar</EditButton>
      </EditContainer>

      <DeleteButton onClick={handleDeleteButtonClick}>Deletar</DeleteButton>
    </SidebarContainer>
  );
}
