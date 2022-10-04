import Logo from './logo'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-button.js'

const LinkItem = ({ href, path, isExternal, children }) => {
  const active = path === href

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? useColorModeValue('silverSand', 'luckyPoint') : undefined}
        isExternal={isExternal}
        borderRadius={10}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>

          <LinkItem
            href="https://github.com/khangnguyen111101/Personal-Portfolio"
            isExternal="true"
          >
            View Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>

                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>

                <NextLink
                  href="https://github.com/khangnguyen111101/Personal-Portfolio"
                  passHref
                >
                  <MenuItem as={Link} isExternal="true">
                    View Source
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
