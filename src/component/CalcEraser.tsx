import {Box, Flex} from "@chakra-ui/react";
import React from "react";

interface CalcEraserProps {
    clickHandle: (e: any) => void
    doubleClickHandle: (e: any) => void
}

const CalcEraser = ({clickHandle, doubleClickHandle}: CalcEraserProps) => {
    return (
        <Flex h='full' width='full' justifyContent='center' alignItems='center'>
            <Box
                as='button'
                onClick={clickHandle}
                onDoubleClick={doubleClickHandle}
                h='50%'
                width='50%'
                bg='transparent'
                fontSize='1xl'
            >
                {'<<'}
            </Box>
        </Flex>
    )
}

export default CalcEraser