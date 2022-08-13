import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import { BsTrash } from "react-icons/bs"

import { useCart } from "../../../hooks/useCart"
const CartProducts = ({ product }) => {
  const { deleteItemCart, addProduct, deleteItemAmount } = useCart()
  const disablePrevAmount = product.cantidad === 1
  const disableNextAmount = product.cantidad === product.attributes.stock

  return (
    <Flex alignItems="center" justifyContent="space-around">
      <Box display="flex">
        <Image
          p="5px"
          src={product.attributes.image.data.attributes.url}
          alt={`Picture of ${product.title}`}
          boxSize="70px"
        />
        <Flex flexDirection="column">
          <Heading as="h5" size="sm">
            {product.attributes.title}
          </Heading>
          <Text>${product.attributes.price}</Text>
        </Flex>
      </Box>
      <Box>
        <NumberInput
          w="50%"
          defaultValue={product.cantidad}
          min={1}
          max={product.attributes.stock}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper
              onClick={() => addProduct(product)}
              disabled={disableNextAmount}
            />
            <NumberDecrementStepper
              onClick={() => deleteItemAmount(product)}
              disabled={disablePrevAmount}
            />
          </NumberInputStepper>
        </NumberInput>
      </Box>
      <Button
        onClick={() => {
          deleteItemCart(product.id)
        }}
      >
        <BsTrash />
      </Button>
    </Flex>
  )
}
export { CartProducts }
