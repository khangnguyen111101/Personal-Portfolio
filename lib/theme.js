import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      //   background: mode('white', 'silverSand')(props)
      //   bgGradient: mode(
      //     'linear(to-b, white, #902bf5)',
      //     'linear(to-b, #1a1463, #902bf5)'
      //   )(props)
      bgImage: mode('white', "url('./images/background-image.jpeg')")(props)
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
    baseStyles: props => ({
      color: mode('#3D7AED', '#FF63C3')(props),
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
