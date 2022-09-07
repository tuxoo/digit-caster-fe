import React from "react";
import {Box} from "@chakra-ui/react";

interface CalcButtonProps {
    name: string,
    handle: (e: any) => void
}

const CalcButton = ({name, handle}: CalcButtonProps) => {
    return (
        <Box
            as='button'
            onClick={handle}
            h='full'
            width='full'
            bg='purple.200'
            fontSize='2xl'
            boxShadow='xl'
            justifyContent='center'
            rounded='10'
            _hover={{
                bg: `#B794F4`
            }}
            _active={{
                bg: `#B794F4`,
                transform: 'scale(0.95)',
            }}
        >
            {name}
        </Box>
    )
}

export default CalcButton