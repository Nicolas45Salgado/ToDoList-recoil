import {atom} from 'recoil';
import { ITodo } from '../../interfaces/Todo.interface';

export const TodoListAtom = atom<ITodo[]>({
  key: 'TodoListAtom',
  default: [],
});