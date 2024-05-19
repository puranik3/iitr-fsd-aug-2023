import axios from "axios";
import ImageSource from "../models/ImageSource";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getImageSource = async () => {
    const response = await axios.get<ImageSource[]>(`${baseUrl}/image-sources`);
    return response.data;
};

export default getImageSource;
