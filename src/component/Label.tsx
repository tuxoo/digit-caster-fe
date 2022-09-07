import React from "react";
import {Flex, Text} from "@chakra-ui/react";

interface LabelProps {
    text: string
}

const Label = ({text}: LabelProps) => {
    return (
        <Flex h='full' width='full' justifyContent='start' alignItems='center'>
            <Text>{text}</Text>
        </Flex>
    )
}

export default Label