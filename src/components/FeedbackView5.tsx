import { Flex, Button, HStack, Icon, Text, Heading, Center, Container, Box, Divider, VStack, Image, Avatar, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaApple, FaGooglePlay } from 'react-icons/fa';


export default function FeedbackView5({ name }) {
  const router = useRouter()

  const handleClickToGoogle = () => {
    router.push('http://google.com')
  }
  const handleClickToApple = () => {
    router.push('http://apple.com')
  }

  return (
    <>
      <Flex
        align='center'
        justify="center"
        flexDir="column"
      >


        <Text fontSize={["20px", "30px"]} align="center" fontWeight="bold">Obrigada!!</Text>
        <Text fontSize="lg" align="center" mb="4px" fontWeight="bold">- {name}</Text>

        <Avatar size="xl" marginBottom="10px" name={name} />
        <Divider width="200px" />

        <Container border-radius="30px" margin="10px">
          <Text fontSize={["16px", "20px"]} align="left" >{name} fez um <Text as="span" fontWeight="bold">Teste de Imagem</Text>, mas o resultado, só ela pode ver. ¯\_(ツ)_/¯</Text>

          <Text fontSize={["16px", "30px"]} mt="15px" mb="15px" align="center" fontWeight="bold" >QUER AVALIAR A SUA IMAGEM ?</Text>
          <Text fontSize={["16px", "20px"]} mt="10px" align="center" >Baixe o app <Text as="span" fontWeight="bold">gratuito</Text> e</Text>
          <Text fontSize={["16px", "20px"]} mb="20px" align="center" >descubra como o mundo te vê!</Text>

          <HStack>
            <Button
              bg="white"
              borderRadius="lg"
              onClick={handleClickToApple}
              w="50%"
              h="70px"
              color="pink.900"
              leftIcon={<FaApple
                size="40px"
              />}
              align='center'
            // justify="center"
            // flexDir="column"
            >
              <Text
                fontWeight="bold"
                color="pink.900"
              >Apple Store
              </Text>
            </Button>

            <Button
              bg="white"
              borderRadius="lg"
              onClick={handleClickToGoogle}
              w="50%"
              h="70px"
              color="pink.900"
              leftIcon={<FaGooglePlay
                size="35px"
              />}
              align='center'
            // justify="center"
            // flexDir="column"
            >
              <Text
                fontWeight="bold"
                color="pink.900"
              >Google Play
              </Text>
            </Button>

          </HStack>





        </Container>

      </Flex >


    </>
  )
}