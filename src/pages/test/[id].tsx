import React, { useState, useContext, useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import {
  Avatar,
  Flex,
  Button,
  Text,
  IconButton,
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { manFeedback } from '../../content/manFeedbackQuestions';
import { womanFeedback } from '../../content/womanFeedbackQuestions';
import { addAnswerToFeedback, resetFeedback } from '../../store/modules/feedback/actions';
import { Header } from "../../components/Header";
import { IFeedbackItem } from '../../store/modules/feedback/types';
import { IState } from '../../store';
import FeedbackView1 from '../../components/FeedbackView1';
import FeedbackView2 from '../../components/FeedbackView2';
import FeedbackView4 from '../../components/FeedbackView4';
import FeedbackView5 from '../../components/FeedbackView5';

import api from '../../api';

interface IUser {
  id: string;
  name: string;
}


export default function Test() {

  const feedbackAnswers = useSelector<IState, IFeedbackItem[]>(state => state.feedback.feedback)



  const [index, setIndex] = useState<number>(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef()


  const [loading, setLoading] = useState<boolean>(true)
  const [view, setView] = useState<number>(1)
  const [male, setMale] = useState<boolean>(true)

  const [answer, setAnswer] = useState<number>(feedbackAnswers[index].value)
  const router = useRouter();
  const id = router.query.id
  const [user, setUser] = useState<IUser>({} as IUser)
  const dispatch = useDispatch();


  useEffect(() => {
    async function GetUser(id) {
      const response = await api.get<{ id: string, name: string }>(`test/${id}`)
      setUser(response.data)
      setLoading(false)
    }

    if (id) {
      GetUser(id)
    }

  }, [id])


  const setView1 = () => setView(1)
  const setView3 = () => setView(3)


  const goMale = () => {
    setView(2)
  }

  const goFemale = () => {
    setView(2)
    setMale(false)
  }


  useEffect(() => {
    setAnswer(feedbackAnswers[index].value)
  }, [index])

  const manFeedbackAnswer = {
    qualityId: manFeedback[index].qualityId,
    value: answer,
  }


  const sendManResults = useCallback(
    async (feedbackAnswers: Object) => {
      try {
        console.log(feedbackAnswers)
        await api.put(`/man-feedback/${id}`, feedbackAnswers)

      } catch (err) {
        console.log(err)
      }
    },
    [id]
  )
  const sendWomanResults = useCallback(
    async (feedbackAnswers: Object) => {
      try {
        await api.put(`/woman-feedback/${id}`, feedbackAnswers)
      } catch (err) {
        console.log(err)
      }
    },
    [id]
  )


  const next = () => {
    if (index < 16) {
      dispatch(addAnswerToFeedback(manFeedbackAnswer));
      setIndex(prevState => prevState + 1)

    } else {
      dispatch(addAnswerToFeedback(manFeedbackAnswer));
      male ? setView(4) : setView(5)
    }
  }

  const previous = () => {
    setIndex(prevState => prevState - 1)
  }




  if (loading === true) {
    return <Text>Loading...</Text>
  }

  if (view === 1) {
    return (
      <>
        <Header />
        <FeedbackView1 goMale={goMale} goFemale={goFemale} name={user.name} />

      </>
    )
  }

  if (view === 2) {
    return (
      <>
        <Header />
        <FeedbackView2 setView1={setView1} setView3={setView3} name={user.name} />
      </>
    )
  }

  if (view === 3) {
    return (
      <>
        <Header />
        <Flex
          w='100%'
          h='100%'
          align='center'
          justify="center"
          flexDir="column"
        >
          <Avatar
            size="lg"
            marginBottom="20px"
            borderWidth="3px"
            borderColor="white"
            name={user.name}
            aria-label="."
          />


          <Flex
            align='center'
            justify='center'
            flexDir="column"
            w="80%"
            h="30%"

          // bg="white"

          >
            <Heading
              size="sm"
              fontSize={["20px", "20px"]}
              align="center"
            >
              De 1 a 10, quanto {user.name}
            </Heading>
            <Heading
              size="sm"
              fontSize={["20px", "20px"]}
              mb="40px"
              align="center"
            >
              PARECE ser:
            </Heading>

            <Flex
              align='center'
              justify='center'
              flexDir="column"
              h="50px"
              borderRadius="10px;"
            >
              <Heading
                fontSize='30px'
                align="center"

              >
                {male ? manFeedback[index].quality : womanFeedback[index].quality} ?
              </Heading>

            </Flex>
          </Flex>

          <Flex
            align='center'
            justify='center'
            flexDir="column"
            w="80%"
          // h="20%"
          >
            <Heading
              // size={"sm"}
              fontSize={"100px"}
              color={"white"}
              mt="40px"
            >
              {answer === 0 ? '--' : answer}
            </Heading>
            <Slider
              aria-label="slider-ex-3"
              defaultValue={0}
              value={answer}
              min={0}
              max={10}
              step={0.1}
              mt="3px"
              minH="1"
              w="90%"
              maxWidth="500px;"
              // flex="1"
              onChange={(value: number) => setAnswer(Math.floor(value))}
            >
              <SliderTrack bg="gray" ref={finalRef} >
                <SliderFilledTrack bg="white" />
              </SliderTrack>
              <SliderThumb boxSize={6} bg="white" defaultValue={answer} />
            </Slider>

          </Flex>

          <Flex
            align='center'
            justify='space-around'
            w="80%"
            h="30%"
            mt="15px"
            mb="5px"
          >
            {index === 0 ? <IconButton
              aria-label="next"
              isRound={true}
              colorScheme="pink.500"
              borderColor='pink.500'
              size="lg"
            /> :
              <IconButton
                aria-label="next"
                icon={<FaChevronLeft />}
                onClick={previous}
                isRound={true}
                colorScheme="pink.900"
                border='2px'
                borderColor='white'
                size="lg"
                _hover={{
                  border: '3px solid', boxShadow:
                    "0 0 1px 2px #e8ecf3, 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              />}
            {answer === 0 ? <IconButton
              aria-label="not-answered"
              variant="ghost"
              onClick={onOpen}
              icon={<FaChevronRight />}
              isRound={true}
              colorScheme="pink.900"
              border='2px'
              borderColor='gray'
              size="lg"
            /> :
              <IconButton
                aria-label="next"
                icon={<FaChevronRight />}
                onClick={next}
                isRound={true}
                colorScheme="pink.900"
                border='2px'
                borderColor='white'
                size="lg"
                _hover={{
                  border: '3px solid', boxShadow:
                    "0 0 1px 2px #e8ecf3, 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              />}

            <Modal
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay margin-left="20px" />
              <ModalContent>
                {/* <ModalHeader>Responda para Avançar</ModalHeader> */}
                <ModalCloseButton bg="pink.500" />
                <ModalBody mt="80px">
                  <Heading fontSize="18" color="black">Você ainda não respondeu.</Heading>
                  <Heading fontSize="25" color="pink.500">Deslize o slider abaixo para responder.</Heading>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="pink" mr={3} onClick={onClose}>
                    Fechar
              </Button>

                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </>
    )
  }

  if (view === 4) {
    console.log(feedbackAnswers)
    sendManResults(feedbackAnswers)
    return (
      <>
        <Header />
        <FeedbackView4 name={user.name} />
      </>
    )
  }

  if (view === 5) {
    sendWomanResults(feedbackAnswers)
    return (
      <>
        <Header />
        <FeedbackView5 name={user.name} />
      </>
    )
  }
}