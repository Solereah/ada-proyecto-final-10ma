import { Box, Flex, useColorModeValue, Image, Heading } from "@chakra-ui/react"

import { ProfileLogged } from "./componentes/ProfileLogged"

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
      <ProfileLogged />

      {/*   <Box>
        <Image src="" />
      </Box> */}
    </Flex>
  )
}

export { Account }
