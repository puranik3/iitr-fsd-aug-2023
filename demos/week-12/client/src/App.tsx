import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import HomePage from "./pages/page";
import LibraryListPage from "./pages/libraries/page";
import LibraryDetailsPage from "./pages/libraries/[id]/page";
import AboutPage from "./pages/about/page";

function App() {
    return (
        <div>
            <Navigation />

            <Container className="my-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/libraries" element={<LibraryListPage />} />
                    <Route
                        path="/libraries/:id"
                        element={<LibraryDetailsPage />}
                    />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
