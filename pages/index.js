import { Box, Container, Heading } from "@chakra-ui/react"
import { useEffect, useRef } from 'react';

const Page = () => {
    const ref = useRef(null);
    useEffect(() => {
        import('@lottiefiles/lottie-player');
    });

    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
                Hello, I&apos;m a software developer in Ho Chi Minh city!
            </Box>

            <Box align="center">
                <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay="true"
                    loop="true"
                    mode="normal"
                    src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                    style={{ height: '400px', width: '400px' }}
                />
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Khang Nguyen
                    </Heading>
                    <p>Software Developer (iOS, Web)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page