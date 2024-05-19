import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>
            <h1 className="h2">
                <FontAwesomeIcon icon={faBook} className="me-2" />
                Introduction to Application
            </h1>
            <p>
                This website accumulates the libraries in India and some of the
                popular genres of books they have. The details come from a json
                server and the website uses this data. We can also update the
                data in the server which is not covered in this app.
            </p>
        </div>
    );
};

export default Home;
