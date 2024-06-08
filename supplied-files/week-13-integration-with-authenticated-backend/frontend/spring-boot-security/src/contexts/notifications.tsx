import { createContext, ReactNode, useContext, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

type Notification = {
    id?: string;
    header: ReactNode;
    body: ReactNode;
    variant?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "dark"
        | "light";
    autohide?: boolean;
    delay?: number;
    show?: boolean;
    onClose?: () => void;
};

type NotificationsContextType = {
    addNotification: (notification: Notification) => void;
};

const NotificationsContext = createContext<NotificationsContextType>({
    addNotification: () => {}, // default to noop
});

const NotificationsProvider = ({ children }: { children: ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (notification: Notification) => {
        setNotifications((notifications) => [
            ...notifications,
            {
                id: uuidv4(),
                show: true,
                variant: "primary",
                delay: 5000,
                ...notification,
            },
        ]);
    };

    const closeNotification = (notification: Notification) => {
        setNotifications((notifications) =>
            notifications.map((n) =>
                n === notification ? { ...n, show: false } : n
            )
        );
    };

    const value = {
        addNotification,
    };

    return (
        <NotificationsContext.Provider value={value}>
            {children}
            <div
                aria-live="polite"
                aria-atomic="true"
                className="position-fixed"
                style={{
                    minHeight: "320px",
                    minWidth: "300px",
                    top: 0,
                    right: 0,
                    pointerEvents: "none",
                }}
                key="notifications-wrapper"
            >
                <ToastContainer
                    position="top-end"
                    className="p-3"
                    style={{ zIndex: 1 }}
                >
                    {notifications.map((n) => {
                        const props = {
                            bg: n.variant,
                            show: n.show,
                            delay: n.delay,
                            autohide: n.autohide,
                            onClose: () => {
                                closeNotification(n);
                                n.onClose && n.onClose();
                            },
                        };

                        return (
                            <Toast key={n.id} {...props}>
                                <Toast.Header>{n.header}</Toast.Header>
                                <Toast.Body>{n.body}</Toast.Body>
                            </Toast>
                        );
                    })}
                </ToastContainer>
            </div>
        </NotificationsContext.Provider>
    );
};

const useNotifications = () => useContext(NotificationsContext);

export type { Notification, NotificationsContextType };
export { NotificationsProvider, useNotifications };
