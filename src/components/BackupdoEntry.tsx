import React, { useState, useContext, useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { Flex, Button, Stack, HStack, Icon, Box, Avatar, Divider, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IoMaleOutline, IoFemaleOutline } from 'react-icons/io5';
// import { Header } from "../../components/Header";
// import { addUser } from '../../store/modules/userState/actions';
// import { IUser } from '../../store/modules/userState/types';

import api from '../../api';




export default function Test() {
  const [loading, setLoading] = useState<boolean>(true)
  const [view, setView] = useState<number>(1)
  const router = useRouter();
  const id = router.query.id
  const [user, setUser] = useState<IUser>({} as IUser)
  const dispatch = useDispatch();


  useEffect(() => {
    async function GetUser(id) {
      const response = await api.get<{ id: string, name: string }>(`test/${id}`)
      setUser(response.data)
      setLoading(false)
      console.log(user)
    }

    if (id) {
      GetUser(id)
    }

  }, [id])

  dispatch(addUser(user))

  return (
    <>
      <Header />

      {loading ?
        <Text>Loading...</Text>
        :

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
              <Text fontSize="lg" align="center" fontWeight="bold">{user.name}</Text>
            </Box>
            <Avatar size="xl" marginBottom="10px" name="Fulana Tal" />
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
              <Link href="/man">
                <Button
                  colorScheme="white"
                  variant="ghost"
                  fontSize="23px"
                  _hover={{ backgroundColor: "#f0f0f0", color: "#64007b" }}
                >
                  Homem
          </Button>
              </Link>
            </Stack>

            <Stack
              align='center'
              justify="center"
              spacing="1"
            >
              <Icon as={IoFemaleOutline} fontSize="25" />
              <Link href="/woman">
                <Button
                  colorScheme="white"
                  to="www.google.com"
                  variant="ghost"
                  fontSize="23px"
                  _hover={{ backgroundColor: "#f0f0f0", color: "#64007b" }}
                >
                  Mulher

          </Button>
              </Link>
            </Stack>
          </HStack>
        </Flex >}
    </>
  )
}