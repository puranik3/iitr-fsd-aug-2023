import { useState, useEffect } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { getLibraries } from "../../services/libraries";

import LibraryListItem from "./LibraryListItem/LibraryListItem";
import ILibrary from "../../models/ILibrary";

import "./LibraryList.css";

const LibraryList = () => {
    const [loading, setLoading] = useState(true);
    const [libraries, setLibraries] = useState<ILibrary[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const helper = async () => {
            try {
                const libraries = await getLibraries();
                setLibraries(libraries);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        helper();
    }, []);

    return (
        <>
            <h1>List of libraries</h1>
            <hr />
            <div>
                {loading && (
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
                {!loading && error && (
                    <Alert variant="danger">{error.message}</Alert>
                )}
                {!loading && !error && (
                    <Row xs={1} lg={3}>
                        {libraries.map((library) => (
                            <Col className="my-3 d-flex">
                                <LibraryListItem library={library} />
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </>
    );
};

export default LibraryList;
