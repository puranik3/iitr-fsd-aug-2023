import axios from "axios";
import IGenre from "../models/IGenre";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getGenresByLibraryId = async (id: string | number) => {
    const response = await axios.get<IGenre[]>(
        `${baseUrl}/libraries/${id}/genres`
    );
    return response.data;
};

export { getGenresByLibraryId };
