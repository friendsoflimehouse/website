import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  modes: {
    light: {
      background: '#000',
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
})