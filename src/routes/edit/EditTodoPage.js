import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
    const { stateUpdaters } = useTodos();
    const { editTodo } = stateUpdaters;
    const params = useParams();
    const id = parseInt(params.id);
    return (
        <TodoForm
            label="Edita tu ToDo"
            submitText="Editar"
            submitEvent={(newtext) => editTodo(id, newtext)}
            inputValue={params.text}
        />
    )
}
export { EditTodoPage }