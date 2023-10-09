// // src/store/modules/todoActions.ts

// import { useTodoState } from './todoState';
// import axios from 'axios';

// export const useTodoActions = (store = useTodoState()) => {
//   return {
//     async fetchTodos() {
//       try {
//         const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
//         store.todos = response.data;
//       } catch (error) {
//         console.error('Erro ao buscar todos:', error);
//       }
//     },
//   };
// };
