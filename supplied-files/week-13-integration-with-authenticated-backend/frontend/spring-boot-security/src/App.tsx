import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import LoginPage from "./pages/login/page";
import WelcomePage from "./pages/welcome/page";
import TodosListPage from "./pages/todos/page";
import TodoAddEditPage from "./pages/todos/[id]/page";

import { NotificationsProvider } from "./contexts/notifications";

const App = () => {
    return (
        <NotificationsProvider>
            <Navigation />

            <Container className="my-5">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/welcome/:username"
                        element={<WelcomePage />}
                    />
                    <Route path="/todos" element={<TodosListPage />} />
                    <Route path="/todos/:id" element={<TodoAddEditPage />} />
                </Routes>
            </Container>
        </NotificationsProvider>
    );
};

export default App;
