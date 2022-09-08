import React from 'react';
import Calculator from "./component/Calculator";
import {Slide, ToastContainer} from "react-toastify";
import {injectStyle} from "react-toastify/dist/inject-style";

function App() {
    injectStyle()

    return (
        <>
            <ToastContainer
                draggable={false}
                transition={Slide}
                autoClose={1000}
            />
            <Calculator/>
        </>
    );
}

export default App;
