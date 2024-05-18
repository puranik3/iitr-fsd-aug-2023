import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getLibraries = async () => {
    const response = await axios.get(`${baseUrl}/libraries`);
    return response.data;
};

export { getLibraries };
