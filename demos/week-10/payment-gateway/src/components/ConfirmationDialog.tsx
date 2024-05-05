import { useState } from "react";
import Dialog from "./Dialog";
import SuccessDialog from "./SuccessDialog";
import PaymentOptions from "../types/PaymentOptions";
// import { DetailedHTMLProps, HTMLAttributes } from "react";

type ConfirmationDialogProps = {
    onClickNo: () => void;
    paymentOption: PaymentOptions;
};

const ConfirmationDialog = (props: ConfirmationDialogProps) => {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    return showSuccessDialog ? (
        <SuccessDialog
            onClose={props.onClickNo}
            paymentOption={props.paymentOption}
        />
    ) : (
        <Dialog>
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <h3>Proceed to complete the payment?</h3>
                <button className="btn btn-cancel" onClick={props.onClickNo}>
                    No
                </button>
                <button
                    className="btn btn-confirm"
                    onClick={() => setShowSuccessDialog(true)}
                >
                    Yes
                </button>
            </div>
        </Dialog>
    );
};

export default ConfirmationDialog;
