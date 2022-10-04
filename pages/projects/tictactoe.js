import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Sporter">
    <Container>
      <Title>
        Tic Tac Toe Expansion <Badge>2022</Badge>
      </Title>
      <P>
        An iOS tic-tac-toe game with multiple game board size and 2 levels of
        dificulty AI using SwiftUI.
      </P>
      <P>
        This is the result of an individual project I created for the iOS course
        at school.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link
            href="https://github.com/khangnguyen111101/TicTacToeExpansion"
            isExternal="true"
          >
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>Individual</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Front-end and Back-end lead</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SwiftUI, LottieFiles</span>
        </ListItem>
      </List>

      <Divider mb={3}></Divider>

      <Text align="center" fontSize="14px" mb={1}>
        Welcome screen, Game configuration and instruction
      </Text>
      <SimpleGrid columns={3} spacingX={1}>
        <ProjectImage
          src="/images/tictactoe/tictactoe-1.png"
          alt="TicTacToeExpansion"
        />
        <ProjectImage
          src="/images/tictactoe/tictactoe-2.png"
          alt="TicTacToeExpansion"
        />
        <ProjectImage
          src="/images/tictactoe/tictactoe-3.png"
          alt="TicTacToeExpansion"
        />
      </SimpleGrid>

      <Text align="center" fontSize="14px" mb={1}>
        Game history and game view with different board sizes
      </Text>
      <SimpleGrid columns={3} spacingX={1}>
        <ProjectImage
          src="/images/tictactoe/tictactoe-4.png"
          alt="TicTacToeExpansion"
        />
        <ProjectImage
          src="/images/tictactoe/tictactoe-5.png"
          alt="TicTacToeExpansion"
        />
        <ProjectImage
          src="/images/tictactoe/tictactoe-6.png"
          alt="TicTacToeExpansion"
        />
      </SimpleGrid>

      <Text align="center" fontSize="14px" mb={1}>
        Game view while playing, and result view
      </Text>
      <SimpleGrid columns={3} spacingX={1}>
        <ProjectImage
          src="/images/tictactoe/tictactoe-7.png"
          alt="TicTacToeExpansion"
        />
        <ProjectImage
          src="/images/tictactoe/tictactoe-8.png"
          alt="TicTacToeExpansion"
        />
        <ProjectImage
          src="/images/tictactoe/tictactoe-9.png"
          alt="TicTacToeExpansion"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
