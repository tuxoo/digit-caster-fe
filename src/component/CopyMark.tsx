import React from "react";
import {Flex, Text} from "@chakra-ui/react";

interface LabelProps {
    text: string
}

const CopyMark = ({text}: LabelProps) => {
    return (
        <Flex
            h='full'
            width='full'
            justifyContent='start'
            alignItems='center'
            userSelect='none'
        >
            <Text>{text}</Text>
        </Flex>
    )
}

export default CopyMark