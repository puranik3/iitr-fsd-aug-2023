import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logout } from "../../services/auth";

const Navigation = () => {
    const loggedIn = isUserLoggedIn();
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container>
                {loggedIn && (
                    <Navbar.Brand to="/todos" as={NavLink}>
                        Todos
                    </Navbar.Brand>
                )}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!loggedIn && (
                            <Nav.Link as={NavLink} to="/login">
                                Login
                            </Nav.Link>
                        )}
                        {loggedIn && (
                            <Nav.Link
                                onClick={() => {
                                    logout();
                                    navigate("/");
                                }}
                            >
                                Logout
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
