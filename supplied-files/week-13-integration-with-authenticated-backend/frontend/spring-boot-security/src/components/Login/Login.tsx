import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import { useNotifications } from "../../contexts/notifications";

import { login as LoginService } from "../../services/auth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { addNotification } = useNotifications();

    const navigate = useNavigate();

    const login = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await LoginService(username, password);

            navigate(`/welcome/${username}`);

            setUsername("");
            setPassword("");

            addNotification({
                variant: "success",
                autohide: true,
                header: <strong className="me-auto">Success!</strong>,
                body: (
                    <span className="text-light">
                        Add things to do and track your todos based on their
                        deadlines.
                    </span>
                ),
            });
        } catch (error) {
            addNotification({
                variant: "danger",
                autohide: true,
                header: <strong className="me-auto">Error!</strong>,
                body: (
                    <span className="text-light">
                        {(error as Error).message}
                    </span>
                ),
            });
        }
    };

    return (
        <>
            <h1>Login</h1>
            <hr />
            <Form onSubmit={login}>
                <Form.Group
                    className="mb-4 col-12 col-sm-8 col-md-6 col-lg-4"
                    controlId="username"
                >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="johndoe"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-4 col-12 col-sm-8 col-md-6 col-lg-4"
                    controlId="password"
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Login
                </Button>
            </Form>
        </>
    );
};

export default Login;
