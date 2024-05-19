import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import HomePage from "./pages/page";
import LibraryListPage from "./pages/libraries/page";
import LibraryDetailsPage from "./pages/libraries/[id]/page";

function App() {
    return (
        <div>
            <Navigation />

            <Container className="my-4">
                <Switch>
                    <Route path="/libraries/:id">
                        <LibraryDetailsPage />
                    </Route>
                    <Route path="/libraries">
                        <LibraryListPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
