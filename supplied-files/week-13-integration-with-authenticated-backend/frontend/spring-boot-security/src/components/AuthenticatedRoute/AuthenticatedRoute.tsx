import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "../../services/auth";

type Props = {
    children: ReactElement;
};

const AuthenticatedRoute = ({ children }: Props) => {
    if (isUserLoggedIn()) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default AuthenticatedRoute;
