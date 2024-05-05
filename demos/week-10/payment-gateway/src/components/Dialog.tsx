import { ReactNode } from "react";

import "./Dialog.css";

type DialogProps = {
    show: boolean;
    children: ReactNode;
};

const Dialog = (props: DialogProps) => {
    return props.show ? (
        <div className="dialog-overlay">
            <div className="dialog">{props.children}</div>
        </div>
    ) : null;
};

Dialog.defaultProps = {
    show: true,
};

export default Dialog;
