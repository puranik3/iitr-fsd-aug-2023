import { FormEvent, useState } from "react";
import { range } from "../utils";

import Dialog from "./Dialog";
import ConfirmationDialog from "./ConfirmationDialog";
import PaymentOptions from "../types/PaymentOptions";

// controlled and uncontrolled components
const Card = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvv, setCvv] = useState("");

    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    const date = new Date();
    const currentYear = date.getFullYear();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setShowConfirmationDialog(true);
    };

    const closeDialog = () => {
        setShowConfirmationDialog(false);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="cardNumber">
                                    Credit Card Number: (12 Digit number)
                                </label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="cardNumber"
                                    name="cardNumber"
                                    min="100000000000"
                                    max="999999999999"
                                    value={cardNumber}
                                    onChange={(event) =>
                                        setCardNumber(event.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="expiryDate">Expiry date</label>
                            </td>
                            <td>
                                <div id="expiryDate">
                                    <select
                                        id="month"
                                        name="month"
                                        value={month}
                                        onChange={(event) =>
                                            setMonth(event.target.value)
                                        }
                                    >
                                        <option value="">mm</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <select
                                        id="year"
                                        name="year"
                                        value={year}
                                        onChange={(event) =>
                                            setYear(event.target.value)
                                        }
                                    >
                                        <option value="">yyyy</option>
                                        {range(
                                            currentYear,
                                            currentYear + 10
                                        ).map((year) => (
                                            <option value={year} key={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="cvv">CVV Number</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="cvv"
                                    name="cvv"
                                    value={cvv}
                                    onChange={(event) =>
                                        setCvv(event.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-pay">Pay</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {showConfirmationDialog && (
                <ConfirmationDialog
                    onClickNo={closeDialog}
                    paymentOption={PaymentOptions.CARD}
                />
            )}
        </div>
    );
};

export default Card;
