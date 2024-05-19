import { ListGroupItem } from "react-bootstrap";
import IGenre from "../../../../models/IGenre";

const baseUrl = process.env.REACT_APP_BASE_URL;

type Props = {
    genre: IGenre;
};

const GenreListItem = ({ genre }: Props) => {
    return <ListGroupItem>{genre.name}</ListGroupItem>;
};

export default GenreListItem;
