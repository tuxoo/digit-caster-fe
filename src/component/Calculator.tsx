import React from "react";
import {Box, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import CalcButton from "./CalcButton";
import CalcPanel from "./CalcPanel";
import {useAppDispatch, useAppSelector} from "../hook/redux";
import CalcEraser from "./CalcEraser";
import {calcActions} from "../store/slice/calculator";
import {getResultAsync} from "../store/slice/calculator/async-thunk";
import CopyMark from "./CopyMark";
import Label from "./Label";

const Calculator = () => {
    const dispatch = useAppDispatch()
    const {currentNum, previousNum, operation} = useAppSelector(state => state.calc)

    const handleResult = async () => {
        if (currentNum !== '' && previousNum !== '') {
            await dispatch(getResultAsync({
                previousNum: Number(previousNum),
                currentNum: Number(currentNum),
                operation: operation
            }))
        }
    }

    return (
        <Box bgGradient={'linear(to-b, orange.100, purple.300)'}>
            <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
                <Flex direction='column' bgColor='white' boxShadow='xl' p={4} rounded={10}>
                    <Grid
                        h='535px'
                        w='310px'
                        templateRows='repeat(4, 2fr)'
                        templateColumns='repeat(4, 2fr)'
                        gap={2}
                    >
                        <GridItem colSpan={2} h='16'>
                            <Flex h='full' width='full' direction='column' justifyContent='start' alignItems='end'>
                                <Flex h='full' width='full' justifyContent='start' alignItems='end'>
                                    <Text fontSize='sm'>
                                        {previousNum}
                                    </Text>
                                </Flex>
                                <Flex h='full' width='full' justifyContent='start' alignItems='start'>
                                    <Text fontSize='sm'>
                                        {operation === '=' ? '' : operation}
                                    </Text>
                                </Flex>
                            </Flex>
                        </GridItem>

                        <GridItem colSpan={2} h='16'>
                            <Label path={'/static/logo.png'}/>
                        </GridItem>

                        <GridItem colSpan={3} h='16'>
                            <CalcPanel val={currentNum} handle={event => {
                                dispatch(calcActions.type(event.target.value))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16' bg='transparent'>
                            <CalcEraser
                                clickHandle={() => {
                                    dispatch(calcActions.remove())
                                }}
                                doubleClickHandle={() => {
                                    dispatch(calcActions.clear())
                                }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'-'} handle={() => {
                                dispatch(calcActions.setOperation('-'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'+'} handle={() => {
                                dispatch(calcActions.setOperation('+'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'/'} handle={() => {
                                dispatch(calcActions.setOperation('/'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'*'} handle={() => {
                                dispatch(calcActions.setOperation('*'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'7'} handle={() => {
                                dispatch(calcActions.add('7'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'8'} handle={() => {
                                dispatch(calcActions.add('8'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'9'} handle={() => {
                                dispatch(calcActions.add('9'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'^'} handle={() => {
                                dispatch(calcActions.setOperation('^'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'4'} handle={() => {
                                dispatch(calcActions.add('4'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'5'} handle={() => {
                                dispatch(calcActions.add('5'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'6'} handle={() => {
                                dispatch(calcActions.add('6'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'???'} handle={() => {
                                dispatch(calcActions.setOperation('%'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'1'} handle={() => {
                                dispatch(calcActions.add('1'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'2'} handle={() => {
                                dispatch(calcActions.add('2'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'3'} handle={() => {
                                dispatch(calcActions.add('3'))
                            }}/>
                        </GridItem>

                        <GridItem rowSpan={2} colSpan={1}>
                            <CalcButton name={'='} handle={() => handleResult()}/>
                        </GridItem>

                        <GridItem colSpan={2} h='16'>
                            <CalcButton name={'0'} handle={() => {
                                dispatch(calcActions.add('0'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'.'} handle={() => {
                                dispatch(calcActions.add('.'))
                            }}/>
                        </GridItem>

                        <GridItem colSpan={4} h='10'>
                            <CopyMark
                                text={'?? 2022 DigitCaster.com'}
                            />
                        </GridItem>
                    </Grid>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Calculator