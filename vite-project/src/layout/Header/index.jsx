import { Flex, Box, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { Navbar } from "./components/Navbar"
const Header = () => {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Link to="/">
          <Flex alignItems="center" ml="5">
            ChacraMates
          </Flex>
        </Link>
        <Navbar />
      </Flex>
    </Box>
  )
}

export { Header }
