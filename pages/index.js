import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  const ref = useRef(null)
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  })

  return (
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
          <Image
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
          Khang is a software engineering student from RMIT University in Ho Chi
          Minh city, Vietnam with a passion for building software products. He
          wants contribute his talent to solving real-life problems using
          technology. Currently, he is focusing on developing iOS and website
          projects.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} color="coral">
              My projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Ho Chi Minh city, Vietnam
        </BioSection>

        <BioSection>
          <BioYear>2019</BioYear>
          Completed the High School program at Tran Dai Nghia High School for
          the gift, Ho Chi Minh city, Vietnam <br /> <b>Major:</b> Physics
        </BioSection>

        <BioSection>
          <BioYear>2019 - Present</BioYear>
          Study at RMIT Vietnam University at Ho Chi Minh city
          <br /> <b>Major:</b> Software Engineering
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
