'use client'
import { ChakraProvider, StyleFunctionProps, ThemeConfig, extendTheme } from '@chakra-ui/react'
import React from 'react'

interface ThemeProps {
    children: React.ReactNode
}

const config: ThemeConfig   = {
  useSystemColorMode: false,
  initialColorMode: "dark"
}

const theme     = extendTheme({
    config,
    colors: {
      primary: "",
      btn: "#2f3137",
      text: "#ebebeb",
      bg: "#a0d7ff"
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          bgColor: 'bg',
          color: "text"
        }
      })
    },
    componentts: {
      Button: {
        variants: {
          'special': {
            bg: '#1991ff'
          }
        }
      }
    }
})

export default function Theme(props: ThemeProps) {
  return (
    <ChakraProvider theme={theme}>
        {
            props.children
        }
    </ChakraProvider>
  )
}
