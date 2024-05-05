import PaymentOptions from "../types/PaymentOptions";
import { useState } from "react"; // "hooks" are a set of methods - begin with "use"

import NetBanking from "./NetBanking";
import Card from "./Card";
import UPI from "./UPI";

import "./Menu.css";

// we have a list of strings
const options = [
    PaymentOptions.CARD,
    PaymentOptions.NETBANKING,
    PaymentOptions.UPI,
];

// const reviews = [
//     {
//         id: 123,
//         title: 'Great product'
//     },
//     {
//         id: 234
//     }
// ]

console.log(options);

// we need this list of buttons - let us use map() to generate this array of buttons
// const buttons = [
//     <button className="payment-option payment-option-selected">
//         Debit/Credit card
//     </button>,
//     <button className="payment-option">Net banking</button>,
//     <button className="payment-option">UPI</button>,
// ];

const Menu = () => {
    const [selectedOption, setSelectedOption] = useState(PaymentOptions.CARD);

    const buttons = options.map((option) => (
        <button
            className={
                "payment-option" +
                (option === selectedOption ? " payment-option-selected" : "")
            }
            key={option}
            onClick={() => setSelectedOption(option)}
        >
            {option}
        </button>
    ));

    return (
        <div className="menu">
            <div className="payment-options">{buttons}</div>
            <div className="payment-details">
                {selectedOption === PaymentOptions.CARD && <Card />}
                {selectedOption === PaymentOptions.NETBANKING && <NetBanking />}
                {selectedOption === PaymentOptions.UPI && <UPI />}
            </div>
        </div>
    );
};

export default Menu;
