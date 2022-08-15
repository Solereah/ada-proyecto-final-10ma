import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react"
import { NavLink as ReachLink } from "react-router-dom"

import { FormsModal } from "../../../Components/FormsModal"
import { Cart } from "../../../pages/Cart"
const Links = [
  { label: "Tienda", url: "/shop" },
  { label: "Nosotros", url: "/AboutUs" },
]

const NavLink = ({ text, link }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("gray.500"),
    }}
    as={ReachLink}
    to={link}
  >
    {text}
  </Link>
)

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink
                key={`link-${link.label}`}
                text={link.label}
                link={link.url}
              />
            ))}
            <Flex alignItems={"center"} justifyContent={"space-around"}>
              <Button onClick={toggleColorMode} bg="none">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </HStack>
        </HStack>
        <Cart />
        <FormsModal />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={`link-${link.label}`}
                text={link.label}
                link={link.url}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Flex>
  )
}
export { Navbar }
