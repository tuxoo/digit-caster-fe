import React from 'react';
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import Calculator from "./component/Calculator";

const theme = extendTheme({
    fonts: {
        body: `'Raleway', sans-serif,`
    },
})

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Calculator/>
        </ChakraProvider>
    );
}

export default App;
