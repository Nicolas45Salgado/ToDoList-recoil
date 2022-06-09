import {atom} from 'recoil';
import { ITodo } from '../../interfaces/Todo.interface';


export const SelectedTodoItemAtom = atom<ITodo | null>({
  key: 'SelectedTodoItemAtom',
  default: null,
});