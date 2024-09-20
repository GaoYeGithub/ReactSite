import { Box, Text, Image, Link, Flex, VStack, HStack, Heading} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

function Main() {
  return (
    <Box bg="gray.50" p={8}>
      <VStack spacing={12} align="center">
        <Box textAlign="center" maxW="600px">
          <Image 
            borderRadius="full"
            boxSize="150px"
            src="/images/Book1.jpg"
            alt="Ye Gao"
            mb={4}
            mx="auto"
          />
          <Heading mb={4}>Ye Gao</Heading>
          <HStack spacing={4} justify="center" mb={4}>
            <Link href="https://github.com/GaoYeGithub" isExternal>
              <FaGithub size="24" />
            </Link>
            <Link href="https://www.instagram.com/edify_fool/" isExternal>
              <FaInstagram size="24" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61565436251440" isExternal>
              <FaFacebook size="24" />
            </Link>
          </HStack>
          <Text>
            Hello, my name is Ye Gao. I'm Canadian, currently studying at Dr. Norman Bethune C.I
          </Text>
          <Text mt={4}>
            I enjoy learning and making new things, especially when it comes to embedded systems. I always love to try new things!
          </Text>
        </Box>

        <Box textAlign="center" w="full">
          <Heading mb={4}>Bookshelf</Heading>
          <Text mb={6}>Fr Bangers</Text>
          <Flex wrap="wrap" justify="center" gap={8}>
            <Box textAlign="center">
              <Image src="/images/Book1.jpg" alt="Reverend Insanity" boxSize="150px" mb={2} />
              <Text fontWeight="bold">Reverend Insanity</Text>
              <Text>by Gu Zhen Ren</Text>
            </Box>
            <Box textAlign="center">
              <Image src="/images/Book2.png" alt="Lord of Mysteries" boxSize="150px" mb={2} />
              <Text fontWeight="bold">Lord of Mysteries</Text>
              <Text>by Cuttlefish</Text>
            </Box>
          </Flex>
        </Box>

        <Box textAlign="center" w="full">
          <Heading mb={4}>Miku Music</Heading>
          <Text mb={6}>Miku Miku Oo ee Oo </Text>
          <VStack spacing={4}>
            <audio controls>
              <source src="public/Anamanaguchi - Miku ft. Hatsune Miku (Lyric Video).mp3" type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default Main;