import { useState } from "react"

import {
  useToast,
  Spinner,
  Stack,
  Flex,
  Box,
  Text,
  Heading,
  Divider,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
} from "@chakra-ui/react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { FormsModal } from "../../components/FormsModal"
import { useCart } from "../../hooks/useCart"
import { useUser } from "../../hooks/useUser"
import { CheckoutDetail } from "./components/CheckoutDetail"

const CheckoutCart = () => {
  const { cart, totalCart, emptyCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()
  const toast = useToast({
    variant: "top-accent",
    isClosable: true,
    duration: 6000,
  })
  const navigate = useNavigate()

  const handleOnClick = async () => {
    setIsLoading(true)
    if (!user) {
      return <FormsModal />
    } else {
      try {
        await axios.post(
          "https://chacra-mates-production.up.railway.app/api/orders",
          {
            data: { Item: cart, users_permissions_users: user.id },
          },
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        )

        toast({
          title: "Compra existosa! A disfrutar de unos verdes",
          status: "success",
        })
        emptyCart()
        navigate("/orders")
      } catch (error) {
        toast({
          title: "Error",
          description: "Poné la pava mientras esperas, algo salió mal",
          status: "error",
        })
      }
    }
    setIsLoading(false)
  }
  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
        mx="50%"
        my="50px"
      />
    )
  }

  return (
    <>
      <Flex py={6} px={5} min={"100vh"}>
        <Stack spacing={4} width={"50%"} direction={"column"}>
          <Stack
            p={5}
            alignItems={"center"}
            justifyContent={{
              base: "flex-start",
              md: "space-around",
            }}
            direction={{
              base: "column",
              md: "row",
            }}
          >
            <Stack
              width={{
                base: "100%",
                md: "40%",
              }}
              textAlign={"center"}
            >
              <Heading size={"lg"}>
                Detalle de <Text color="green.500">Tú carrito</Text>
              </Heading>
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "60%",
              }}
            >
              <Text textAlign={"center"}>
                Estás a punto de disfrutar unos ricos mates.
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <Box>
            {cart.map((info) => (
              <CheckoutDetail product={info} key={`cartProduct${info.id}`} />
            ))}
          </Box>
          <Divider />
        </Stack>
        <Stack spacing={4} width={"50%"} alignItems="center">
          <Text textAlign="center" mt="5px">
            Por el momento no estamos haciendo envíos, disculpas por las
            molestias ocasionadas.
          </Text>
          <Stack w="50%" direction="row">
            <Input
              variant="filled"
              placeholder="Ingrese codigo de descuento"
              type="text"
              name="descount"
            />
            <Button colorScheme="teal" variant="outline" type="submit">
              Enviar
            </Button>
          </Stack>
          <Stack>
            <TableContainer mt="20px">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Detalle</Th>
                    <Th isNumeric>Costo</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Descuento</Td>

                    <Td isNumeric>$0</Td>
                  </Tr>
                  <Tr>
                    <Td>Subtotal</Td>

                    <Td isNumeric>${totalCart}</Td>
                  </Tr>
                  <Tr>
                    <Td>Impuestos</Td>

                    <Td isNumeric>${(totalCart * 21) / 100}</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th fontSize="1em">Total a pagar</Th>

                    <Th fontSize="1em" isNumeric>
                      ${totalCart * 1.21}
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <Box w="80%" pt={7}>
              <Button
                w="full"
                colorScheme="green"
                onClick={handleOnClick}
                isLoading={isLoading}
              >
                Finalizar compra
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </>
  )
}

export { CheckoutCart }
