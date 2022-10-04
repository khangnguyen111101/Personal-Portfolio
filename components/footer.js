import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box align="center" opacity={0.8} fontSize="sm" mb={4} mt={10}>
      &copy; {new Date().getFullYear()} Khang Nguyen. Inspired by{' '}
      <NextLink href="https://github.com/craftzdog">
        <Link isExternal="true">Takuya Matsuyama.</Link>
      </NextLink>
    </Box>
  )
}

export default Footer
