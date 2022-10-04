import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      // background: mode('white', 'black')(props)
      bgGradient: mode(
        'linear(to-br, #f5f7fa, #c3cfe2)',
        'linear(to-br, #0C1445 11.4%, #471E54 70.2%)'
      )(props)
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
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 3,
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
  heading: '"Bree Serif"'
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
