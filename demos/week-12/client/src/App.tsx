import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import HomePage from "./pages/page";
import LibraryListPage from "./pages/libraries/page";

function App() {
    return (
        <div>
            <Navigation />

            <Container className="my-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/libraries" element={<LibraryListPage />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
