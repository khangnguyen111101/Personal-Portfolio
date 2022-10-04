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
import NextLink from 'next/link'

const Work = () => (
  <Layout title="Sporter">
    <Container>
      <Title>
        Scrumified <Badge>2022</Badge>
      </Title>
      <P>
        Scrumified is a light version of Jira for RMIT students in SE/IT major
        to practice project management in Scrum with sufficient tools but easier
        to use. Users can create stories/tasks in backlog with detailed
        guideline in "Defination of Done" and "Story Point". An active sprint
        will be managed by a Kanban board, and every sprint will be archived for
        the team to visualize their progress. Personalized dashboard to manage
        all projects with corresponding assigned tasks, and profile section to
        manage personal information were also well supported.
      </P>
      <P>
        This is a very first fullstack project from zero to hero that I worked
        on in a group of 5. Further improvements can be activity tracking,
        exploit optimization given by NextJS, reduce latency in collaboration
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link
            href="https://github.com/khangnguyen111101/scrumified-frontend"
            isExternal="true"
          >
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://scrumified.vercel.app/" isExternal="true">
            Scrumified <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>Group</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Front-end programmer</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            NextJS, ChakraUI, Axios, SpringBoot, PostgreSQL, Heroku, Vercel
          </span>
        </ListItem>
      </List>

      <Divider mb={3}></Divider>

      <Text align="center" fontSize="14px" mb={1}>
        Welcome screen
      </Text>
      <ProjectImage
        src="/images/scrumified/scrumified-1.png"
        alt="Scrumified"
      />

      <Text align="center" fontSize="14px" mb={1}>
        Dashboard
      </Text>
      <ProjectImage
        src="/images/scrumified/scrumified-2.png"
        alt="Scrumified"
      />

      <Text align="center" fontSize="14px" mb={1}>
        Backlog
      </Text>
      <ProjectImage
        src="/images/scrumified/scrumified-3.png"
        alt="Scrumified"
      />

      <Text align="center" fontSize="14px" mb={1}>
        Active Sprint
      </Text>
      <ProjectImage
        src="/images/scrumified/scrumified-4.png"
        alt="Scrumified"
      />

      <Text align="center" fontSize="14px" mb={1}>
        Roadmap - Archived Sprints
      </Text>
      <ProjectImage
        src="/images/scrumified/scrumified-5.png"
        alt="Scrumified"
      />

      <Text align="center" fontSize="14px" mb={1}>
        Profile
      </Text>
      <ProjectImage
        src="/images/scrumified/scrumified-6.png"
        alt="Scrumified"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
