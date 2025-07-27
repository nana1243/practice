import React, {useCallback, useEffect} from 'react';
import TodoHeader from "./TodoHeader";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";


function Todo() {
    console.log('this is todo component');
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodo = useCallback(
        (text: string) => {
            const newTodo: Todo = {
                id: Date.now(),
                text,
                completed: false
            };
            setTodos((prevTodo)=>{
                return [...prevTodo, newTodo];
            });
        },
        [],
    );

    const toggleTodo = useCallback(
        (id:number) => {
            setTodos((prevTodos) =>{
                return prevTodos.map(todo=>
                    todo.id === id ? {...todo , completed: !todo.completed } : todo
                )
            })

        },
        [],
    );


    const deleteTodo = useCallback(
        (id:number)=> {
            setTodos((prevTodos) => {
                return prevTodos.filter(todo => todo.id !== id);
            });


        },[])

    const editTodo = useCallback((id:number, newText:string)=> {
        setTodos((prevTodo)=> {
            return prevTodo.map(data=> {
                return data.id === id ? {...data, text: newText} : data;
            })
        })

    },[])


    useEffect(()=> {
        const randomTodos :Todo[] = Array.from(
            {length:2000},
            (_, index) => ({
                id: index + 1,
                text: `Todo ${index + 1}`,
                completed: false
            })
        )
        setTodos(randomTodos);
    },[])

    return (
        <div className="todo">
            <TodoHeader/>
            <TodoEditor addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </div>
    );
}

export default Todo;