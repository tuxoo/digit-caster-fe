import React from "react";
import {Box, Input} from "@chakra-ui/react";

const CalcPanel = () => {
    return (
        <Box
            as='button' h='16'
            width='full'
            justifyContent='center'
            rounded='6'
        >
            <Input isReadOnly={true} placeholder='0' focusBorderColor='purple.300' size='lg'/>
        </Box>
    )
}

export default CalcPanel