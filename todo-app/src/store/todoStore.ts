import {create} from "zustand/react";
import {devtools, persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface useTodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;

}


export const useTodoStore = create<useTodoStore>(
    devtools(persist(
        immer((set) => ({
            todos: [],
            addTodo: (text:string) => set((state) => {
                state.todos.push({
                    id: Date.now(),
                    text: text,
                    completed: false,
                } as Todo);
            }),
            removeTodo: (id:number) => set((state) => {
                state.todos = state.todos.filter(todo => todo.id !== id);
            }),
            toggleTodo: (id:number) => set((state) => {
                const todo = state.todos.find(todo => todo.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                }
            }),
            editTodo: (id:number, text:string) => set((state) => {
                const todo = state.todos.find(todo => todo.id === id);
                if (todo) {
                    todo.text = text;
                }
            })
        })),
        {
            name: "todo-storage", // unique name for the storage
        }

    )),{
        enabled: import.meta.env.MODE === 'development', // Enable devtools only if the environment variable is set
    }
)