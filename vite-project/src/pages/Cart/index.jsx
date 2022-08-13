import React from "react"

import {
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"

import { useCart } from "../../Hooks/useCart"
import { CartProducts } from "./components/CartProducts"
const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { cart, emptyCart, totalCart } = useCart()
  const total = cart.length

  return (
    <Flex boder="1px solid red">
      <Flex>
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          aria-label="Call Segun"
          size="lg"
          bg="none"
        >
          <AiOutlineShoppingCart />
        </IconButton>
        ({total})
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi Carrito</DrawerHeader>
          {!!cart || (
            <DrawerBody>
              <Link to="/shop">
                <Flex flexDirection="column" alignItems="center">
                  <Text mb="10"> Tu carrito está vacío ☹️</Text>
                  <Button onClick={onClose} bg={"green.500"}>
                    Volver a la tienda
                  </Button>
                </Flex>
              </Link>
            </DrawerBody>
          )}
          {!!cart && (
            <Flex flexDirection="column">
              <DrawerBody>
                {cart.map((product) => (
                  <CartProducts
                    product={product}
                    key={`cartProduct${product.id}`}
                  />
                ))}
              </DrawerBody>

              <DrawerFooter>
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Button colorScheme="red" onClick={emptyCart}>
                    Vaciar carrito
                  </Button>
                  <Box display={"flex"} justifyContent={"space-evenly"}>
                    <Box>Total:</Box>
                    <Box>${totalCart}</Box>
                  </Box>
                  <Link to="/checkoutCart">
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Continuar compra
                    </Button>
                  </Link>
                </Flex>
              </DrawerFooter>
            </Flex>
          )}
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export { Cart }
