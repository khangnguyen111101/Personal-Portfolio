import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import SporterThumbnail from '../public/images/sporter-thumb.png'
import CatPicThumbnail from '../public/images/catpic-thumb.png'
import TicTacToeThumbnail from '../public/images/tictactoe-thumb.png'
import ScrumifiedThumbnail from '../public/images/scrumified-thumb.png'
import { useEffect, useRef } from 'react'
import Layout from '../components/layouts/article'

const Projects = () => {
  const ref = useRef(null)
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  })

  return (
    <Layout title="Projects">
      <Container>
        <Box align="center">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay="true"
            loop="true"
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_doyhajlr.json"
            style={{ height: '250px', width: '400px' }}
          />
        </Box>

        <Heading
          as="h3"
          variant="section-title"
          bgGradient="linear(to-t, coral, heliotrope)"
          fontSize={25}
          bgClip="text"
        >
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="sporter"
              title="Sporter"
              thumbnail={SporterThumbnail}
            >
              An iOS app for finding, booking events at local gym venues and
              make gym friends using SwiftUI.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              id="catpic"
              title="Cat Pic"
              thumbnail={CatPicThumbnail}
            >
              An iOS app for viewing random cat picture based on their breed
              using SwiftUI.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              id="tictactoe"
              title="Tic Tac Toe Expansion"
              thumbnail={TicTacToeThumbnail}
            >
              An iOS tic-tac-toe game with multiple game board size and 2 levels
              of dificulty AI using SwiftUI.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              id="scrumified"
              title="Scrumified"
              thumbnail={ScrumifiedThumbnail}
            >
              Webapp for project management using mainly NextJS libary with
              ChakraUI components.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
export { getServerSideProps } from '../components/chakra'
