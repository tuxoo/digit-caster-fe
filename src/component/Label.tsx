import React from "react";
import {Flex, Img, Text} from "@chakra-ui/react";

interface LabelProps {
    path: string
}

const Label = ({path}: LabelProps) => {
    return (
        <Flex
            h='full'
            width='full'
            justifyContent='end'
            alignItems='center'
            userSelect='none'
        >
            <Img
                src={path}
                alt=''/>
        </Flex>
    )
}

export default Label