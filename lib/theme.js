import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
      // bgImage: mode('white', "url('./images/background-image.jpeg')")(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 7,
        textDecorationColor: '#525252',
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('luckyPoint', 'coral')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: '"Montserrat"'
}

const colors = {
  coral: '#fc7b54',
  heliotrope: '#f361fb',
  doveGray: '#6c6c6c',
  silverSand: '#bdbebe',
  luckyPoint: '#1a1463'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  styles,
  components,
  fonts,
  colors,
  config
})

export default theme
