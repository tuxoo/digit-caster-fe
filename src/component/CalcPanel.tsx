import React from "react";
import {Box, Input} from "@chakra-ui/react";

interface CalcPanelProps {
    val: string,
    handle: (e: any) => void
}

const CalcPanel = ({val, handle}: CalcPanelProps) => {
    return (
        <Box
            as='button' h='16'
            width='full'
            justifyContent='center'
            rounded='6'
        >
            <Input
                // isReadOnly={true}
                onChange={handle}
                placeholder='0'
                focusBorderColor='purple.300'
                size='lg'
                value={val}
            />
        </Box>
    )
}

export default CalcPanel