import { Flex, Button, Stack, Icon, IconButton, Text, Heading, Avatar } from '@chakra-ui/react';
import { FiArrowRight, FiArrowLeft, FiChevronLeft } from 'react-icons/fi';
import { Header } from "../components/Header";

export default function FeedbackView2({ setView3, setView1, name }) {

  return (
    <>
      <Flex
        align='center'
        justify='flex-start'
      >
        <IconButton
          variant="ghost"
          ml="3px"
          onClick={setView1}
          colorScheme="white"
          aria-label="Call Sage"
          fontSize="40px"
          icon={<FiChevronLeft />}
        />
      </Flex>
      <Flex

        align='center'
        justify="center"
        flexDir="column"
      >

        <Avatar
          size="xl"
          borderWidth="3px"
          marginBottom="5px"
          borderColor="white"
          name={name}
        />
        <Heading
          marginBottom="20px"
        >{name}</Heading>

        <Heading fontSize={["lg", "xl"]} align="center">{name} jamais saberá o que </Heading>
        <Heading fontSize={["lg", "xl"]} align="center">você respondeu. </Heading>
        <Heading fontSize={["lg", "xl"]} mt={["10px", "20px"]} align="center">Suas respostas estarão</Heading>
        <Heading fontSize={["lg", "xl"]} align="center"> diluídas entre todas as outras,</Heading>
        <Heading fontSize={["lg", "xl"]} align="center">garantindo seu anonimato.</Heading>
        <Heading fontSize={["lg", "xl"]} mt={["10px", "20px"]} align="center">Este é um teste sobre</Heading>
        <Heading fontSize={["lg", "xl"]} align="center">impressões superficiais.</Heading>
        <Heading fontSize={["lg", "xl"]} align="center">Responda sem pensar.</Heading>



        <Button
          type='submit'
          mt="3"
          onClick={setView3}
          colorScheme="pink.900"
          width="200px"
          size="lg"
          variant="outline"
          borderRadius="30px"
          border="2px"
          iconSpacing="5px"
          _hover={{
            border: '3px solid', boxShadow:
              "0 0 1px 2px #e8ecf3, 0 1px 1px rgba(0, 0, 0, .15)",
          }}

        >
          COMEÇAR
          <Icon as={FiArrowRight} ml="10px" fontSize="25" />
        </Button>


      </Flex>

    </>
  )
}