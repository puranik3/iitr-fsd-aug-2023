import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, isUserLoggedIn } from "../../services/auth";

const Navigation = () => {
    const navigate = useNavigate();
    const isLoggedIn = isUserLoggedIn();

    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container>
                {isLoggedIn && (
                    <Navbar.Brand to="/todos" as={NavLink}>
                        Todos
                    </Navbar.Brand>
                )}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!isLoggedIn && (
                            <Nav.Link as={NavLink} to="/login">
                                Login
                            </Nav.Link>
                        )}
                        {isLoggedIn && (
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
