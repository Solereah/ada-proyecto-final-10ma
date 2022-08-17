import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, SimpleGrid, Spinner, Box, Button } from "@chakra-ui/react"

import { CardProduct } from "../../components/Products/components/CardProduct"
import { useGetWithFilters } from "../../hooks/useGetWithFilters"
import Aside from "./components/Aside"
const Shop = () => {
  const {
    data: products,
    isLoading,
    setFilterTitle,
    setFilterCategory,
    setFilterStock,
    setFilterMinPrice,
    setFilterMaxPrice,
    prevPage,
    nextPage,
    disablePrevPage,
    disableNextPage,
  } = useGetWithFilters()

  return (
    <Flex>
      <Aside
        setFilterTitle={setFilterTitle}
        setFilterCategory={setFilterCategory}
        setFilterStock={setFilterStock}
        setFilterMaxPrice={setFilterMaxPrice}
        setFilterMinPrice={setFilterMinPrice}
      />
      <Box w="100%">
        {isLoading && (
          <Spinner
            thickness="4px"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
            mx="50%"
            my="50px"
          />
        )}
        {isLoading || (
          <SimpleGrid columns={[2, null, 3, null]} spacing="10px">
            {products &&
              products.map((product) => {
                return <CardProduct key={product.id} info={product} />
              })}
          </SimpleGrid>
        )}
        <Flex justifyContent="center">
          <Button onClick={prevPage} disabled={disablePrevPage} m="5px">
            {" "}
            <ArrowBackIcon />
          </Button>
          <Button onClick={nextPage} disabled={disableNextPage} m="5px">
            {" "}
            <ArrowForwardIcon />
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
export { Shop }
