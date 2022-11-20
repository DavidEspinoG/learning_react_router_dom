import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
    return (
        <TodoForm
            label="Escribe tu nuevo ToDo"
            submitText="Añadir"
            submitEvent={() => console.log('nuevo todo')}
        />
    )
}
export { NewTodoPage }