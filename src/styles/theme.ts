import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    pink: {
      "500": "#64007b"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'pink.500',
        color: 'white'
      }
    }
  }
})