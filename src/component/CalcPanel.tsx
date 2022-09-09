import React from "react";
import {Flex, Input} from "@chakra-ui/react";

interface CalcPanelProps {
    val: string,
    handle: (e: any) => void
}

const CalcPanel = ({val, handle}: CalcPanelProps) => {
    return (
        <Flex
            h='full'
            width='full'
            justifyContent='center'
            alignItems='center'
            userSelect='none'
        >
            <Input
                onChange={handle}
                placeholder='0'
                fontSize='lg'
                focusBorderColor='purple.300'
                size='lg'
                value={val}
            />
        </Flex>
    )
}

export default CalcPanel