import { Flex, Button, Stack, Icon, Text, Heading, Box, Divider, HStack, Avatar } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { IoMaleOutline, IoFemaleOutline } from 'react-icons/io5';

export default function FeedbackView4({ name }) {

  return (
    <>
      <Flex
        align='center'
        justify="center"
        flexDir="column"
      >

        <Box>
          <Text fontSize="lg" align="center" mb="4px" fontWeight="bold">{name}</Text>
        </Box>
        <Avatar size="xl" marginBottom="10px" name={name} />
        <Divider width="200px" />
        <Text fontSize={["20px", "30px"]} align="center" mt="40px" fontWeight="bold">Obrigada!</Text>

      </Flex >
    </>
  )
}