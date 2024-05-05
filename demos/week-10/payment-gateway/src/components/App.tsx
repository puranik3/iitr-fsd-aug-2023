import Menu from "./Menu";

import "./App.css";

// A component represents some part of the UI
// A class / function (preferred) used to define it
// type AppProps = {
//     title: string;
//     message: string;
// };

// const App = (props: AppProps) => {
//     console.log(props);

//     return (
//         <div id="message">
//             {props.message} <strong title={props.title}>React</strong>
//         </div>
//     );
// };

const App = () => {
    return (
        <div className="app">
            <h1 className="app-title">
                Choose your mode of payment and complete the purchase
            </h1>
            <Menu />
        </div>
    );
};

export default App;
