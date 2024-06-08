import axios from "axios";
import { getUsername } from "./auth";
import { NS } from "../types/utils";

type Todo = {
    id?: number;
    username: string;
    description: string;
    targetDate: string;
};

const jpaBaseUrl = process.env.REACT_APP_JPA_API_URL;

const getTodosBaseUrl = () => `${jpaBaseUrl}/users/${getUsername()}/todos`;

const getTodos = async () => {
    const response = await axios.get<Todo[]>(getTodosBaseUrl());
    return response.data;
};

const getTodoById = async (id: NS) => {
    const response = await axios.get<Todo>(`${getTodosBaseUrl()}/${id}`);
    return response.data;
};

const postTodo = async (todo: Todo) => {
    const response = await axios.post<Todo>(getTodosBaseUrl(), todo);
    return response.data;
};

const putTodo = async (id: NS, todo: Todo) => {
    const response = await axios.put(`${getTodosBaseUrl()}/${id}`, todo);
    return response.data;
};

const deleteTodo = async (id: NS) => {
    await axios.delete(`${getTodosBaseUrl()}/${id}`);
};

export type { Todo };
export { getTodos, getTodoById, postTodo, putTodo, deleteTodo };
