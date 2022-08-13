import { Box, Flex, useColorModeValue, Image, Heading } from "@chakra-ui/react"

import ProfileCard from "./Components/ProfileCard"

const Account = () => {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <Heading
          as="h1"
          py={5}
          fontSize={48}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Que gusto tenerte de vuelta
        </Heading>
      </Box>
      <ProfileCard />

      <Box>
        <Image src="../../assets/Icons/mate.png" />
      </Box>
    </Flex>
  )
}

export { Account }
