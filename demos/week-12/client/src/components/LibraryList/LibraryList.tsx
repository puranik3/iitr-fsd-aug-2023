import { useState, useEffect } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getLibraries } from "../../services/libraries";

const LibraryList = () => {
    const [loading, setLoading] = useState(true);
    const [libraries, setLibraries] = useState([]);

    useEffect(() => {
        const helper = async () => {
            const libraries = await getLibraries();
            setLibraries(libraries);
            setLoading(false);
        };

        helper();
    }, []);

    return (
        <>
            <h1>List of libraries</h1>
            <hr />
            <div className="text-center">
                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
                {!loading && (
                    <Row xs={1} lg={3}>
                        {libraries.map(
                            ({ name, rating, noOfRatings, location, id }) => (
                                <Col className="my-3">
                                    <Card key={id}>
                                        <Card.Img variant="top" src={``} />
                                        <Card.Body>
                                            <Card.Title className="d-flex justify-content-between">
                                                <div>
                                                    {name}
                                                    <div className="text-xs">
                                                        {/*<Rating rating={rating} />*/}
                                                        {rating} ({noOfRatings}{" "}
                                                        rated)
                                                    </div>
                                                </div>
                                                <div>
                                                    <NavLink
                                                        to={`/libraries/${id}`}
                                                        className="btn btn-primary btn-sm"
                                                    >
                                                        More
                                                    </NavLink>
                                                </div>
                                            </Card.Title>
                                            <Card.Text>
                                                <span>
                                                    {" "}
                                                    <b>Address: </b>
                                                </span>
                                                {location}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        )}
                    </Row>
                )}
            </div>
        </>
    );
};

export default LibraryList;
