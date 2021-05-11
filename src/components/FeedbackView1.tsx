import { Flex, Button, Stack, Icon, Text, Heading, Box, Divider, HStack, Avatar } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { IoMaleOutline, IoFemaleOutline } from 'react-icons/io5';

export default function FeedbackView1({ goMale, goFemale, name }) {

  return (
    <>
        <Flex
          align='center'
          justify="center"
          flexDir="column"
        >
          <Stack
            spacing="4"
            align='center'
            justify="center"
            flexDir="column"
          >
            <Box>
              <Text fontSize={["20px", "30px"]} align="center" fontWeight="bold">Olá!</Text>
              <Text fontSize="lg" align="center" fontWeight="bold">Você está aqui</Text>
              <Text fontSize="lg" align="center" fontWeight="bold">para dar seu feedback </Text>
              <Text fontSize="lg" align="center" fontWeight="bold"> anônimo para a</Text>
              <Text fontSize="lg" align="center" fontWeight="bold">{name}</Text>
            </Box>
            <Avatar size="xl" marginBottom="10px" name={name} />
            <Divider width="200px" />
          </Stack>
          <Text fontSize="xl" mt="20px" align="center">Você é:</Text>
          <HStack mt="25px">
  
            <Stack
              align='center'
              justify="center"
              spacing="1"
            >
              <Icon as={IoMaleOutline} fontSize="25" />
              
                <Button
                  colorScheme="white"
                  onClick={goMale}
                  variant="ghost"
                  fontSize="23px"
                  _hover={{ backgroundColor: "#f0f0f0", color: "#64007b" }}
                >
                  Homem
            </Button>
            
            </Stack>
  
            <Stack
              align='center'
              justify="center"
              spacing="1"
            >
              <Icon as={IoFemaleOutline} fontSize="25" />
              
                <Button
                  colorScheme="white"
                  onClick={goFemale}
                  variant="ghost"
                  fontSize="23px"
                  _hover={{ backgroundColor: "#f0f0f0", color: "#64007b" }}
                >
                  Mulher
  
            </Button>
              
            </Stack>
          </HStack>
        </Flex >
      </>
  )
}