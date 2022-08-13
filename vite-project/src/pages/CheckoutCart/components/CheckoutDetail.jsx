import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react"

const CheckoutDetail = ({ info }) => {
  const { deleteItemCart } = useCart()
  return (
    <Container py={5} maxW={"container.lg"}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as={"h2"}>{product.attributes.title}</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              20%
            </Text>
            <Box fontSize={"sm"}>
              <Image
                src={product.attributes.image.data.attributes.url}
                w="70px"
                mr="30px"
                objectFit="cover"
                alt={`imagen de producto ${product.attributes.title}`}
              />
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              {product.cantidad}
            </Text>
            <Box fontSize={"sm"}>{product.attributes.price}</Box>
          </Flex>
        </GridItem>
      </Grid>
      <Button onClick={() => deleteItemCart(product.id)}>Delete item</Button>
    </Container>
  )
}

export { CheckoutDetail }
