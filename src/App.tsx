import React from 'react';
import Calculator from "./component/Calculator";
import {Slide, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

function App() {
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
