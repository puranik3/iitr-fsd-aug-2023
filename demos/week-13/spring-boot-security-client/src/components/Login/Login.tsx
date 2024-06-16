import { useState, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { login as loginSvc } from "../../services/auth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await loginSvc(username, password);

            navigate(`/welcome/${username}`);

            setUsername("");
            setPassword("");

            toast("Successfully logged in!", {
                autoClose: 5000,
                closeOnClick: true,
                type: "success",
            });
        } catch (error) {
            toast((error as Error).message, {
                autoClose: 5000,
                closeOnClick: true,
                type: "error",
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
