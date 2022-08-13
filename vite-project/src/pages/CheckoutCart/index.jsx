import { useState } from "react"

import {
  Table,
  Tbody,
  Box,
  Th,
  Thead,
  Tr,
  TableCaption,
  TableContainer,
  useToast,
  Button,
  Stack,
  Spinner,
} from "@chakra-ui/react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { FormsModal } from "../../components/FormsModal"
import { useCart } from "../../hooks/useCart"
import { useUser } from "../../hooks/useUser"
import { CheckoutDetail } from "./components/CheckoutDetail"

const CheckoutCart = () => {
  const { totalCart, cart, emptyCart } = useCart()
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
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption />
          <Thead>
            <Tr>
              <Th />
              <Th>Detalle</Th>
              <Th>Precio unitario</Th>
              <Th>Cantidad</Th>
              <Th>Subtotal</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((info) => (
              <CheckoutDetail product={info} key={`cartProduct${info.id}`} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Stack>
        <Box>Total:</Box>
        <Box>{totalCart}</Box>
      </Stack>

      <Stack direction="row" spacing={4} justifyContent="flex-end">
        <Button
          colorScheme="brand.700"
          variant="outline"
          onClick={handleOnClick}
        >
          Finalizar Compra
        </Button>
      </Stack>
    </Box>
  )
}

export { CheckoutCart }
