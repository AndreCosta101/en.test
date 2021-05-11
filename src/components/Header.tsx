import { Flex, Text, Image, Box } from '@chakra-ui/react';


export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="10"
      mx="auto"
      // mt="7"
      mb="7"
      paddingTop="2px"
      px="6"
      align="flex-start"
      bg="white"
    >
      {/* <Box bg="white" h={["40px", "52px"]} w={["40px", "52px"]} borderRadius={["20px", "26"]}> */}
      <Image
        borderRadius="full"
        bg="white"
        boxSize={["60px", "50px"]}
        src="/logo.png"
        alt="."
      />
      {/* </Box> */}
      <Text
        // fontSize={["md", "3xl"]}
        fontSize={["20px", "20px"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        ml="5px"
        color="gray.600"
      >
        eduardo.nunes
      </Text>


    </Flex>
  )
}