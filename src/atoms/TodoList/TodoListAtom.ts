import { atom } from 'recoil';
import { ITodo } from '../../interfaces/Todo.interface';
import { persistAtom } from '../persistAtom';


export const TodoListAtom = atom<ITodo[]>({
  key: 'TodoListAtom',
  default: [],
  effects: [persistAtom]
});