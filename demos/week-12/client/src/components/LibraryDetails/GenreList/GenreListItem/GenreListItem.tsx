import { Col, ListGroupItem, Row } from "react-bootstrap";
import IGenre from "../../../../models/IGenre";

const baseUrl = process.env.REACT_APP_BASE_URL;

type Props = {
    genre: IGenre;
};

const GenreListItem = ({ genre }: Props) => {
    return (
        <ListGroupItem>
            <Row key={genre.id} className="my-3">
                <Col xs={6} lg={3}>
                    <img
                        src={`${baseUrl}${genre.imageUrl}`}
                        alt={genre.name}
                        className="w-100"
                    />
                </Col>
                <Col xs={6} lg={9}>
                    <h5>{genre.name}</h5>
                    <div className="my-2 text-sm">{genre.description}</div>
                </Col>
            </Row>
        </ListGroupItem>
    );
};

export default GenreListItem;
