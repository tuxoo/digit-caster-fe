import React, {useEffect} from "react";
import {Box, Flex, Grid, GridItem} from "@chakra-ui/react";
import CalcButton from "./CalcButton";
import Label from "./Label";
import CalcPanel from "./CalcPanel";
import {useAppSelector} from "../hook/redux";
import {useActions} from "../hook/action";

const Calculator = () => {
    const {add, type, remove, clear} = useActions()
    const {currentNum} = useAppSelector(state => state.calc)

    // useEffect(() => {
    //     console.log(currentNum)
    // }, [currentNum])

    return (
        <Box bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',
        ]}>
            <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
                <Flex direction='column' bgColor='white' boxShadow='xl' p={4} rounded={10}>
                    <Grid
                        h='480px'
                        w='300px'
                        templateRows='repeat(4, 2fr)'
                        templateColumns='repeat(4, 2fr)'
                        gap={2}
                    >

                        <GridItem colSpan={3} h='16'>
                            <CalcPanel val={currentNum} handle={event => {
                                type(event.target.value)
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16' bg='transparent'>
                            <Flex h='full' width='full' justifyContent='center' alignItems='center'>
                                <Box
                                    as='button'
                                    onClick={() => {
                                        remove()
                                    }}
                                    onDoubleClick={() => {
                                        clear()
                                    }}
                                    h='50%'
                                    width='50%'
                                    bg='transparent'
                                    fontSize='1xl'
                                >
                                    {'<<'}
                                </Box>
                            </Flex>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'-'} handle={() => {
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'+'} handle={() => {
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'/'} handle={() => {
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'*'} handle={() => {
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'7'} handle={() => {
                                add('7')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'8'} handle={() => {
                                add('8')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'9'} handle={() => {
                                add('9')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'^'} handle={() => {
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'4'} handle={() => {
                                add('4')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'5'} handle={() => {
                                add('5')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'6'} handle={() => {
                                add('6')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'%'} handle={() => {
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'1'} handle={() => {
                                add('1')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'2'} handle={() => {
                                add('2')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'3'} handle={() => {
                                add('3')
                            }}/>
                        </GridItem>

                        <GridItem rowSpan={2} colSpan={1}>
                            <CalcButton name={'='} handle={() => {
                            }}/>
                        </GridItem>

                        <GridItem colSpan={2} h='16'>
                            <CalcButton name={'0'} handle={() => {
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'.'} handle={() => {
                                add('.')
                            }}/>
                        </GridItem>

                        <GridItem colSpan={4} h='10'>
                            <Label text={'© 2022 DigitCaster.com'}/>
                        </GridItem>
                    </Grid>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Calculator