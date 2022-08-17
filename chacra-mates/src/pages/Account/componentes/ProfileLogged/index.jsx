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
import { useUser } from "../../../../hooks/useUser"

const ProfileLogged = () => {
  const { signOut, user } = useUser()
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
            <Button bg={"green.500"} onClick={() => signOut(null)}>
              Volver por unos verdes
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Center>
  )
}
export { ProfileLogged }
