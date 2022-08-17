import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { authState } from "../../recoil/userAtom"

const ProfileLogged = () => {
  const { user } = useRecoilValue(authState)

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {user.username}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {user.email}
          </Text>
          <Link to="/shop">
            <Button bg={"green.500"}>Volver por unos verdes</Button>
          </Link>
        </Stack>
      </Stack>
    </Center>
  )
}
export { ProfileLogged }
