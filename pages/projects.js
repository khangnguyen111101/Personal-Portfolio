import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import SporterThumbnail from '../public/images/sporter-thumb.png'
import CatPicThumbnail from '../public/images/catpic-thumb.png'

const Projects = () => {
  return (
    <Container>
      <Heading
        // fontFamily="Dancing Script"
        as="h1"
        variant="page-title"
        fontSize={40}
        // color="coral"
        bgGradient="linear(to-t, coral, heliotrope)"
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
            An iOS app for finding, booking events at local gym venues and make
            gym friends
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="catpic"
            title="Cat Pic"
            thumbnail={CatPicThumbnail}
          >
            An iOS app for viewing random cat picture based on their breed
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
