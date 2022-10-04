import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  SimpleGrid,
  Text,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Sporter">
    <Container>
      <Title>
        Sporter <Badge>2022</Badge>
      </Title>
      <P>
        An iOS app for finding, booking events at local gym venues and make gym
        friends using SwiftUI.
      </P>
      <P>
        This is the result of a group project that I worked on with 5 other
        students. I was in charge of the Map View and Event Management, fully
        front-end and back-end.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link
            href="https://github.com/khangnguyen111101/Sporter/"
            isExternal="true"
          >
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>Group</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Front-end Supervisor, Back-end Supervisor</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SwiftUI, LottieFiles, Firebase</span>
        </ListItem>
      </List>

      <Divider mb={3}></Divider>

      <Text align="center" fontSize="14px" mb={1}>
        User Authentication
      </Text>
      <SimpleGrid columns={3} spacingX={1}>
        <ProjectImage src="/images/sporter/sporter-1.png" alt="Sporter" />
        <ProjectImage src="/images/sporter/sporter-2.png" alt="Sporter" />
        <ProjectImage src="/images/sporter/sporter-3.png" alt="Sporter" />
      </SimpleGrid>

      <Text align="center" fontSize="14px" mb={1}>
        Connecting People
      </Text>
      <SimpleGrid columns={3} spacingX={1}>
        <ProjectImage src="/images/sporter/sporter-4.png" alt="Sporter" />
        <ProjectImage src="/images/sporter/sporter-5.png" alt="Sporter" />
        <ProjectImage src="/images/sporter/sporter-6.png" alt="Sporter" />
      </SimpleGrid>

      <Text align="center" fontSize="14px" mb={1}>
        Map View
      </Text>
      <SimpleGrid columns={3} spacingX={1}>
        <ProjectImage src="/images/sporter/sporter-7.png" alt="Sporter" />
        <ProjectImage src="/images/sporter/sporter-8.png" alt="Sporter" />
        <ProjectImage src="/images/sporter/sporter-9.png" alt="Sporter" />
      </SimpleGrid>

      <Text align="center" fontSize="14px" mb={1}>
        Event Management
      </Text>
      <SimpleGrid columns={3} spacingX={1}>
        <ProjectImage src="/images/sporter/sporter-10.png" alt="Sporter" />
        <ProjectImage src="/images/sporter/sporter-11.png" alt="Sporter" />
        <ProjectImage src="/images/sporter/sporter-12.png" alt="Sporter" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
