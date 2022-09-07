import React from "react";
import {Box, Flex, Grid, GridItem} from "@chakra-ui/react";
import CalcButton from "./CalcButton";
import Label from "./Label";
import CalcPanel from "./CalcPanel";
import CalcProgress from "./CalcProgress";

const Calculator = () => {


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
                            <CalcPanel/>
                        </GridItem>

                        <GridItem colSpan={1} h='16' bg='transparent'>
                            <CalcProgress/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'-'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'+'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'/'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'*'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'7'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'8'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'9'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'^'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'4'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'5'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'6'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'%'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'1'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'2'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'3'}/>
                        </GridItem>

                        <GridItem rowSpan={2} colSpan={1}>
                            <CalcButton name={'='}/>
                        </GridItem>

                        <GridItem colSpan={2} h='16'>
                            <CalcButton name={'0'}/>
                        </GridItem>

                        <GridItem colSpan={1} h='16'>
                            <CalcButton name={'.'}/>
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