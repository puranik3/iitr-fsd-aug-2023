import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";

import { Todo, getTodoById, postTodo, putTodo } from "../../../services/todos";
import { getUsername } from "../../../services/auth";

type Params = {
    id: string | undefined;
};

const TodoComponent = () => {
    const { id } = useParams<Params>();
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState(() =>
        moment(new Date()).format("YYYY-MM-DD")
    );

    useEffect(() => {
        if (id === "-1") {
            return;
        }

        const helper = async () => {
            const data = await getTodoById(id as string);

            setDescription(data.description);
            setTargetDate(moment(data.targetDate).format("YYYY-MM-DD"));
        };

        helper();
    }, []);

    const validate = (values: Omit<Todo, "id" | "username">) => {
        let errors = {} as Todo;

        if (!values.description) {
            errors.description = "Enter a Description";
        } else if (values.description.length < 5) {
            errors.description = "Enter atleast 5 Characters in Description";
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid Target Date";
        }

        return errors;
    };

    const onSubmit = async (values: Omit<Todo, "id" | "username">) => {
        const todo = {
            id: id,
            username: getUsername(),
            description: values.description,
            targetDate: values.targetDate,
        } as Todo;

        if (id === "-1") {
            await postTodo(todo);
        } else {
            await putTodo(id as string, todo);
        }

        navigate("/todos");
    };

    return (
        <>
            <h1>Add / Edit a Todo</h1>
            <hr />
            <Formik
                initialValues={{ description, targetDate }}
                onSubmit={onSubmit}
                validateOnChange={true}
                validateOnBlur={true}
                validate={validate}
                enableReinitialize={true}
            >
                {() => (
                    <Form noValidate>
                        <ErrorMessage
                            name="description"
                            component="div"
                            className="alert alert-warning"
                        />
                        <ErrorMessage
                            name="targetDate"
                            component="div"
                            className="alert alert-warning"
                        />
                        <fieldset className="form-group mb-3">
                            <label>Description</label>
                            <Field
                                className="form-control"
                                type="text"
                                name="description"
                            />
                        </fieldset>
                        <fieldset className="form-group mb-3">
                            <label>Target Date</label>
                            <Field
                                className="form-control"
                                type="date"
                                name="targetDate"
                            />
                        </fieldset>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default TodoComponent;
