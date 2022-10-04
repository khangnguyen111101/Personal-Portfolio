import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { EduSection, ExpSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const ref = useRef(null)
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  })

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading
              fontFamily="Dancing Script"
              as="h1"
              variant="page-title"
              fontSize={40}
              // color="coral"
              bgGradient="linear(to-t, coral, heliotrope)"
              bgClip="text"
            >
              Khang Nguyen
            </Heading>
            <p>Software Developer (iOS, Web)</p>

            <Box align="center">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay="true"
                loop="true"
                mode="normal"
                src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                style={{ height: '250px', width: '400px' }}
              />
            </Box>
          </Box>

          <Center
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ base: 0, md: 6 }}
            align="center"
          >
            <ProfileImage
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="175px"
              display="inline-block"
              borderRadius="xl"
              alt="Profile Image"
              src="/images/khang-photo.jpeg"
            />
          </Center>
        </Box>

        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            //   color="coral"
            bgGradient="linear(to-t, coral, heliotrope)"
            fontSize={25}
            bgClip="text"
          >
            Biography
          </Heading>
          <Paragraph>
            Khang is a software engineering student from RMIT University in Ho
            Chi Minh city, Vietnam with a passion for building software
            products. He wants contribute his talent to solving real-life
            problems using technology. Currently, he is focusing on developing
            iOS and website projects.
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button
                rightIcon={<ChevronRightIcon />}
                color={useColorModeValue('coral', 'heliotrope')}
              >
                My projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="section-title"
            //   color="coral"
            bgGradient="linear(to-t, coral, heliotrope)"
            fontSize={25}
            bgClip="text"
          >
            Education
          </Heading>

          <EduSection mb={3}>
            <BioYear>2016 - 2019</BioYear>
            TextTran Dai Nghia High School for the gift, Ho Chi Minh city
            <br />
            <i>Specialized Physics</i>
          </EduSection>

          <EduSection>
            <BioYear>2019 - 2023</BioYear>
            RMIT Vietnam University, Ho Chi Minh city
            <br />
            <i>Bachelor of Software Engineer (Honours)</i>
          </EduSection>
        </Section>

        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            //   color="coral"
            bgGradient="linear(to-t, coral, heliotrope)"
            fontSize={25}
            bgClip="text"
          >
            Work Experience
          </Heading>

          <ExpSection mb={3}>
            <BioYear>Jul 2019 - Sep 2019</BioYear>
            Software Tester
            <br />
            <NextLink href="https://rta.vn/" passHref scroll={false}>
              <Link
                color={useColorModeValue('coral', 'heliotrope')}
                isExternal={true}
              >
                <i>@RTA - Real Time Analytics</i>
              </Link>
            </NextLink>
          </ExpSection>

          <ExpSection>
            <BioYear>Mar 2021 - Sep 2021</BioYear>
            QA/QC & Data Engineering Intern
            <br />
            <NextLink href="https://rta.vn/" passHref scroll={false}>
              <Link
                color={useColorModeValue('coral', 'heliotrope')}
                isExternal={true}
              >
                <i>@RTA - Real Time Analytics</i>
              </Link>
            </NextLink>
          </ExpSection>
        </Section>

        <Section delay={0.4}>
          <Heading
            as="h3"
            variant="section-title"
            //   color="coral"
            bgGradient="linear(to-t, coral, heliotrope)"
            fontSize={25}
            bgClip="text"
          >
            Connections
          </Heading>

          <SimpleGrid columns={2} spacingX={10} spacingY={3}>
            <Link href="https://github.com/khangnguyen111101" target="_blank">
              <Button
                variant="ghost"
                color={useColorModeValue('coral', 'heliotrope')}
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                GitHub
              </Button>
            </Link>

            <Link
              href="https://www.instagram.com/burger.de.king/"
              target="_blank"
            >
              <Button
                variant="ghost"
                color={useColorModeValue('coral', 'heliotrope')}
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                Instagram
              </Button>
            </Link>

            <Link
              href="https://www.facebook.com/khang.nguyen.712161/"
              target="_blank"
            >
              <Button
                variant="ghost"
                color={useColorModeValue('coral', 'heliotrope')}
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                Facebook
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/khangnguyen111101/"
              target="_blank"
            >
              <Button
                variant="ghost"
                color={useColorModeValue('coral', 'heliotrope')}
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>

            <Link href="mailto:khangnguyen111101@gmail.com" target="_blank">
              <Button
                variant="ghost"
                color={useColorModeValue('coral', 'heliotrope')}
                leftIcon={<Icon as={IoMail} />}
              >
                khangnguyen111101@gmail
              </Button>
            </Link>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
