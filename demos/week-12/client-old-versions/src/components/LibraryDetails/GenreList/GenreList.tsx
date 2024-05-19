import { useState, useEffect } from "react";
import { Alert, Spinner, ListGroup } from "react-bootstrap";
import { getGenresByLibraryId } from "../../../services/genres";
import IGenre from "../../../models/IGenre";
import GenreListItem from "./GenreListItem/GenreListItem";

type Props = {
    id: string;
};

const GenreList = ({ id }: Props) => {
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const helper = async () => {
            try {
                const genres = await getGenresByLibraryId(id);
                setGenres(genres);
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
            <h2>List of famous Genres in the library</h2>
            <hr />
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
                <ListGroup>
                    {genres.map((genre) => (
                        <GenreListItem genre={genre} key={genre.id} />
                    ))}
                </ListGroup>
            )}
        </>
    );
};

export default GenreList;
