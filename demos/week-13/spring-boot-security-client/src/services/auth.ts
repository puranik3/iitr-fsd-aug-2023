import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const LS_KEY_USERNAME = "username";
const LS_KEY_TOKEN = "token";

axios.interceptors.request.use((config) => {
    if (isUserLoggedIn()) {
        config.headers.authorization = "Bearer " + getToken();
    }

    return config;
});

const login = async (username: string, password: string) => {
    const response = await axios.post(`${baseUrl}/authenticate`, {
        username,
        password,
    });

    const { token } = response.data;

    localStorage.setItem(LS_KEY_USERNAME, username);
    localStorage.setItem(LS_KEY_TOKEN, token);
};

const logout = () => {
    localStorage.removeItem(LS_KEY_USERNAME);
    localStorage.removeItem(LS_KEY_TOKEN);
};

const isUserLoggedIn = () => !!localStorage.getItem(LS_KEY_USERNAME);

const getUsername = () =>
    isUserLoggedIn() ? localStorage.getItem(LS_KEY_USERNAME) : "";

const getToken = () =>
    isUserLoggedIn() ? localStorage.getItem(LS_KEY_TOKEN) : "";

export { login, isUserLoggedIn, getUsername, getToken, logout };
