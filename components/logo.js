import Link from 'next/link'
import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'

const LogoBox = styled.span`
    font-size: 25px;
    display: inline-flex;
    justify: center,
    height: 30px;
    line-height: 20px;
    padding: 10px;
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text color={useColorModeValue('coral', 'heliotrope')} ml={3}>
            Welcome
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
