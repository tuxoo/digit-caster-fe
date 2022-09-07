import React from "react";
import {Box} from "@chakra-ui/react";

interface LabelProps {
    text: string
}

const Label = ({text}: LabelProps) => {
    return (
        <Box
            h='10'
            width='full'
            justifyContent='center'
            alignItems='center'
            rounded='6'
            pt='3'
        >
            {text}
        </Box>
    )
}

export default Label