import PaymentOptions from "../types/PaymentOptions";
import Dialog from "./Dialog";

import "./SuccessPayment.css";

type SuccessDialogProps = {
    onClose: () => void;
    paymentOption: PaymentOptions;
};

const SuccessDialog = (props: SuccessDialogProps) => {
    return (
        <Dialog>
            <div style={{ textAlign: "center" }}>
                <h1>Your Payment of Rs 5000 is Successful!!!</h1>
                <div>Your payment was done through {props.paymentOption}</div>
                <button className="btn btn-close" onClick={props.onClose}>
                    Close
                </button>
            </div>
        </Dialog>
    );
};

export default SuccessDialog;
