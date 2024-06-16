import { Link, useParams } from "react-router-dom";

type Params = {
    username: string | undefined;
};

const WelcomeComponent = () => {
    const { username } = useParams<Params>();

    return (
        <>
            <h1>Welcome!</h1>
            <p>Welcome {username}. Click <Link to="/todos">here</Link> to manage your todos </p>
        </>
    );
};

export default WelcomeComponent;
