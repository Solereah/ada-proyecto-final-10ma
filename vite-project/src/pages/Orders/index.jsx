import { SimpleGrid, Spinner } from "@chakra-ui/react"

import { useGet } from "../../hooks/useGet"
import { OrderCard } from "./components/OrderCard"
const Orders = () => {
  const { data: orders, loading } = useGet("orders")

  return (
    <>
      {loading && (
        <Spinner
          thickness="4px"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
          mx="50%"
          my="50px"
        />
      )}
      {loading || (
        <SimpleGrid minChildWidth="200px" spacing="25px" mx="auto" w="70%">
          {orders &&
            orders.map((order) => {
              return <OrderCard key={order.id} order={order} />
            })}
        </SimpleGrid>
      )}
    </>
  )
}
export { Orders }
