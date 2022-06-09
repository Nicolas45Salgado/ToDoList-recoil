import React, { useId, useState, MouseEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import Image from "next/image";

import LogoDrc from "../../public/images/logo-drc.png";
import { ITodo } from "../interfaces/Todo.interface";
import { useSetRecoilState } from "recoil";
import { TodoListAtom } from "../atoms/TodoList/TodoListAtom";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 400px;
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

const LogoDrConsultaContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const LogoDrConsulta = styled(Image)``;

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

const AddButton = styled.button`
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

const LOGO_HEIGHT = 20;
const LOGO_DRC_PROPORTION = 96 / 14;

interface ILeftSideBarComponent {}

export default function LeftSideBarComponent(props: ILeftSideBarComponent) {
  const [todoText, setTodoText] = useState("");
  const setTodoList = useSetRecoilState(TodoListAtom);

  const inputId = useId();

  const handleButtonClick = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { text: todoText, id: inputId },
    ]);
    setTodoText("");
  };

  const handleEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <SidebarContainer>
      <LogoDrConsultaContainer>
        <LogoDrConsulta
          src={LogoDrc}
          alt="logo dr. consulta"
          height={LOGO_HEIGHT}
          width={LOGO_HEIGHT * LOGO_DRC_PROPORTION}
        />
      </LogoDrConsultaContainer>
      <InputLabel htmlFor={inputId}>To Do</InputLabel>
      <Input
        id={inputId}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handleEnterClick}
      />
      <AddButton onClick={handleButtonClick}>Adicionar</AddButton>
    </SidebarContainer>
  );
}
