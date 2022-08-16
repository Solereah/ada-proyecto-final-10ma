import {
  Box,
  Button,
  Divider,
  Image,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react"

import { useCart } from "../../../hooks/useCart"

const Prueba2 = ({ product }) => {
  const { deleteItemCart } = useCart()

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Box fontSize={"sm"}>
        <Image
          src={product.attributes.image.data.attributes.url}
          w="150px"
          mr="30px"
          objectFit="cover"
          alt={`imagen de producto ${product.attributes.title}`}
        />
      </Box>
      <Box>
        <List>
          <ListItem>{product.attributes.title}</ListItem>
          <ListItem>Cantidad: {product.cantidad}</ListItem>
          <ListItem>Precio unitario: ${product.attributes.price}</ListItem>
        </List>
      </Box>
      <Box>$ {product.attributes.price * product.cantidad}</Box>
      <Stack>
        <Button
          size="md"
          onClick={() => {
            deleteItemCart(product.id)
          }}
        >
          Eliminar
        </Button>
      </Stack>
    </Stack>
  )
}

export { Prueba2 }
