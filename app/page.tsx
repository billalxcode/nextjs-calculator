'use client'
import { Box, Button, Container, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React, { Component } from 'react'

interface HomeState {
  result: string
}

export default class Home extends Component<{}, HomeState> {
  declare logicLists: Array<string>

  constructor(props: any) {
    super(props)

    this.logicLists = [
      "+",
      "-",
      "*",
      "/"
    ]
    this.state = {
      result: "0"
    }
  }

  detectLogicInDisplay(i: string) {
    this.logicLists.forEach(v => {
      if (!this.state.result.startsWith(v)) {
        return true
      }
    })
    return false
  }

  detectLogicLoop(i: string) {

  }

  setter(v: string) {
    let result = this.state.result
    if (result.startsWith("0")) {
      if (
        !this.state.result.includes("+") ||
        !this.state.result.includes("-") ||
        !this.state.result.includes("/") ||
        !this.state.result.includes("*")
      ) {
        result = v
      }
    } else {
      result = this.state.result + v
    }

    this.setState({
      result: result
    })
  }

  logic(v: string) {
    if (v == "clear") {
      this.setState({
        result: "0",
      })
    } else if (v == "calc") {
      if (
        this.state.result.includes("+") ||
        this.state.result.includes("-") ||
        this.state.result.includes("/") ||
        this.state.result.includes("*")
      ) {
        const ev = eval(this.state.result)
        this.setState({
          result: String(ev)
        })
      }
    } else if (v == "del") {
      const idx = this.state.result.length
      if (idx > 1) {
        const res = this.state.result.slice(0, idx - 1)
        this.setState({
          result: res
        })
      } else {
        this.setState({
          result: "0"
        })
      }
    } else if (v == "percentage") {
      let ev = this.state.result
      ev += "/100"
      this.setState({
        result: String(eval(ev))
      })
    }
  }

  render() {
    return (
      <Flex justify={"center"} my={200} alignItems={"center"} flexDirection={"column"}>
        <Box
          w={466}
          height={"full"}
          bgColor={"#141c22"}
          borderRadius={10}
          boxShadow={"xl"}
          px={5}
        >
          <VStack>
            <Box
              width={"full"}
              p={5}
            >
              <Text fontSize={50} fontWeight={900} textAlign={"end"} verticalAlign={"bottom"}>
                {this.state.result}
              </Text>
            </Box>
            <VStack mt={100} mb={30}>
              <HStack>
                <Button
                  onClick={() => this.logic("clear")}
                  w={100}
                  h={100}>AC</Button>
                <Button
                  onClick={() => this.logic("del")}
                  w={100}
                  h={100}>DEL</Button>
                <Button
                  onClick={() => this.logic("percentage")}
                  w={100}
                  h={100}>%</Button>
                <Button
                  onClick={() => this.setter("/")}
                  w={100}
                  h={100}>/</Button>
              </HStack>
              <HStack>
                <Button
                  onClick={() => this.setter("7")}
                  w={100}
                  h={100}>7</Button>
                <Button
                  onClick={() => this.setter("8")}
                  w={100}
                  h={100}>8</Button>
                <Button
                  onClick={() => this.setter("9")}
                  w={100}
                  h={100}>9</Button>
                <Button
                  onClick={() => this.setter("*")}
                  w={100}
                  h={100}>*</Button>
              </HStack>
              <HStack>
                <Button
                  onClick={() => this.setter("4")}
                  w={100}
                  h={100}>4</Button>
                <Button
                  onClick={() => this.setter("5")}
                  w={100}
                  h={100}>5</Button>
                <Button
                  onClick={() => this.setter("6")}
                  w={100}
                  h={100}>6</Button>
                <Button
                  onClick={() => this.setter("-")}
                  w={100}
                  h={100}>-</Button>
              </HStack>
              <HStack>
                <Button
                  onClick={() => this.setter("1")}
                  w={100}
                  h={100}>1</Button>
                <Button
                  onClick={() => this.setter("2")}
                  w={100}
                  h={100}>2</Button>
                <Button
                  onClick={() => this.setter("3")}
                  w={100}
                  h={100}>3</Button>
                <Button
                  onClick={() => this.setter("+")}
                  w={100}
                  h={100}
                  bgColor={"#1991ff"}
                  _hover={{
                    bgColor: "#0980ed"
                  }}
                  _active={{
                    bgColor: "#2d98fa"
                  }}
                >+</Button>
              </HStack>
              <HStack>
                <Button
                  onClick={() => this.setter("0")}
                  w={210}
                  h={100}>0</Button>
                <Button
                  onClick={() => this.setter(".")}
                  w={100}
                  h={100}>.</Button>
                <Button
                  onClick={() => this.logic("calc")}
                  w={100}
                  h={100}
                  size={"lg"}
                  bgColor={"#1991ff"}
                  _hover={{
                    bgColor: "#0980ed"
                  }}
                  _active={{
                    bgColor: "#2d98fa"
                  }}
                >=</Button>
              </HStack>
            </VStack>
          </VStack>
        </Box>
        <Text color={"btn"} my={4}>Copyright &copy; 2024 Billal Fauzan</Text>
      </Flex>
    )
  }
}
