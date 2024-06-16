import { useState, useEffect } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";

import { Todo, getTodos, deleteTodo } from "../../../services/todos";
import { NS } from "../../../types/utils";

const TodosList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);

    const refreshTodos = async () => {
        try {
            const todos = await getTodos();
            setTodos(todos);
        } catch (error) {
            toast((error as Error).message, {
                autoClose: 5000,
                closeOnClick: true,
                type: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshTodos();
    }, []);

    const deleteTodoClicked = async (id: NS) => {
        if (!window.confirm("Are you sure you want to proceed?")) {
            return;
        }

        try {
            await deleteTodo(id);

            toast("Successfully deleted the todo", {
                autoClose: 5000,
                closeOnClick: true,
                type: "success",
            });

            refreshTodos();
        } catch (error) {
            toast((error as Error).message, {
                autoClose: 5000,
                closeOnClick: true,
                type: "error",
            });
        }
    };

    const navigate = useNavigate();

    const addTodoClicked = () => {
        navigate(`/todos/-1`);
    };

    const updateTodoClicked = (id: NS) => {
        navigate(`/todos/${id}`);
    };

    return (
        <>
            <h1 className="d-flex justify-content-between align-items-center">
                Todos
                <Button variant="primary" onClick={addTodoClicked}>
                    Add
                </Button>
            </h1>
            <hr />
            {loading && (
                <div className="text-center my-5">
                    <Spinner />
                </div>
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>
                                {moment(todo.targetDate).format("YYYY-MM-DD")}
                            </td>
                            <td>
                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        updateTodoClicked(todo.id as NS)
                                    }
                                >
                                    Update
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() =>
                                        deleteTodoClicked(todo.id as NS)
                                    }
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default TodosList;
