import { Spinner, SimpleGrid, Box } from "@chakra-ui/react"
import { CardProduct } from "./components/CardProduct"
import { useGet } from "../../hooks/useGet"
const Products = () => {
  const { data: products, isLoading } = useGet("products")
  return (
    <Box>
      {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
      {isLoading || (
        <SimpleGrid minChildWidth="300px" spacing="30px" w="60%" mx="auto">
          {products &&
            products.map((product) => {
              return <CardProduct info={product} key={product.id} />
            })}
        </SimpleGrid>
      )}
    </Box>
  )
}
export { Products }
